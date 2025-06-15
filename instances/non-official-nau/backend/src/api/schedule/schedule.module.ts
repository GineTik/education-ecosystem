import { Module } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";
import { ScheduleController } from "./schedule.controller";
import { ParserModule } from "@/shared/parser";
import { PrismaModule } from "@/shared/prisma";

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
  imports: [PrismaModule, ParserModule],
})
export class ScheduleModule {}
