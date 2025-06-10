import { AuthTokensDto } from "./auth-tokens.dto";

export type LoginResponseDto = {
    user: {
        id: string;
        name: string;
        avatarUrl: string;
        role: string;
        email: string;
    };
    tokens: AuthTokensDto;
};
