import { Controller, ForbiddenException, Get, Param } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";
import { Auth, SignedUser } from "@/shared/auth/decorators";
import { User } from "@/shared/prisma";
import { GetWeekDto } from "./dto/get-week.dto";
import { ApiResponse } from "@nestjs/swagger";

@Controller("schedule")
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) {}
    
    @Get(":groupId")
    @Auth()
    @ApiResponse({
        status: 200,
        type: [GetWeekDto],
    })
    async getSchedule(@SignedUser() user: User, @Param("groupId") groupId: string) {
        if (!user.instanceId) {
            throw new ForbiddenException();
        }
        return this.scheduleService.getSchedule(user.instanceId!, groupId);
    } 
}