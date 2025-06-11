import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { AUTH_PROVIDERS, GOOGLE_REDIRECT_URL } from "@/shared/auth";
import { Injectable } from "@nestjs/common";
import { LoginByGoogleDto } from "../dto/login-google.dto";

@Injectable()
export class GoogleStrategy extends PassportStrategy(
    Strategy,
    AUTH_PROVIDERS.LOGIN_GOOGLE,
) {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: GOOGLE_REDIRECT_URL,
            scope: ["email", "profile"],
            accessType: "offline",
            prompt: "consent",
        });
    }

    validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
    ): LoginByGoogleDto {
        const { emails, photos } = profile;
        return {
            email: emails[0].value,
            emailVerified: emails[0].verified,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            picture: photos[0].value,
            accessToken,
            refreshToken,
        };
    }
}
