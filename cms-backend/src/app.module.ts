import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ApiAuthModule } from "@/api/auth";
import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { UsersModule } from "@/api/users";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env",
        }),
        ApiAuthModule,
        UsersModule,
        NestJwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: process.env.JWT_ACCESS_EXPIRATION_TIME,
            },
        }),
    ],
})
export class AppModule {}
