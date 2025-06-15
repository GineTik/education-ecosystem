"use client";

import { Calendar } from "@/shared/components/calendar";
import { useSchedule } from "./use-schedule";

export function SchedulePage() {
  const schedule = useSchedule();

  return (
    <Calendar
      events={schedule.data ?? []}
    />
  );
}
