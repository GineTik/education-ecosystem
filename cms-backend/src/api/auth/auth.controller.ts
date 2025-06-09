import { Controller, Get, Redirect, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AUTH_PROVIDERS } from "@/shared/auth";
import { LoginGoogleDto } from "@/shared/auth";
import { AuthService } from "./auth.service";
import { ConfigService } from "@nestjs/config";

@Controller("auth")
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService,
	) {}

	@Get("google")
	@Redirect(process.env.FRONTEND_URL)
	@UseGuards(AuthGuard(AUTH_PROVIDERS.LOGIN_GOOGLE))
	async googleAuth(@Req() req: Request) {
		const googlePayload = req["user"] as LoginGoogleDto;
		try {
			await this.authService.loginByGoogle(googlePayload);
			return {
				url: this.configService.get("FRONTEND_SUCCESS_REDIRECT_URL"),
			};
		} catch (error) {
			console.error(error);
			return {
				url: this.configService.get("FRONTEND_ERROR_REDIRECT_URL"),
			};
		}
	}
}
