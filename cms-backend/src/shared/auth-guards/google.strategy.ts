import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { PrismaService } from "@/shared/prisma/prisma.service";
import { AUTH_PROVIDERS } from "@/shared/constants/auth.constants";
import { Injectable } from "@nestjs/common";
import { LoginGoogleDto } from "./dto/login-google.dto";

@Injectable()
export class GoogleStrategy extends PassportStrategy(
	Strategy,
	AUTH_PROVIDERS.LOGIN_GOOGLE,
) {
	constructor(private readonly prisma: PrismaService) {
		super({
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			scope: ["email", "profile", "offline_access"],
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: any,
	): Promise<LoginGoogleDto> {
		const { emails, photos } = profile;
		return {
			email: emails[0].value,
			picture: photos[0].value,
			accessToken,
			refreshToken,
		};
	}

	async updateEmailTokens(
		email: string,
		accessToken: string,
		refreshToken: string,
	) {
		await this.prisma.email.update({
			where: { email },
			data: {
				googleAccessToken: accessToken,
				googleRefreshToken: refreshToken,
			},
		});
	}
}
