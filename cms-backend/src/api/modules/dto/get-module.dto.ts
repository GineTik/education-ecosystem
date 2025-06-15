import { ApiProperty } from "@nestjs/swagger";

export class GetModuleDto {
    @ApiProperty({
        type: String,
    })
    slug: string;

    @ApiProperty({
        type: String,
    })
    name: string;

    @ApiProperty({
        type: String,
        nullable: true,
    })
    description?: string | null;

    @ApiProperty({
        type: String,
        nullable: true,
    })
    apiKey?: string | null;

    @ApiProperty({
        type: String,
    })
    baseUrl?: string;

    @ApiProperty({
        type: Boolean,
    })
    isEnabled?: boolean;
}
