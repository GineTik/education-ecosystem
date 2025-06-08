import React from "react";
import { CalendarEvent } from "../calendar.types";
import DatesHeader from "./dates-header";
import AllDayEvents from "./all-day-events";
import TimeGutter from "./time-gutter";
import DayColumn from "./day-column";
import { getWeekDays } from "../calendar.utils";
import { useCalendarScroll } from "../hooks/use-calendar-scroll";

type WeekViewProps = {
  currentDate: Date;
  events: CalendarEvent[];
};

const WeekView: React.FC<WeekViewProps> = ({ currentDate, events }) => {
  const scrollContainerRef = useCalendarScroll();
  const weekDays = getWeekDays(currentDate);
  const isSameDay = (d1: Date, d2: Date) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const eventsByDay = (day: Date) => {
    return events.filter(
      (event) => !event.allDay && isSameDay(event.start, day)
    );
  };

  return (
    <div className="rounded-lg shadow flex flex-col grow ">
      <DatesHeader currentDate={currentDate} />
      <AllDayEvents currentDate={currentDate} events={events} />
      <div className="flex border-b border-border" ref={scrollContainerRef}>
        <TimeGutter />
        <div className="flex flex-1">
          {weekDays.map((day, index) => (
            <DayColumn key={index} day={day} events={eventsByDay(day)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekView;
