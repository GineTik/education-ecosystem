import { CALENDAR } from "@/shared/constants/calendar";
import React from "react";
import { useCalendarHours } from "../hooks/use-calendar-hours";

type TimeGutterProps = Record<string, unknown>;

const TimeGutter: React.FC<TimeGutterProps> = () => {
  const hours = useCalendarHours();

  return (
    <div className="w-16 text-right pr-2">
      {hours.map((hour) => (
        <div
          key={hour}
          className={`flex items-start justify-end`}
          style={{
            height: CALENDAR.CELL_HEIGHT,
          }}
        >
          <span className="text-sm text-gray-500">{hour}:00</span>
        </div>
      ))}
    </div>
  );
};

export default TimeGutter;
