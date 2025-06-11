// GENERATED CODE BY AI

import { Injectable, Module } from "@nestjs/common";
import { HttpModule, HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { AxiosResponse } from "axios";
import * as cheerio from "cheerio";

type GroupListPage = {
  faculties: {
    name: string;
    groups: {
      id: number;
      name: string;
      course: string;
      specialtyNumber: number;
    }[];
  }[];
};

type ScheduleWeek = {
  weekNumber: number;
  days: {
    dayNumber: number;
    dayName: string;
    lessons: {
      lessonName: string;
      lessonType: string;
      subGroup: string;
      timeSlotStart: string;
      timeSlotEnd: string;
      teacher: string;
    }[];
  }[];
};

@Injectable()
export class ParserService {
  constructor(private readonly httpService: HttpService) {}

  async parseGroupListPage(): Promise<GroupListPage> {
    const url = "https://portal.nau.edu.ua/schedule/group/list";
    try {
      const response: AxiosResponse<string> = await firstValueFrom(
        this.httpService.get(url),
      );
      const html = response.data;
      const $ = cheerio.load(html);
      const faculties: GroupListPage["faculties"] = [];

      $(".accordion-item").each((_, facultyElement) => {
        const facultyName = $(facultyElement)
          .children("h2.accordion-header")
          .children(".accordion-button")
          .text()
          .trim();
        const groups: GroupListPage["faculties"][0]["groups"] = [];

        $(facultyElement)
          .find(".courses-list > div")
          .each((_, courseElement) => {
            const course = $(courseElement).find("h3").text().trim();
            $(courseElement)
              .find(".groups-list a[href*=\'schedule/group\']")
              .each((_, groupElement) => {
                const groupName = $(groupElement).text().trim();
                const groupIdMatch = $(groupElement)
                  .attr("href")
                  .match(/schedule\/group\?id=(\d+)/);
                const groupId = groupIdMatch
                  ? parseInt(groupIdMatch[1], 10)
                  : 0;
                const specialtyNumberMatch = groupName.match(/-(\d+)-/);
                const specialtyNumber = specialtyNumberMatch
                  ? parseInt(specialtyNumberMatch[1], 10)
                  : 0;
                groups.push({
                  id: groupId,
                  name: groupName,
                  course,
                  specialtyNumber: specialtyNumber,
                });
              });
          });

        faculties.push({
          name: facultyName,
          groups,
        });
      });

      return { faculties };
    } catch (error) {
      // You might want to add more sophisticated error handling here
      console.error("Error fetching HTML:", error);
      throw new Error("Failed to fetch HTML from the provided URL.");
    }
  }

  async parseGroupPage(groupId: number): Promise<ScheduleWeek[]> {
    const url = `https://portal.nau.edu.ua/schedule/group?id=${groupId}`;
    try {
      const response: AxiosResponse<string> = await firstValueFrom(
        this.httpService.get(url),
      );
      const html = response.data;
      const $ = cheerio.load(html);
      const scheduleWeeks: ScheduleWeek[] = [];

      $(".wrapper").each((_, weekElement) => {
        const weekTitle = $(weekElement).find("h2").text().trim();
        const weekNumberMatch = weekTitle.match(/Тиждень (\d+)/);
        if (!weekNumberMatch) return;

        const weekNumber = parseInt(weekNumberMatch[1], 10);
        const days: ScheduleWeek["days"] = [];
        const dayHeaders: string[] = [];

        $(weekElement)
          .find("table.schedule thead th.day-name")
          .each((_, th) => {
            dayHeaders.push($(th).text().trim());
          });

        $(weekElement)
          .find("table.schedule tbody tr")
          .each((rowIndex, rowElement) => {
            const timeSlotElement = $(rowElement).find("th.hour-name");
            if (!timeSlotElement.length) return;

            const timeSlotText = timeSlotElement
              .find(".full-name")
              .text()
              .trim();
            const [timeSlotStart, timeSlotEnd] = timeSlotText.split("-");

            $(rowElement)
              .find("td")
              .each((dayIndex, dayCellElement) => {
                if (dayIndex >= dayHeaders.length) return;

                const dayName = dayHeaders[dayIndex];
                let day = days.find(
                  (d) => d.dayNumber === dayIndex + 1 && d.dayName === dayName,
                );
                if (!day) {
                  day = {
                    dayNumber: dayIndex + 1,
                    dayName: dayName,
                    lessons: [],
                  };
                  days.push(day);
                }

                $(dayCellElement)
                  .find(".pair")
                  .each((_, pairElement) => {
                    const lessonName = $(pairElement)
                      .find(".subject")
                      .text()
                      .trim();
                    if (!lessonName) return; // Skip if no subject

                    const lessonType = $(pairElement)
                      .find(".activity-tag")
                      .text()
                      .trim();
                    const subGroup =
                      $(pairElement).find(".subgroup").text().trim() ||
                      "Загальна";
                    const teacher = $(pairElement)
                      .find(".teacher a")
                      .text()
                      .trim();

                    day.lessons.push({
                      lessonName,
                      lessonType,
                      subGroup,
                      timeSlotStart,
                      timeSlotEnd,
                      teacher,
                    });
                  });
              });
          });
        // Sort days by dayNumber to ensure correct order
        days.sort((a, b) => a.dayNumber - b.dayNumber);
        scheduleWeeks.push({ weekNumber, days });
      });

      return scheduleWeeks;
    } catch (error) {
      console.error("Error fetching or parsing HTML:", error);
      throw new Error("Failed to fetch or parse HTML from the provided URL.");
    }
  }
}

@Module({
  imports: [HttpModule],
  providers: [ParserService],
  exports: [ParserService],
})
export class ParserModule {}
