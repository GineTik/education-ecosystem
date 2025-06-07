import { Module } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";
import { ScheduleController } from "./schedule.controller";
import { ParserModule } from "@/shared/parser";

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
  imports: [ParserModule],
})
export class ScheduleModule {}
