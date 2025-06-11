import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserWithPermissions } from "../dto/user-with-permissions.dto";

export const SignedUser = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext): UserWithPermissions => {
        const request = ctx
            .switchToHttp()
            .getRequest<Request & { user: UserWithPermissions }>();
        return request.user;
    },
);
