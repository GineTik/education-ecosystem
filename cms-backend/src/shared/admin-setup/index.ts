import { INestApplication } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ROLES_SLUG } from "../auth/roles.constants";

export async function setupAdmin(app: INestApplication) {
    const prisma = app.get(PrismaService);

    const user = await prisma.user.findFirst({
        where: {
            emails: {
                some: {
                    email: process.env.ADMIN_EMAIL,
                },
            },
        },
    });

    if (user) {
        return;
    }

    await prisma.$transaction(async (tx) => {
        await tx.user.deleteMany({
            where: {
                role: {
                    slug: ROLES_SLUG.ADMIN,
                },
            },
        });

        await tx.user.create({
            data: {
                emails: {
                    create: {
                        email: process.env.ADMIN_EMAIL as string,
                    },
                },
                role: {
                    connect: { slug: ROLES_SLUG.ADMIN },
                },
                avatarUrl:
                    "https://api.dicebear.com/9.x/lorelei/svg?seed=Chase",
            },
        });
    });
}
