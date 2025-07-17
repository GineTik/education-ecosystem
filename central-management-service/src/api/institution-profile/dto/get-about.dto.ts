import { ApiProperty } from "@nestjs/swagger";

export class GetAboutDto {
    @ApiProperty({
        type: String,
    })
    about: string;
}
