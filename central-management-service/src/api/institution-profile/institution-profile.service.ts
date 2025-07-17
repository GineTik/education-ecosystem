import { InstanceModuleTypes, PrismaService } from "@/shared/prisma";
import { PublicApiBasicService } from "@/shared/public-api";
import { Injectable } from "@nestjs/common";
import { GetFacultyDto } from "./dto/get-faculty.dto";
import { GetSpecialtyDto } from "./dto/get-specialty.dto";
import { GetAboutDto } from "./dto/get-about.dto";

@Injectable()
export class InstitutionProfileService extends PublicApiBasicService {
    constructor(prisma: PrismaService) {
        super(prisma);
    }

    async getProfile(instanceId: string): Promise<Record<string, string>> {
        return this.sendRequestToModule<Record<string, string>>(
            instanceId,
            InstanceModuleTypes.profile,
        );
    }

    async getFaculties(instanceId: string): Promise<GetFacultyDto[]> {
        return this.sendRequestToModule<GetFacultyDto[]>(
            instanceId,
            InstanceModuleTypes.profile,
            "/faculties",
        );
    }

    async getAbout(instanceId: string): Promise<GetAboutDto> {
        const aboutMarkdown = await this.sendRequestToModule<string>(
            instanceId,
            InstanceModuleTypes.profile,
            "/about",
        );
        return {
            about: aboutMarkdown,
        };
    }

    async getSpecialties(instanceId: string): Promise<GetSpecialtyDto[]> {
        return this.sendRequestToModule<GetSpecialtyDto[]>(
            instanceId,
            InstanceModuleTypes.profile,
            "/specialties",
        );
    }
}
