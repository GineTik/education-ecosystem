import { ParserService } from "@/shared/parser";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ScheduleService {
  constructor(private readonly parserService: ParserService) {}

  async getSchedule(groupId: number) {
    return await this.parserService.parseGroupPage(groupId);
  }

  async getAllLessons() {
    const pageData = await this.parserService.parseGroupListPage();
    const groups = pageData.faculties.flatMap((f) =>
      f.groups.map((group) => ({
        ...group,
      })),
    );

    const schedules = await Promise.all(
      groups
        .filter(
          (group, index, self) =>
            self.findIndex((t) => t.id === group.id) === index,
        )
        .map(async (group) => {
          const result = await this.getSchedule(group.id);
          console.log(`schedule ${group.id} taken`);
          return result;
        }),
    );

    return schedules
      .flat()
      .map((s) => s.days.map((d) => d.lessons))
      .flat()
      .flat()
      .filter(
        (lesson, index, self) =>
          self.findIndex((l) => l.lessonName === lesson.lessonName) === index,
      );
  }
}
