import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsString } from "class-validator";

export class GetInstanceDto {
    @ApiProperty({
        type: String,
    })
    @IsString()
    id: string;

    @ApiProperty({
        type: String,
    })
    @IsString()
    name: string;

    @ApiProperty({
        type: [String],
    })
    @IsArray()
    @IsString({ each: true })
    validMailDomains: string[];

    @ApiProperty({
        type: Date,
    })
    @IsDate()
    createdAt: Date;

    @ApiProperty({
        type: Date,
    })
    @IsDate()
    updatedAt: Date;
}
