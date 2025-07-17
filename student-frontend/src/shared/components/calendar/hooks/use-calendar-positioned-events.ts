import { CalendarEvent } from "../calendar.types";
import { PositionedEvent } from "../calendar.utils";
import { useCalendarHours } from "./use-calendar-hours";

export function useCalendarPositionedEvents(
  events: CalendarEvent[]
): PositionedEvent[] {
  const hours = useCalendarHours();
  const firstHour = hours[0];
  const sortedEvents = events.sort(
    (a, b) => a.start.getTime() - b.start.getTime()
  );

  return sortedEvents.map((event, index, arr) => {
    const top =
      (event.start.getHours() - firstHour) * 60 + event.start.getMinutes();
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
}
