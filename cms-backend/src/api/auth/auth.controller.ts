import { Controller, Get, Redirect, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AUTH_PROVIDERS } from "@/shared/constants/auth.constants";
import { LoginGoogleDto } from "../../shared/auth-guards/dto/login-google.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get("google")
	@Redirect("/auth/google")
	@UseGuards(AuthGuard(AUTH_PROVIDERS.LOGIN_GOOGLE))
	async googleAuth(@Req() req: Request) {
		const googlePayload = req["user"] as LoginGoogleDto;
		try {
			await this.authService.loginByGoogle(googlePayload);
			return { url: "/login/successfully" };
		} catch (error) {
			console.error(error);
			return { url: "/login/failed" };
		}
	}
}
