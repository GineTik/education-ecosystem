import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    roleSlug: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    instanceId: string;
}
