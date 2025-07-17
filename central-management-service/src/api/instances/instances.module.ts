import { Module } from "@nestjs/common";
import { InstancesService } from "./instances.service";
import { InstancesController } from "./instances.controller";
import { PrismaModule } from "@/shared/prisma";

@Module({
    controllers: [InstancesController],
    providers: [InstancesService],
    imports: [PrismaModule],
})
export class InstancesModule {}
