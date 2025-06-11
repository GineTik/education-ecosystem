import { PrismaService } from "@/shared/prisma";
import { BadRequestException, Injectable } from "@nestjs/common";
import { ProfileDto } from "./dto/profile.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { ERROR_CODES } from "./users.constants";
import { pullDomainFromEmail } from "@/shared/utils/pull-domain-from-email";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async getById(id: string): Promise<ProfileDto | null> {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: {
                emails: true,
            },
        });

        if (!user) {
            return null;
        }

        return {
            id: user.id,
            email: user.emails[0].email,
            firstName: user.firstName,
            lastName: user.lastName,
            avatarUrl: user.avatarUrl,
            createdAt: user.createdAt,
            role: user.roleSlug,
        };
    }

    async getAll(): Promise<ProfileDto[]> {
        const users = await this.prisma.user.findMany({
            include: {
                emails: true,
            },
        });

        return users.map((user) => ({
            id: user.id,
            email: user.emails[0].email,
            firstName: user.firstName,
            lastName: user.lastName,
            avatarUrl: user.avatarUrl,
            createdAt: user.createdAt,
            role: user.roleSlug,
        }));
    }

    async create(dto: CreateUserDto): Promise<void> {
        await this.throwIfEmailAlreadyExists(dto.email);
        await this.throwIfDomainNotAllowedByInstance(dto.email, dto.instanceId);

        await this.prisma.user.create({
            data: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                avatarUrl: this.generateAvatarUrl(dto.email),
                emails: {
                    create: {
                        email: dto.email,
                    },
                },
                instance: {
                    connect: {
                        id: dto.instanceId,
                    },
                },
                role: {
                    connect: {
                        slug: dto.roleSlug,
                    },
                },
            },
        });
    }

    private async throwIfEmailAlreadyExists(email: string): Promise<void> {
        const emailExists = await this.prisma.email.findFirst({
            where: {
                email,
            },
        });

        if (emailExists) {
            throw new BadRequestException(ERROR_CODES.EMAIL_ALREADY_EXISTS);
        }
    }

    private async throwIfDomainNotAllowedByInstance(
        email: string,
        instanceId: string,
    ): Promise<void> {
        const domain = pullDomainFromEmail(email);
        const instance = await this.prisma.institutionInstance.findUnique({
            where: {
                id: instanceId,
            },
        });

        if (!instance?.validMailDomains.includes(domain)) {
            throw new BadRequestException(ERROR_CODES.DOMAIN_NOT_ALLOWED);
        }
    }

    private generateAvatarUrl(email: string): string {
        return `https://api.dicebear.com/9.x/lorelei/svg?seed=${email}`;
    }
}
