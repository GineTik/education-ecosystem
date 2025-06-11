export const PERMISSIONS = {
    // Institution permissions
    INSTITUTION_MANAGE: "institution:manage",
    INSTITUTION_USERS: "institution:users",
    INSTITUTION_READ: "institution:read",

    // Users
    USERS_MANAGE: "users:manage",
    USERS_READ: "users:read",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
