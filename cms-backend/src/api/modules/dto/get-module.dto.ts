import { ApiProperty } from "@nestjs/swagger";

export class GetModuleDto {
    @ApiProperty({
        type: String,
    })
    id: string;

    @ApiProperty({
        type: String,
    })
    type: string;

    @ApiProperty({
        type: String,
    })
    apiKey: string | null;

    @ApiProperty({
        type: String,
    })
    baseUrl: string;

    @ApiProperty({
        type: Boolean,
    })
    isEnabled: boolean;
}
