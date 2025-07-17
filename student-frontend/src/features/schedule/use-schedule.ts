import { rqClient } from "@/shared/api/instance";
import { CalendarEvent } from "@/shared/components/calendar";
import dayjs from "dayjs";
import { components } from "@/shared/api/schema/generated";

// Hardcoded subject color map
const subjectColorMap: Record<string, any> = {
    "Інформатика": {
        subject: "Інформатика",
        subjectColor: "oklch(97% 0.13 240)",
        subjectDarkColor: "oklch(80% 0.13 240)",
        subjectForegroundColor: "oklch(30% 0.02 240)",
        subjectDarkForegroundColor: "oklch(95% 0.02 240)",
    },
    "Фізика": {
        subject: "Фізика",
        subjectColor: "oklch(97% 0.13 30)",
        subjectDarkColor: "oklch(30% 0.13 30)",
        subjectForegroundColor: "oklch(30% 0.02 30)",
        subjectDarkForegroundColor: "oklch(95% 0.02 30)",
    },
    "Математика": {
        subject: "Математика",
        subjectColor: "oklch(93.8% 0.127 124.321)",
        subjectDarkColor: "oklch(0.2008 0.0295 117.79)",
        subjectForegroundColor: "oklch(0.4008 0.0295 117.79)",
        subjectDarkForegroundColor: "oklch(0.8008 0.0295 117.79)",
    },
    "Проєктний практикум": {
        subject: "Проєктний практикум",
        subjectColor: "oklch(97% 0.13 100)",
        subjectDarkColor: "oklch(30% 0.13 100)",
        subjectForegroundColor: "oklch(30% 0.02 100)",
        subjectDarkForegroundColor: "oklch(95% 0.02 100)",
    },
    "Військова підготовка": {
        subject: "Військова підготовка",
        subjectColor: "oklch(80% 0.09 144)",
        subjectDarkColor: "oklch(30% 0.04 144)",
        subjectForegroundColor: "oklch(30% 0.02 174)",
        subjectDarkForegroundColor: "oklch(95% 0.02 174)",
    },
    "Гнучкі технології розробки програмного забезпечення": {
        subject: "Гнучкі технології розробки програмного забезпечення",
        subjectColor: "oklch(96% 0.13 320)",
        subjectDarkColor: "oklch(30% 0.13 320)",
        subjectForegroundColor: "oklch(30% 0.02 320)",
        subjectDarkForegroundColor: "oklch(95% 0.02 320)",
    },
    // "Основи технологій R&D": {
    //     subject: "Основи технологій R&D",
    //     subjectColor: "oklch(97% 0.13 60)",
    //     subjectDarkColor: "oklch(80% 0.13 60)",
    //     subjectForegroundColor: "oklch(30% 0.02 60)",
    //     subjectDarkForegroundColor: "oklch(95% 0.02 60)",
    // },
};

const defaultSubjectColor = {
    // subject: "Інший предмет",
    // subjectColor: "oklch(97% 0.03 80)",
    // subjectDarkColor: "oklch(80% 0.03 80)",
    // subjectForegroundColor: "oklch(30% 0.02 80)",
    // subjectDarkForegroundColor: "oklch(95% 0.02 80)",
};

export function useSchedule() {
    const { data: weeks, ...rest } = rqClient.useQuery("get", "/schedule/{groupId}", {
        params: {
            path: {
                groupId: "651daf72-70f9-44a4-a376-3f94eedb9a8d",
            },
        },
    });

    const events: CalendarEvent[] = (weeks as components["schemas"]["GetWeekDto"][] | undefined)?.flatMap((week, weekIndex) => {
        const weekStart = dayjs().startOf('week').add((weekIndex - 1) * 7, 'days');
        
        return week.days.flatMap((day) => {
            const dayDate = weekStart.add(day.dayNumber, 'days');
            
            return day.lessons.map((lesson, lessonIndex) => {
                const [startHour, startMinute] = lesson.timeSlotStart.split(':').map(Number);
                const [endHour, endMinute] = lesson.timeSlotEnd.split(':').map(Number);
                const subjectColors = subjectColorMap[lesson.lessonName] || defaultSubjectColor;
                return {
                    id: `${weekIndex}-${day.dayNumber}-${lessonIndex}`,
                    start: dayDate.set('hour', startHour).set('minute', startMinute).toDate(),
                    end: dayDate.set('hour', endHour).set('minute', endMinute).toDate(),
                    title: lesson.lessonName,
                    type: lesson.lessonType,
                    teacher: lesson.teacher,
                    data: subjectColors,
                };
            });
        });
    }) ?? [];

    return {
        ...rest,
        data: events,
    };
}