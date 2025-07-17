import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class InstitutionShortProfileDto {
    @IsString()
    @ApiProperty({
        type: String,
    })
    name: string;

    @IsString()
    @ApiProperty({
        type: String,
    })
    abbreviation: string;

    @IsString()
    @ApiProperty({
        type: String,
    })
    logoBackgroundColor: string;

    @IsString()
    @ApiProperty({
        type: String,
    })
    logoUrl: string;

    @IsString()
    @ApiProperty({
        type: String,
    })
    address: string;

    @IsString()
    @ApiProperty({
        type: String,
    })
    email: string;

    @IsString()
    @ApiProperty({
        type: String,
    })
    website: string;
}