import { IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GroupFiltersDto {
  @IsOptional()
  @ApiProperty({
    description: "The ID of the specialty to filter by",
    required: false,
  })
  specialtyId?: string;
}
