import { Controller, Get, Param } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";

@Controller()
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get("schedule/:groupId")
  async getSchedule(@Param("groupId") groupId: number) {
    return this.scheduleService.getSchedule(groupId);
  }

  @Get("lessons")
  async getAllLessons() {
    return this.scheduleService.getAllLessons();
  }
}
