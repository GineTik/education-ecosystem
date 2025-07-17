import {
    InternalServerErrorException,
    NotFoundException,
} from "@nestjs/common";
import { InstitutionInstanceModule, PrismaService } from "../prisma";
import axios, { AxiosResponse } from "axios";

export const PUBLIC_API_ERROR_CODES = {
    MODULE_NOT_ENABLED: "MODULE_NOT_ENABLED",
    INTERNAL_ERROR_ON_INSTITUTION_SIDE: "INTERNAL_ERROR_ON_INSTITUTION_SIDE",
} as const;

export class PublicApiBasicService {
    constructor(protected readonly prisma: PrismaService) {}

    protected async getCurrentModule(instanceId: string, typeSlug: string) {
        const instanceModule =
            await this.prisma.institutionInstanceModule.findUnique({
                where: {
                    instanceId_typeSlug: {
                        instanceId,
                        typeSlug,
                    },
                },
            });

        if (!instanceModule || !instanceModule.isEnabled) {
            throw new NotFoundException(
                PUBLIC_API_ERROR_CODES.MODULE_NOT_ENABLED,
            );
        }

        return instanceModule;
    }

    protected async sendRequestToModule<T>(
        instanceId: string,
        typeSlug: string,
        endpoint?: string,
    ): Promise<T> {
        const module = await this.getCurrentModule(instanceId, typeSlug);
        const profile = await this.sendRequest<T>(module, endpoint);
        return profile.data;
    }

    private async sendRequest<T>(
        module: InstitutionInstanceModule,
        endpoint?: string,
    ): Promise<AxiosResponse<T>> {
        return await axios
            .get<T>(module.baseURL + (endpoint ?? ""), {
                headers: {
                    "X-API-KEY": module.apiKey,
                },
            })
            .catch((error) => {
                console.error(error);
                throw new InternalServerErrorException(
                    PUBLIC_API_ERROR_CODES.INTERNAL_ERROR_ON_INSTITUTION_SIDE,
                );
            });
    }
}
