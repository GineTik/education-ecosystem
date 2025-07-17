import { Module } from "@nestjs/common";
import { ModulesModule } from "@/api/modules";
import { UsersRelatedController } from "./users-related.controller";

@Module({
    controllers: [UsersRelatedController],
    imports: [ModulesModule],
})
export class UsersRelatedModule {}
