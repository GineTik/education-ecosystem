import { Module } from "@nestjs/common";
import { ScheduleModule } from "./api/schedule";
import { AcademicStructureModule } from "./api/academic-structure";
import { ScheduleModule as NestScheduleModule } from "@nestjs/schedule";
@Module({
  imports: [
    AcademicStructureModule,
    NestScheduleModule.forRoot(),
    ScheduleModule,
  ],
})
export class AppModule {}
