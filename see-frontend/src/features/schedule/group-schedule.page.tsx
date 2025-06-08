"use client";

import dayjs from "dayjs";
import { CalendarEvent, Calendar } from "@/shared/components/calendar";

const today = dayjs();

const subjects = [
  {
    subject: "Інформатика",
    subjectColor: "bg-blue-300",
    subjectForegroundColor: "text-black",
  },
  {
    subject: "Фізика",
    subjectColor: "bg-rose-400",
    subjectForegroundColor: "text-white",
  },
  {
    subject: "Математика",
    subjectColor: "bg-lime-300",
    subjectForegroundColor: "text-black",
  },
];

const mockEvents: CalendarEvent[] = [
  {
    id: 1,
    start: today.set("hour", -11).set("minute", 0).toDate(),
    end: today.set("hour", -10).set("minute", 14).toDate(),
    title: "EPAM",
    data: { ...subjects[0] },
  },
  {
    id: 2,
    start: today.set("hour", 10).set("minute", 0).toDate(),
    end: today.set("hour", 11).set("minute", 14).toDate(),
    title: "EPAM",
    data: { ...subjects[1] },
  },
  {
    id: 3,
    start: today.set("hour", 14).set("minute", 0).toDate(),
    end: today.set("hour", 15).set("minute", 15).toDate(),
    title: "EPAM Epic 7",
    data: { ...subjects[0] },
  },
  {
    id: 4,
    start: today.set("hour", 17).set("minute", 0).toDate(),
    end: today.set("hour", 17).set("minute", 30).toDate(),
    title: "EPAM Epic 7",
    data: { ...subjects[2] },
  },
  {
    id: 5,
    start: today.add(1, "day").set("hour", 10).set("minute", 15).toDate(),
    end: today.add(1, "day").set("hour", 11).set("minute", 15).toDate(),
    title: "EPAM",
    data: { ...subjects[2] },
  },
  {
    id: 6,
    start: today.add(1, "day").set("hour", 12).set("minute", 0).toDate(),
    end: today.add(1, "day").set("hour", 13).set("minute", 30).toDate(),
    title: "EPAM Epic 7",
    data: { ...subjects[0] },
  },
  {
    id: 7,
    start: today.add(1, "day").set("hour", 14).set("minute", 30).toDate(),
    end: today.add(1, "day").set("hour", 15).set("minute", 30).toDate(),
    title: "Busya",
    data: { ...subjects[0] },
  },
  {
    id: 8,
    start: today.add(1, "day").set("hour", 16).set("minute", 0).toDate(),
    end: today.add(1, "day").set("hour", 16).set("minute", 45).toDate(),
    title: "Megastom",
    data: { ...subjects[1] },
  },
  {
    id: 9,
    start: today.add(1, "day").set("hour", 17).set("minute", 15).toDate(),
    end: today.add(1, "day").set("hour", 18).set("minute", 0).toDate(),
    title: "EPAM Epic 7",
    data: { ...subjects[1] },
  },
  {
    id: 10,
    start: today.add(1, "day").set("hour", 17).set("minute", 45).toDate(),
    end: today.add(1, "day").set("hour", 18).set("minute", 15).toDate(),
    title: "Describe TT",
    data: { ...subjects[2] },
  },

  {
    id: 11,
    start: today.add(2, "day").set("hour", 10).set("minute", 30).toDate(),
    end: today.add(2, "day").set("hour", 13).set("minute", 0).toDate(),
    title: "Epic 7 - Filters",
    data: { ...subjects[0] },
  },
  {
    id: 12,
    start: today.add(2, "day").set("hour", 11).set("minute", 0).toDate(),
    end: today.add(2, "day").set("hour", 11).set("minute", 45).toDate(),
    title: "Meeting with mentor",
    data: { ...subjects[1] },
  },
  {
    id: 13,
    start: today.add(2, "day").set("hour", 17).set("minute", 0).toDate(),
    end: today.add(2, "day").set("hour", 22).set("minute", 0).toDate(),
    title: "Backend",
    data: { ...subjects[0] },
  },
  {
    id: 14,
    start: today.add(3, "day").set("hour", 12).set("minute", 0).toDate(),
    end: today.add(3, "day").set("hour", 14).set("minute", 30).toDate(),
    title: "Backend",
    data: { ...subjects[0] },
  },
  {
    id: 15,
    start: today.add(3, "day").set("hour", 15).set("minute", 0).toDate(),
    end: today.add(3, "day").set("hour", 17).set("minute", 30).toDate(),
    title: "Frontend",
    data: { ...subjects[2] },
  },
  {
    id: 16,
    start: today.add(3, "day").set("hour", 19).set("minute", 0).toDate(),
    end: today.add(3, "day").set("hour", 20).set("minute", 15).toDate(),
    title: "Frontend",
    data: { ...subjects[1] },
  },
];

export function SchedulePage() {
  return (
    <Calendar
      events={mockEvents.map((event) => ({
        ...event,
      }))}
    />
  );
}
