"use client";

import React, { useState, useCallback } from "react";
import { CalendarEvent } from "./calendar.types";
import WeekView from "./ui/week-view";
import { Button } from "@/shared/components/ui-kit/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HOTKEYS } from "@/shared/constants/hotkeys";
import { KBD } from "@/shared/components/hotkeys/kbd";
import { useHotkeys } from "react-hotkeys-hook";
import dayjs from "dayjs";
import "dayjs/locale/uk";

type CalendarProps = {
  events: CalendarEvent[];
};

export const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevWeek = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  }, []);

  const handleNextWeek = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  }, []);

  useHotkeys(HOTKEYS.PREV_WEEK, handlePrevWeek);
  useHotkeys(HOTKEYS.NEXT_WEEK, handleNextWeek);

  return (
    <div className="flex flex-col grow overflow-auto">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-xl font-bold">
          {dayjs(currentDate).locale("uk").format("MMMM YYYY").charAt(0).toUpperCase() + dayjs(currentDate).locale("uk").format("MMMM YYYY").slice(1)}
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handlePrevWeek}>
            <ChevronLeft className="h-4 w-4" />
            Попередній тиждень
            <div className="text-xs text-muted-foreground">
              <KBD hotkeys={HOTKEYS.PREV_WEEK} />
            </div>
          </Button>
          <Button variant="outline" onClick={handleNextWeek}>
            Наступний тиждень
            <ChevronRight className="h-4 w-4" />
            <div className="text-xs text-muted-foreground">
              <KBD hotkeys={HOTKEYS.NEXT_WEEK} />
            </div>
          </Button>
        </div>
      </div>
      <WeekView currentDate={currentDate} events={events} />
    </div>
  );
};
