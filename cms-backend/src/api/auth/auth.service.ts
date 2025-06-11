import { PrismaService } from "@/shared/prisma";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ERROR_CODES, LoginByGoogleDto } from "@/shared/auth";
import { Email, User } from "@/shared/prisma";
import { JwtService, ROLES_SLUG } from "@/shared/auth";
import { AuthTokensDto } from "@/shared/auth/dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
    ) {}

    async loginByGoogle(dto: LoginByGoogleDto): Promise<AuthTokensDto> {
        const existingEmail = await this.findEmail(dto.email);

        if (existingEmail) {
            await this.updateEmailTokens(dto);
        }

        const user = existingEmail
            ? existingEmail.user
            : await this.createStudent(dto);

        return await this.jwtService.generateTokens({
            userId: user.id,
        });
    }

    private async findEmail(
        email: string,
    ): Promise<(Email & { user: User }) | null> {
        return this.prisma.email.findFirst({
            where: {
                email,
            },
            include: {
                user: true,
            },
        });
    }

    private async updateEmailTokens({
        email,
        accessToken,
        refreshToken,
    }: LoginByGoogleDto) {
        await this.prisma.email.update({
            where: { email },
            data: {
                googleAccessToken: accessToken,
                googleRefreshToken: refreshToken,
            },
        });
    }

    private async createStudent({
        email,
        accessToken,
        refreshToken,
        picture,
        firstName,
        lastName,
        emailVerified,
    }: LoginByGoogleDto) {
        const domain = email.split("@")[1];
        const institution = await this.prisma.institutionInstance.findFirst({
            where: {
                validMailDomains: {
                    has: domain,
                },
            },
        });

        if (!institution) {
            throw new UnauthorizedException(ERROR_CODES.DOMAIN_NOT_SUPPORTED);
        }

        const user = await this.prisma.user.create({
            data: {
                emails: {
                    create: {
                        email,
                        googleAccessToken: accessToken,
                        googleRefreshToken: refreshToken,
                        googleEmailVerified: emailVerified,
                    },
                },
                role: {
                    connect: { slug: ROLES_SLUG.STUDENT },
                },
                instance: {
                    connect: { id: institution.id },
                },
                avatarUrl: picture,
                firstName,
                lastName,
            },
        });

        return user;
    }
}
