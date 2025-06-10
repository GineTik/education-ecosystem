import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GoogleStrategy } from "./strategies/google.strategy";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { JwtService } from "./jwt.service";

@Module({
    imports: [PrismaModule, ConfigModule],
    providers: [GoogleStrategy, JwtStrategy, JwtService],
    exports: [GoogleStrategy, JwtStrategy, JwtService],
})
export class AuthModule {}
