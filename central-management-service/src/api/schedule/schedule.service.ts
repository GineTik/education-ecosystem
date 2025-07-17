import { InstanceModuleTypes, PrismaService } from "@/shared/prisma";
import { PublicApiBasicService } from "@/shared/public-api";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ScheduleService extends PublicApiBasicService {
    constructor(prisma: PrismaService) {
        super(prisma);
    }

    async getSchedule(instanceId: string, groupId: string) {
        return this.sendRequestToModule(
            instanceId,
            InstanceModuleTypes.schedule,
            `/${groupId}`,
        );
    }
}
