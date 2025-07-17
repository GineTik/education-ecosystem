import { PERMISSIONS } from "@/shared/auth";
import { Auth, SignedUser } from "@/shared/auth/decorators";
import { UserWithPermissions } from "@/shared/auth/dto";
import { BadRequestException, Controller, Get } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import {
    GetModuleDto,
    ModulesService,
    MODULES_ERROR_CODES,
} from "@/api/modules";

@Controller("users")
export class UsersRelatedController {
    constructor(private readonly modulesService: ModulesService) {}

    @Get("modules")
    @Auth(PERMISSIONS.INSTANCE_MODULE_READ)
    @ApiResponse({ status: 200, type: [GetModuleDto] })
    async getModules(
        @SignedUser() user: UserWithPermissions,
    ): Promise<GetModuleDto[]> {
        if (user.instanceId === null) {
            throw new BadRequestException(
                MODULES_ERROR_CODES.YOU_HAS_NOT_INSTANCE,
            );
        }
        return await this.modulesService.getModules(user.instanceId);
    }
}
