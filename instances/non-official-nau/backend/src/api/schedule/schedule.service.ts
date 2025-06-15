import { ParserService } from "@/shared/parser";
import { PrismaService } from "@/shared/prisma";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService, private readonly parserService: ParserService) {}

  async getSchedule(groupId: string) {
    const group = await this.prisma.group.findUnique({
      where: {
        id: groupId,
      },
    });

    if (!group) {
      throw new NotFoundException("Group not found");
    }

    return await this.parserService.parseGroupPage(group.externalId);
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
          const result = await this.getSchedule(group.id.toString());
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
