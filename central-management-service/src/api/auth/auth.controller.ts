import {
    Controller,
    Get,
    HttpException,
    Req,
    Res,
    UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ACCESS_COOKIE_KEY, AUTH_PROVIDERS } from "@/shared/auth";
import { LoginByGoogleDto } from "@/shared/auth";
import { AuthService } from "./auth.service";
import { ConfigService } from "@nestjs/config";
import { Response } from "express";
import { AuthTokensDto } from "@/shared/auth";

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
        const googlePayload = req["user"] as LoginByGoogleDto;
        try {
            const tokens = await this.authService.loginByGoogle(googlePayload);
            this.addTokensToCookies(res, tokens);
            this.redirectToSuccessPage(res);
        } catch (error) {
            this.redirectToFailedPage(res, error, googlePayload);
        }
    }

    addTokensToCookies(res: Response, tokens: AuthTokensDto) {
        res.cookie(ACCESS_COOKIE_KEY, tokens.accessToken, {
            secure: this.configService.get("NODE_ENV") === "production",
            sameSite: "lax",
            maxAge: this.configService.get(
                "ACCESS_TOKEN_COOKIE_MAX_AGE",
            ) as number,
            path: "/",
            httpOnly: true,
        });
    }

    redirectToSuccessPage(res: Response) {
        res.status(302).redirect(
            this.configService.get("FRONTEND_SUCCESS_REDIRECT_URL") as string,
        );
    }

    redirectToFailedPage(
        res: Response,
        error: Error,
        googlePayload: LoginByGoogleDto,
    ) {
        const status = error instanceof HttpException ? error.getStatus() : 500;
        res.status(301).redirect(
            this.configService.get("FRONTEND_FAIL_REDIRECT_URL") +
                "?error=" +
                error.message +
                "&status=" +
                status +
                "&email=" +
                googlePayload.email,
        );
    }
}
