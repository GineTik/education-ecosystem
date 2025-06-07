import { Module } from "@nestjs/common";
import { AcademicStructureService } from "./academic-structure.service";
import { AcademicStructureController } from "./academic-structure.controller";
import { ParserModule } from "@/shared/parser";
import { AcademicStructureRepository } from "./academic-structure.repository";
import { PrismaModule } from "@/shared/prisma";

@Module({
  controllers: [AcademicStructureController],
  providers: [AcademicStructureService, AcademicStructureRepository],
  imports: [ParserModule, PrismaModule],
})
export class AcademicStructureModule {}
