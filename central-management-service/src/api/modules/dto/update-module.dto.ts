import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class UpdateModuleDto {
    @IsBoolean()
    @ApiProperty({
        type: Boolean,
    })
    isEnabled: boolean;

    @IsString()
    @ApiProperty({
        type: String,
        nullable: true,
    })
    apiKey: string | null;

    @IsString()
    @ApiProperty({
        type: String,
    })
    baseUrl: string;
}
