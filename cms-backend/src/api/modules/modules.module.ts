import { Module } from "@nestjs/common";
import { ModulesService } from "./modules.service";
import { ModulesController } from "./modules.controller";
import { PrismaModule } from "@/shared/prisma";

@Module({
    controllers: [ModulesController],
    providers: [ModulesService],
    imports: [PrismaModule],
    exports: [ModulesService],
})
export class ModulesModule {}
