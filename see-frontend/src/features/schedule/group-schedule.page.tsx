"use client";

import {
  Calendar,
  dayjsLocalizer,
  NavigateAction,
  View,
  Views,
} from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./calendar.module.css";
import { ScheduleToolbar } from "./schedule-toolbar";
import { ScheduleEvent } from "./schedule.types";

const localizer = dayjsLocalizer(dayjs);

const today = dayjs();
const mockEvents: ScheduleEvent[] = [
  {
    start: today.set("hour", 10).set("minute", 0).toDate(),
    end: today.set("hour", 11).set("minute", 14).toDate(),
    title: "EPAM",
    data: { project: "epam" },
  },
  {
    start: today.set("hour", 14).set("minute", 0).toDate(),
    end: today.set("hour", 15).set("minute", 15).toDate(),
    title: "EPAM Epic 7",
    data: { project: "epam" },
  },
  {
    start: today.set("hour", 17).set("minute", 0).toDate(),
    end: today.set("hour", 17).set("minute", 30).toDate(),
    title: "EPAM Epic 7",
    data: { project: "epic7" },
  },
  {
    start: today.add(1, "day").set("hour", 10).set("minute", 15).toDate(),
    end: today.add(1, "day").set("hour", 11).set("minute", 15).toDate(),
    title: "EPAM",
    data: { project: "epic7" },
  },
  {
    start: today.add(1, "day").set("hour", 12).set("minute", 0).toDate(),
    end: today.add(1, "day").set("hour", 13).set("minute", 30).toDate(),
    title: "EPAM Epic 7",
    data: { project: "epic7" },
  },
  {
    start: today.add(1, "day").set("hour", 14).set("minute", 30).toDate(),
    end: today.add(1, "day").set("hour", 15).set("minute", 30).toDate(),
    title: "Busya",
    data: { project: "busya" },
  },
  {
    start: today.add(1, "day").set("hour", 16).set("minute", 0).toDate(),
    end: today.add(1, "day").set("hour", 16).set("minute", 45).toDate(),
    title: "Megastom",
    data: { project: "megastom" },
  },
  {
    start: today.add(1, "day").set("hour", 17).set("minute", 15).toDate(),
    end: today.add(1, "day").set("hour", 18).set("minute", 0).toDate(),
    title: "EPAM Epic 7",
    data: { project: "epic7" },
  },
  {
    start: today.add(1, "day").set("hour", 17).set("minute", 45).toDate(),
    end: today.add(1, "day").set("hour", 18).set("minute", 15).toDate(),
    title: "Describe TT",
    data: { project: "describe" },
  },

  {
    start: today.add(2, "day").set("hour", 10).set("minute", 30).toDate(),
    end: today.add(2, "day").set("hour", 13).set("minute", 0).toDate(),
    title: "Epic 7 - Filters",
    data: { project: "epam" },
  },
  {
    start: today.add(2, "day").set("hour", 11).set("minute", 0).toDate(),
    end: today.add(2, "day").set("hour", 11).set("minute", 45).toDate(),
    title: "Meeting with mentor",
    data: { project: "meeting" },
  },
  {
    start: today.add(2, "day").set("hour", 17).set("minute", 0).toDate(),
    end: today.add(2, "day").set("hour", 22).set("minute", 0).toDate(),
    title: "Backend",
    data: { project: "backend" },
  },
  {
    start: today.add(3, "day").set("hour", 12).set("minute", 0).toDate(),
    end: today.add(3, "day").set("hour", 14).set("minute", 30).toDate(),
    title: "Backend",
    data: { project: "backend" },
  },
  {
    start: today.add(3, "day").set("hour", 15).set("minute", 0).toDate(),
    end: today.add(3, "day").set("hour", 17).set("minute", 30).toDate(),
    title: "Frontend",
    data: { project: "frontend" },
  },
  {
    start: today.add(3, "day").set("hour", 19).set("minute", 0).toDate(),
    end: today.add(3, "day").set("hour", 20).set("minute", 15).toDate(),
    title: "Frontend",
    data: { project: "frontend" },
  },
];

export function SchedulePage() {
  return (
    <div className={styles.calendarWrapper}>
      <Calendar
        localizer={localizer}
        events={mockEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.WEEK}
        eventPropGetter={(event) => {
          const project = event.data.project;
          const className = styles[`project-${project}`] ?? "";

          return { className };
        }}
        dayLayoutAlgorithm="no-overlap"
        components={{
          toolbar: ScheduleToolbar,
        }}
      />
    </div>
  );
}
