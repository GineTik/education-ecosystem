import { ApiProperty } from "@nestjs/swagger";

export class ProfileDto {
    @ApiProperty({
        type: String,
    })
    id: string;

    @ApiProperty({
        type: String,
    })
    email: string;

    @ApiProperty({
        nullable: true,
        type: String,
    })
    firstName: string | null;

    @ApiProperty({
        nullable: true,
        type: String,
    })
    lastName: string | null;

    @ApiProperty({
        nullable: true,
        type: String,
    })
    avatarUrl: string | null;

    @ApiProperty({
        type: Date,
    })
    createdAt: Date;

    @ApiProperty({
        type: String,
    })
    role: string;
}
