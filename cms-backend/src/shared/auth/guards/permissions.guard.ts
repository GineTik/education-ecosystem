import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ERROR_CODES, PERMISSIONS_KEY } from "../auth.constants";
import { Permission } from "../permissions.constants";
import { UserWithPermissions } from "../dto/user-with-permissions.dto";
import { ForbiddenResponse } from "@/shared/swagger";

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredPermissions = this.reflector.getAllAndOverride<
            Permission[]
        >(PERMISSIONS_KEY, [context.getHandler(), context.getClass()]);

        if (!requiredPermissions) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user as UserWithPermissions;

        this.throwIfUserNotFound(user);
        this.throwIfHasNotPermission(user.permissions, requiredPermissions);

        return true;
    }

    private throwIfUserNotFound(user: UserWithPermissions) {
        if (!user) {
            throw new UnauthorizedException(ERROR_CODES.UNAUTHORIZED);
        }
    }

    private throwIfHasNotPermission(
        userPermissions: string[],
        requiredPermissions: Permission[],
    ) {
        const hasPermission = requiredPermissions.every((permission) =>
            userPermissions.includes(permission),
        );

        if (!hasPermission) {
            throw new ForbiddenException({
                statusCode: 403,
                message: ERROR_CODES.UNAUTHORIZED,
                requiredPermissions: requiredPermissions,
            } as ForbiddenResponse);
        }
    }
}
