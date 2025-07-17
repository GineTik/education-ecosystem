import { PrismaService } from "@/shared/prisma";
import { Injectable } from "@nestjs/common";
import { UpdateModuleDto } from "./dto/update-module.dto";
import { UserWithPermissions } from "@/shared/auth/dto";
import { GetModuleDto } from "./dto/get-module.dto";

@Injectable()
export class ModulesService {
    constructor(private readonly prisma: PrismaService) {}

    async update(
        updateModuleDto: UpdateModuleDto,
        typeSlug: string,
        user: UserWithPermissions,
    ): Promise<void> {
        await this.prisma.institutionInstanceModule.upsert({
            where: {
                instanceId_typeSlug: {
                    instanceId: user.instanceId!,
                    typeSlug: typeSlug,
                },
            },
            create: {
                baseURL: updateModuleDto.baseUrl,
                apiKey: updateModuleDto.apiKey,
                isEnabled: updateModuleDto.isEnabled,
                status: "none",
                expectedMajorVersion: 1,
                expectedMinorVersion: 0,
                type: {
                    connect: {
                        slug: typeSlug,
                    },
                },
                instance: {
                    connect: {
                        id: user.instanceId!,
                    },
                },
            },
            update: {
                baseURL: updateModuleDto.baseUrl,
                apiKey: updateModuleDto.apiKey,
                isEnabled: updateModuleDto.isEnabled,
            },
        });
    }

    async getModules(instanceId: string): Promise<GetModuleDto[]> {
        const moduleTypes =
            await this.prisma.institutionInstanceModuleType.findMany({
                include: {
                    modules: {
                        where: {
                            instanceId,
                        },
                    },
                },
            });

        return moduleTypes.map((type) => {
            const module =
                type.modules.length === 0 ? undefined : type.modules[0];
            return {
                slug: type.slug,
                name: type.name,
                description: type.description,
                baseUrl: module?.baseURL,
                apiKey: module?.apiKey,
                isEnabled: module?.isEnabled,
            };
        });
    }
}
