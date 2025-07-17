import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";
import { ModulesService } from "./modules.service";
import { UpdateModuleDto } from "./dto/update-module.dto";
import { Auth, SignedUser } from "@/shared/auth/decorators";
import { PERMISSIONS } from "@/shared/auth";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { GetModuleDto } from "./dto/get-module.dto";
import { UserWithPermissions } from "@/shared/auth/dto";
import { ERROR_CODES } from "./modules.constants";

@Controller("modules")
export class ModulesController {
    constructor(private readonly modulesService: ModulesService) {}

    @Put(":typeSlug")
    @Auth(PERMISSIONS.INSTANCE_MODULE_UPDATE)
    @ApiBody({ type: UpdateModuleDto })
    @ApiResponse({ status: 201 })
    async update(
        @Param("typeSlug") typeSlug: string,
        @Body() updateModuleDto: UpdateModuleDto,
        @SignedUser() user: UserWithPermissions,
    ): Promise<void> {
        await this.modulesService.update(
            plainToInstance(UpdateModuleDto, updateModuleDto),
            typeSlug,
            user,
        );
    }

    @Get()
    @Auth(PERMISSIONS.INSTANCE_MODULE_READ)
    @ApiResponse({ status: 200, type: [GetModuleDto] })
    async getAll(
        @SignedUser() user: UserWithPermissions,
    ): Promise<GetModuleDto[]> {
        if (user.instanceId === null) {
            throw new BadRequestException(ERROR_CODES.YOU_HAS_NOT_INSTANCE);
        }
        return await this.modulesService.getModules(user.instanceId);
    }
}
