export const PERMISSIONS = {
    // Institution permissions
    INSTANCE_MANAGE: "institution:manage",
    INSTANCE_USERS: "institution:users",
    INSTANCE_READ: "institution:read",

    // Users
    USERS_MANAGE: "users:manage",
    USERS_READ: "users:read",

    // () mean specific item, (instance) is scope that allows to do something within a specific institution instance (in this case, you need to have "instanceId" field in the table)
    INSTANCE_MODULE_CREATE: "(instance):module:create",
    INSTANCE_MODULE_READ: "(instance):module:read",
    INSTANCE_MODULE_UPDATE: "(instance):module:update",
    INSTANCE_MODULE_DELETE: "(instance):module:delete",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
