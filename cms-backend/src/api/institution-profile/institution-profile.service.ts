import { InstanceModuleTypes, PrismaService } from "@/shared/prisma";
import { PUBLIC_API_ERROR_CODES, PublicApiBacisService } from "@/shared/public-api";
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import axios from "axios";
import { GetFacultyDto } from "./dto/get-faculty.dto";
import { GetSpecialtyDto } from "./dto/get-specialty.dto";
import { GetAboutDto } from "./dto/get-about.dto";

@Injectable()
export class InstitutionProfileService extends PublicApiBacisService {
  constructor(
    prisma: PrismaService,
  ) {
    super(prisma);
  }

  async getProfile(instanceId: string) {
    return this.sendRequest(instanceId, InstanceModuleTypes.profile);
  }
  
  async getFaculties(instanceId: string): Promise<GetFacultyDto[]> {
    return this.sendRequest(instanceId, InstanceModuleTypes.profile, '/faculties');
  }

  async getAbout(instanceId: string): Promise<GetAboutDto> {
    const aboutMarkdown = await this.sendRequest(instanceId, InstanceModuleTypes.profile, '/about');
    return {
      about: aboutMarkdown
    }
  }

  async getSpecialties(instanceId: string): Promise<GetSpecialtyDto[]> {
    return this.sendRequest(instanceId, InstanceModuleTypes.profile, '/specialties');
  }
}