export class LoginByGoogleDto {
    accessToken: string;
    refreshToken: string;
    email: string;
    emailVerified: boolean;
    picture: string;
    firstName: string;
    lastName: string;
}
