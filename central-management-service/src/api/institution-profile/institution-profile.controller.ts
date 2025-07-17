import { Controller, ForbiddenException, Get } from "@nestjs/common";
import { InstitutionProfileService } from "./institution-profile.service";
import { Auth, SignedUser } from "@/shared/auth/decorators";
import { User } from "@/shared/prisma";
import { ApiResponse } from "@nestjs/swagger";
import { InstitutionShortProfileDto } from "./dto/institution-short-profile.dto";
import { GetSpecialtyDto } from "./dto/get-specialty.dto";
import { GetFacultyDto } from "./dto/get-faculty.dto";
import { GetAboutDto } from "./dto/get-about.dto";

@Controller("institution-profile")
export class InstitutionProfileController {
    constructor(
        private readonly institutionProfileService: InstitutionProfileService,
    ) {}

    @Get()
    @Auth()
    @ApiResponse({
        status: 200,
        type: InstitutionShortProfileDto,
    })
    async getProfile(@SignedUser() user: User) {
        if (!user.instanceId) {
            throw new ForbiddenException();
        }
        return this.institutionProfileService.getProfile(user.instanceId);
    }

    @Get("/about")
    @Auth()
    @ApiResponse({
        status: 200,
        type: GetAboutDto,
    })
    async getAbout(@SignedUser() user: User) {
        if (!user.instanceId) {
            throw new ForbiddenException();
        }
        return this.institutionProfileService.getAbout(user.instanceId);
    }

    @Get("/faculties")
    @Auth()
    @ApiResponse({
        status: 200,
        type: [GetFacultyDto],
    })
    async getFaculties(@SignedUser() user: User) {
        if (!user.instanceId) {
            throw new ForbiddenException();
        }
        return this.institutionProfileService.getFaculties(user.instanceId);
    }

    @Get("/specialty")
    @Auth()
    @ApiResponse({
        status: 200,
        type: [GetSpecialtyDto],
    })
    async getSpecialties(@SignedUser() user: User) {
        if (!user.instanceId) {
            throw new ForbiddenException();
        }
        return this.institutionProfileService.getSpecialties(user.instanceId);
    }
}
