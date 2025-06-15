import { InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InstitutionInstanceModule, PrismaService } from "../prisma";
import axios from "axios";

export const PUBLIC_API_ERROR_CODES = {
    MODULE_NOT_ENABLED: "MODULE_NOT_ENABLED",
    INTERNAL_ERROR_ON_INSTITUTION_SIDE: "INTERNAL_ERROR_ON_INSTITUTION_SIDE",
} as const;

export class PublicApiBacisService {
    constructor(
        protected readonly prisma: PrismaService
    ) {}
    
    protected async getCurrentModule(instanceId: string, typeSlug: string) {
        const instanceModule = await this.prisma.institutionInstanceModule.findUnique({
          where: {
            instanceId_typeSlug: {
              instanceId,
              typeSlug,
            },
          },
        });
        
        if (!instanceModule || !instanceModule.isEnabled) {
          throw new NotFoundException(PUBLIC_API_ERROR_CODES.MODULE_NOT_ENABLED);
       }

       return instanceModule;
    }
    
    protected async sendRequst(module: InstitutionInstanceModule, endpoint?: string) {
       return await axios.get(module.baseURL + (endpoint ?? ''), {
          headers: {
              "X-API-KEY": module.apiKey,
          },
      }).catch((error) => {
          console.error(error);
          throw new InternalServerErrorException(PUBLIC_API_ERROR_CODES.INTERNAL_ERROR_ON_INSTITUTION_SIDE);
      });
    }

    protected async sendRequest(instanceId: string, typeSlug: string, endpoint?: string) {
      const module = await this.getCurrentModule(instanceId, typeSlug)
      const profile = await this.sendRequst(module, endpoint);
      return profile.data;
    }
}