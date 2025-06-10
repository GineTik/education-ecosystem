import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ACCESS_COOKIE_NAME, AUTH_PROVIDERS } from "@/shared/auth";
import { LoginGoogleDto } from "@/shared/auth";
import { AuthService } from "./auth.service";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService,
    ) {}

    @Get("google")
    @UseGuards(AuthGuard(AUTH_PROVIDERS.LOGIN_GOOGLE))
    googleAuth() {
        // Passport (AuthGuard) redirect to google auth page
    }

    @Get("google/callback")
    @UseGuards(AuthGuard(AUTH_PROVIDERS.LOGIN_GOOGLE))
    async googleAuthCallback(@Req() req: Request, @Res() res: Response) {
        const googlePayload = req["user"] as LoginGoogleDto;
        try {
            const tokens = await this.authService.loginByGoogle(googlePayload);

            res.cookie(ACCESS_COOKIE_NAME, tokens.accessToken, {
                secure: this.configService.get("NODE_ENV") === "production",
                sameSite: "lax",
                maxAge: this.configService.get(
                    "ACCESS_TOKEN_COOKIE_MAX_AGE",
                ) as number,
                path: "/",
                httpOnly: true,
            });

            res.status(301).redirect(
                this.configService.get(
                    "FRONTEND_SUCCESS_REDIRECT_URL",
                ) as string,
            );
        } catch (error) {
            res.status(301).redirect(
                this.configService.get("FRONTEND_FAIL_REDIRECT_URL") +
                    "?error=" +
                    error.message +
                    "&status=" +
                    error.status +
                    "&email=" +
                    googlePayload.email,
            );
        }
    }
}
