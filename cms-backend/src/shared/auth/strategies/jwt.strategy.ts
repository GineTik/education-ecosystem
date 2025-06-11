import { ConfigService } from "@nestjs/config";
import { ExtractJwt } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "@/shared/prisma";
import {
    ACCESS_COOKIE_KEY,
    ERROR_CODES as AUTH_ERROR_CODES,
    AUTH_PROVIDERS,
} from "../auth.constants";
import { AuthPayloadDto } from "../dto/auth-payload.dto";
import { Request } from "express";
import { UserWithPermissions } from "../dto/user-with-permissions.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy,
    AUTH_PROVIDERS.JWT_STRATEGY,
) {
    constructor(
        private readonly prisma: PrismaService,
        configService: ConfigService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    let token: string | null = null;
                    if (request && request.cookies) {
                        token = request.cookies[ACCESS_COOKIE_KEY] as string;
                    }
                    return token;
                },
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            secretOrKey: configService.get("JWT_SECRET") || "secret",
            ignoreExpiration: false,
        });
    }

    async validate(payload: AuthPayloadDto): Promise<UserWithPermissions> {
        const user = await this.prisma.user.findUnique({
            where: { id: payload.userId },
            include: {
                role: {
                    include: {
                        permissions: true,
                    },
                },
            },
        });

        if (!user) {
            throw new UnauthorizedException(AUTH_ERROR_CODES.USER_NOT_FOUND);
        }

        const permissions =
            user.role?.permissions.map((permission) => permission.slug) || [];

        return {
            ...user,
            permissions,
        };
    }
}
