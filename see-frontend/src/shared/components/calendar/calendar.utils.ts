import { CalendarEvent } from "./calendar.types";

export const getWeekDays = (date: Date): Date[] => {
  const startOfWeek = new Date(date);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  startOfWeek.setDate(diff);

  const weekDays: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    weekDays.push(day);
  }
  return weekDays;
};

export type PositionedEvent = CalendarEvent & {
  top: number;
  height: number;
  left: number;
  width: number;
};

export const getEventLayout = (events: CalendarEvent[]): PositionedEvent[] => {
  const sortedEvents = events.sort(
    (a, b) => a.start.getTime() - b.start.getTime()
  );

  return sortedEvents.map((event, index, arr) => {
    const top = event.start.getHours() * 60 + event.start.getMinutes();
    const height = (event.end.getTime() - event.start.getTime()) / (1000 * 60);
    const nextEvent = arr[index + 1];
    const prevEvent = index != 0 ? arr[index - 1] : undefined;

    return {
      ...event,
      top,
      height,
      width:
        prevEvent && prevEvent.end > event.start
          ? 50
          : nextEvent && nextEvent.start < event.end
          ? 50
          : 100,
      left: nextEvent && nextEvent.start < event.end ? 50 : 0,
    };
  });
};
