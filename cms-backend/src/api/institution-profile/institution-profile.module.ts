import { Module } from "@nestjs/common";
import { InstitutionProfileController } from "./institution-profile.controller";
import { InstitutionProfileService } from "./institution-profile.service";
import { PrismaModule } from "@/shared/prisma";

@Module({
  controllers: [InstitutionProfileController],
  providers: [InstitutionProfileService],
  imports: [PrismaModule],
})
export class InstitutionProfileModule {}