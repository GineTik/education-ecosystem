import { ApiProperty, ApiResponse } from "@nestjs/swagger";

export class GetSpecialtyDto {
    @ApiProperty({
        type: String,
    })
    id: string;

    @ApiProperty({
        type: String,
    })
    name: string;

    @ApiProperty({
        type: String,
    })
    code: string;

    @ApiProperty({
        type: String,
    })
    facultyId: string;
}
