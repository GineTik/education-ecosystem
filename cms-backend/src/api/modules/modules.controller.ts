import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ModulesService } from "./modules.service";
import { UpdateModuleDto } from "./dto/update-module.dto";
import { Auth, SignedUser } from "@/shared/auth/decorators";
import { PERMISSIONS } from "@/shared/auth";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { GetModuleDto } from "./dto/get-module.dto";
import { UserWithPermissions } from "@/shared/auth/dto";

@Controller("modules")
export class ModulesController {
    constructor(private readonly modulesService: ModulesService) {}

    @Post(":id")
    @Auth(PERMISSIONS.INSTANCE_MODULE_UPDATE)
    @ApiBody({ type: UpdateModuleDto })
    @ApiResponse({ status: 201 })
    async update(
        @Body() updateModuleDto: UpdateModuleDto,
        @Param("id") id: string,
        @SignedUser() user: UserWithPermissions,
    ): Promise<void> {
        await this.modulesService.update(
            plainToInstance(UpdateModuleDto, updateModuleDto),
            id,
            user,
        );
    }

    @Get(":instanceId")
    @Auth(PERMISSIONS.INSTANCE_MODULE_READ)
    @ApiResponse({ status: 200, type: [GetModuleDto] })
    async getModules(
        @Param("instanceId") instanceId: string,
    ): Promise<GetModuleDto[]> {
        return await this.modulesService.getModules(instanceId);
    }
}
