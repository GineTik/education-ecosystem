import React from "react";
import { CalendarEvent } from "../calendar.types";
import EventCard from "./event-card";
import { CALENDAR } from "@/shared/constants/calendar";
import { useCalendarPositionedEvents } from "../hooks/use-calendar-positioned-events";
import { cn } from "@/shared/lib/utils";
import dayjs from "dayjs";

type DayColumnProps = {
  day: Date;
  events: CalendarEvent[];
};

const DayColumn: React.FC<DayColumnProps> = ({ events, day }) => {
  const positionedEvents = useCalendarPositionedEvents(events);
  const cellHeight = parseFloat(CALENDAR.CELL_HEIGHT);

  return (
    <div className="flex-1 border-l border-border relative">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="not-[&:first-child]:border-t border-border"
          style={{
            height: CALENDAR.CELL_HEIGHT,
          }}
        />
      ))}
      <div
        className={cn(
          "absolute inset-0",
          dayjs().isSame(day, "day") && "bg-secondary/20"
        )}
      >
        {positionedEvents.map((event, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: `${(event.top / 60) * cellHeight}rem`,
              height: `${(event.height / 60) * cellHeight}rem`,
              left: `${event.left}%`,
              width: `${event.width}%`,
              padding: "0 2px",
            }}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayColumn;
