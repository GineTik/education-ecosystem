import { applyDecorators, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AUTH_PROVIDERS } from "../auth.constants";
import { PermissionsGuard } from "../guards/permissions.guard";
import { Permissions } from "./permissions.decorator";
import { Permission } from "../permissions.constants";

export function Auth(...permissions: Permission[]) {
    const decorators = [UseGuards(AuthGuard(AUTH_PROVIDERS.JWT_STRATEGY))];

    if (permissions.length > 0) {
        decorators.push(Permissions(...permissions));
        decorators.push(UseGuards(PermissionsGuard));
    }

    return applyDecorators(...decorators);
}
