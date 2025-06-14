import { PrismaService } from "@/shared/prisma";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { UpdateModuleDto } from "./dto/update-module.dto";
import { UserWithPermissions } from "@/shared/auth/dto";
import { ERROR_CODES } from "@/shared/auth";
import { InstitutionInstanceModule } from "@/shared/prisma/generated/prisma";
import { GetModuleDto } from "./dto/get-module.dto";

@Injectable()
export class ModulesService {
    constructor(private readonly prisma: PrismaService) {}

    async update(
        updateModuleDto: UpdateModuleDto,
        id: string,
        user: UserWithPermissions,
    ): Promise<void> {
        if (user.instanceId !== id) {
            throw new ForbiddenException(ERROR_CODES.USER_HAS_NO_PERMISSION);
        }

        await this.prisma.institutionInstanceModule.update({
            where: { id },
            data: updateModuleDto,
        });
    }

    async getModules(instanceId: string): Promise<GetModuleDto[]> {
        const modules = await this.prisma.institutionInstanceModule.findMany({
            where: { instanceId },
        });

        return modules.map((module) => ({
            id: module.id,
            type: module.typeId,
            baseUrl: module.baseURL,
            apiKey: module.apiKey,
            isEnabled: module.isEnabled,
        }));
    }
}
