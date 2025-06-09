export const ROLES_SLUG = {
	STUDENT: "student",
	ADMIN: "admin",
	INSTITUTION_ADMIN: "institution_admin",
} as const;

export type Role = (typeof ROLES_SLUG)[keyof typeof ROLES_SLUG];
