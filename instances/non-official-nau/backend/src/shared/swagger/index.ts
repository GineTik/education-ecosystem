import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

export const configureSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle("Nau API")
    .setDescription("The Nau API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
};
