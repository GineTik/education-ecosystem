import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupAdmin } from "./shared/setups/admin-setup";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	await setupAdmin(app);

	await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
