import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as fs from "fs";
import { ConfigService } from "@nestjs/config";

export function setupSwagger(app: INestApplication) {
    const config = app.get(ConfigService);

    const swaggerConfig = new DocumentBuilder()
        .setTitle("CMS API")
        .setDescription("CMS API description")
        .setVersion("1.0")
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    fs.writeFileSync(
        config.get("EXPORT_SWAGGER_API_PATH") as string,
        JSON.stringify(document, null, 2),
    );
    SwaggerModule.setup("api", app, document);
}
