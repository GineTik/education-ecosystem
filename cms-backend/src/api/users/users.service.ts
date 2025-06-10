import { PrismaService, User } from "@/shared/prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async getById(id: string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: { id },
        });
    }
}
