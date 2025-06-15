import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ApiAuthModule } from "@/api/auth";
import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { UsersModule } from "@/api/users";
import { InstancesModule } from "@/api/instances";
import { ModulesModule } from "@/api/modules";
import { UsersRelatedModule } from "@/api/users-related";
import { InstitutionProfileModule } from "@/api/institution-profile/institution-profile.module";
import { ScheduleModule } from "@/api/schedule";
    
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env",
        }),
        NestJwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: process.env.JWT_ACCESS_EXPIRATION_TIME,
            },
        }),
        ApiAuthModule,
        UsersModule,
        InstancesModule,
        ModulesModule,
        UsersRelatedModule,
        InstitutionProfileModule,
        ScheduleModule
    ],
})
export class AppModule {}
