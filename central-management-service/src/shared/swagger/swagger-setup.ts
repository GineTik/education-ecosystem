import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as fs from "fs";
import { ConfigService } from "@nestjs/config";
import { ROLES_SLUG } from "../auth/roles.constants";
import { PERMISSIONS } from "../auth/permissions.constants";

export function setupSwagger(app: INestApplication) {
    const config = app.get(ConfigService);

    const swaggerConfig = new DocumentBuilder()
        .setTitle("CMS API")
        .setDescription("CMS API description")
        .setVersion("1.0")
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);

    // Add roles and permissions enums to the OpenAPI schema
    document.components = document.components || {};
    document.components.schemas = document.components.schemas || {};

    // Add Roles enum
    document.components.schemas.Role = {
        type: "string",
        enum: Object.values(ROLES_SLUG),
        description: "Available user roles in the system",
        example: ROLES_SLUG.STUDENT,
    };

    // Add Permissions enum
    document.components.schemas.Permission = {
        type: "string",
        enum: Object.values(PERMISSIONS),
        description: "Available permissions in the system",
        example: PERMISSIONS.INSTANCE_MODULE_READ,
    };

    fs.writeFileSync(
        config.get("EXPORT_SWAGGER_API_PATH") as string,
        JSON.stringify(document, null, 2),
    );
    SwaggerModule.setup("api", app, document);
}
