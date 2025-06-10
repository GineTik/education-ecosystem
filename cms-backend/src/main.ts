import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupSwagger } from "@/shared/swagger";
import { setupAdmin } from "@/shared/admin-setup";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await setupAdmin(app);
    setupSwagger(app);

    await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
