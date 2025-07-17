import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "@/shared/prisma";
import { AuthModule as SharedAuthModule } from "@/shared/auth";

@Module({
    imports: [PrismaModule, SharedAuthModule],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
