import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AuthPayloadDto } from "../dto/auth-payload.dto";

export const SignedUser = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext) => {
        const request = ctx
            .switchToHttp()
            .getRequest<Request & { user: AuthPayloadDto }>();
        return request.user;
    },
);
