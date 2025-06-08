"use client";

import React, { useState } from "react";
import { CalendarEvent } from "./calendar.types";
import WeekView from "./ui/week-view";
import { Button } from "@/shared/components/ui-kit/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarProps = {
  events: CalendarEvent[];
};

export const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  const handleNextWeek = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  return (
    <div className="flex flex-col grow overflow-auto">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handlePrevWeek}>
            <ChevronLeft className="h-4 w-4" />
            Попередній тиждень
          </Button>
          <Button variant="outline" onClick={handleNextWeek}>
            Наступний тиждень
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <WeekView currentDate={currentDate} events={events} />
    </div>
  );
};
