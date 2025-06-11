export const AUTH_PROVIDERS = {
    LOGIN_GOOGLE: "login-google",
    JWT_STRATEGY: "jwt",
} as const;

export type AuthProvider = (typeof AUTH_PROVIDERS)[keyof typeof AUTH_PROVIDERS];

export const GOOGLE_REDIRECT_URL = "/auth/google/callback";

export const ERROR_CODES = {
    DOMAIN_NOT_SUPPORTED: "DOMAIN_NOT_SUPPORTED",
    USER_NOT_FOUND: "USER_NOT_FOUND",
    UNAUTHORIZED: "UNAUTHORIZED",
};

export const ACCESS_COOKIE_KEY = "access_token_jwt";

export const PERMISSIONS_KEY = "permissions";
