import { User } from "@/shared/prisma";

export type UserWithPermissions = User & {
    permissions: string[];
};
