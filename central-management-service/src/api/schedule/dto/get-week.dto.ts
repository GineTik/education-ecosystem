import { ApiProperty } from "@nestjs/swagger";

class LessonDto {
    @ApiProperty({
        type: String,
    })
    lessonName: string;

    @ApiProperty({
        type: String,
    })
    lessonType: string;

    @ApiProperty({
        type: String,
    })
    subGroup: string;

    @ApiProperty({
        type: String,
    })
    teacher: string;

    @ApiProperty({
        type: String,
    })
    timeSlotStart: string;

    @ApiProperty({
        type: String,
    })
    timeSlotEnd: string;
}

class DayDto {
    @ApiProperty({
        type: Number,
    })
    dayNumber: number;

    @ApiProperty({
        type: [LessonDto],
    })
    lessons: LessonDto[]
}

export class GetWeekDto {
    @ApiProperty({
        type: Number,
    })
    weekNumber: number;
    
    @ApiProperty({
        type: [DayDto],
    })
    days: DayDto[]
}

