import { AUTH_ERRORS_MESSAGES } from "./auth.constants";

export function getAuthError(
  status: number,
  email: string | null,
  message: string | null
) {
  return status === 401 || status === 403
    ? AUTH_ERRORS_MESSAGES.DOMAIN_NOT_SUPPORTED(email?.split("@")[1] ?? "")
    : {
        message,
        heading: "Упс...",
      };
}
