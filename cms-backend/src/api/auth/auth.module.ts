import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "@/shared/prisma";
import { AuthGuardsModule } from "@/shared/auth";

@Module({
	imports: [PrismaModule, AuthGuardsModule],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
