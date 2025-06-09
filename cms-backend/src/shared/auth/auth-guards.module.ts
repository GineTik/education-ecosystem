import { Module } from "@nestjs/common";
import { GoogleStrategy } from "./google.strategy";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
	imports: [PrismaModule],
	providers: [GoogleStrategy],
	exports: [GoogleStrategy],
})
export class AuthGuardsModule {}
