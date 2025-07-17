import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class CreateInstanceDto {
    @IsString()
    @ApiProperty({
        type: String,
    })
    name: string;

    @IsArray()
    @IsString({ each: true })
    @ApiProperty({
        type: [String],
    })
    validMailDomains: string[];
}
