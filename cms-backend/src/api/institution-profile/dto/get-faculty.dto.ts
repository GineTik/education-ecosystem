import { ApiProperty } from "@nestjs/swagger";

export class GetFacultyDto {
  @ApiProperty({
      type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  name: string;
}