import { InstanceModuleTypes, PrismaService } from "@/shared/prisma";
import { PublicApiBacisService } from "@/shared/public-api";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ScheduleService extends PublicApiBacisService {
    constructor(prisma: PrismaService) {
        super(prisma);
    }

    async getSchedule(instanceId: string, groupId: string) {
        return this.sendRequest(instanceId, InstanceModuleTypes.schedule, `/${groupId}`);
    }
}