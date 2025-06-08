import React from "react";
import { CalendarEvent } from "../calendar.types";
import EventCard from "./event-card";
import { getWeekDays } from "../calendar.utils";

type AllDayEventsProps = {
  events: CalendarEvent[];
  currentDate: Date;
};

const AllDayEvents: React.FC<AllDayEventsProps> = ({ events, currentDate }) => {
  const allDayEvents = events.filter((event) => event.allDay);
  const weekDays = getWeekDays(currentDate);

  const isSameDay = (d1: Date, d2: Date) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  if (allDayEvents.length == 0) {
    return null;
  }

  return (
    <div className="flex border-b border-gray-200">
      <div className="w-16 text-center py-2 self-center text-sm text-gray-500">
        All Day
      </div>
      <div className="flex-1 grid grid-cols-7">
        {weekDays.map((day) => (
          <div key={day.toISOString()} className="border-l border-gray-200 p-1">
            {allDayEvents
              .filter((event) => isSameDay(event.start, day))
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDayEvents;
