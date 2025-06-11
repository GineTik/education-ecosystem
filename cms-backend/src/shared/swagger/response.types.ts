import { ApiProperty } from "@nestjs/swagger";

export class ErrorResponse {
    @ApiProperty({
        example: 401,
    })
    statusCode: number;

    @ApiProperty({
        example: "Unauthorized",
    })
    message: string;
}

export class ForbiddenResponse extends ErrorResponse {
    @ApiProperty({
        example: ["institution:read"],
        type: [String],
        nullable: true,
    })
    requiredPermissions?: string[];
}
