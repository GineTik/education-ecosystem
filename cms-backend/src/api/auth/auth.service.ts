import { PrismaService } from "@/shared/prisma";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginGoogleDto } from "@/shared/auth";
import { ROLES_SLUG } from "@/shared/auth";
import { Email, User } from "@/shared/prisma";

@Injectable()
export class AuthService {
	constructor(private readonly prisma: PrismaService) {}

	async loginByGoogle(dto: LoginGoogleDto): Promise<User> {
		const existingEmail = await this.findEmail(dto.email);

		if (existingEmail) {
			await this.updateEmailTokens(dto);
			return existingEmail.user;
		} else {
			return await this.createStudent(dto);
		}
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
	}: LoginGoogleDto) {
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
	}: LoginGoogleDto) {
		const domain = email.split("@")[1];
		const institution = await this.prisma.institutionInstance.findFirst({
			where: {
				validMailDomains: {
					has: domain,
				},
			},
		});

		if (!institution) {
			throw new UnauthorizedException(`Домен ${domain} не підтримується`);
		}

		const user = await this.prisma.user.create({
			data: {
				emails: {
					create: {
						email,
						googleAccessToken: accessToken,
						googleRefreshToken: refreshToken,
					},
				},
				role: {
					connect: { slug: ROLES_SLUG.STUDENT },
				},
				instance: {
					connect: { id: institution.id },
				},
				avatarUrl: picture,
			},
		});

		return user;
	}
}
