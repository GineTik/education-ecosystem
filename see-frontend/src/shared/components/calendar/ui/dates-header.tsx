import React from "react";
import { getWeekDays } from "../calendar.utils";
import { cn } from "@/shared/lib/utils";
import dayjs from "dayjs";

type DatesHeaderProps = {
  currentDate: Date;
};

const DatesHeader: React.FC<DatesHeaderProps> = ({ currentDate }) => {
  const weekDays = getWeekDays(currentDate);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="flex border-b border-border">
      <div className="w-16" /> {/* Spacer for the time gutter */}
      {weekDays.map((day, index) => (
        <div key={index} className={cn("flex-1")}>
          <div
            className={cn("rounded-full gap-1 w-full flex items-center py-2")}
          >
            <div
              className={cn(
                "text-2xl font-bold size-8 rounded-full flex justify-center items-center",
                dayjs(day).isSame(dayjs(), "day") &&
                  "bg-secondary text-secondary-foreground"
              )}
            >
              {day.getDate()}
            </div>
            <div className="text-sm">{days[index]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DatesHeader;
