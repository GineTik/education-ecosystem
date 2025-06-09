"use client";

import React, { useEffect, useRef, useState } from "react";
import { CalendarEvent } from "../calendar.types";
import EventPopup from "./event-popup";
import dayjs from "dayjs";
import { cn } from "@/shared/lib/utils";
import { useTheme } from "next-themes";

type EventCardProps = {
  event: CalendarEvent;
};

const HIDE_TIME_HEIGHT = 50;

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    if (eventRef?.current) {
      setHeight(eventRef?.current.clientHeight);
    }
  }, [eventRef]);

  return (
    <EventPopup
      event={event}
      trigger={
        <div className="bg-background h-full">
          <div
            className={cn(
              "bg-secondary p-1 rounded-sm text-sm cursor-pointer truncate h-full flex flex-col"
            )}
            ref={eventRef}
            style={{
              backgroundColor: theme?.includes("dark")
                ? event.data?.subjectDarkColor
                : event.data?.subjectColor,
            }}
          >
            <span
              className={cn(
                "text-xs opacity-75",
                height <= HIDE_TIME_HEIGHT && "hidden"
              )}
            >
              {dayjs(event.start).format("HH:mm")} -{" "}
              {dayjs(event.end).format("HH:mm")}
            </span>
            <span className="font-semibold">{event.title}</span>
            {event.data?.subject && (
              <span
                className={cn("text-xs opacity-80 font-medium")}
                style={{
                  color: theme?.includes("dark")
                    ? event.data?.subjectDarkForegroundColor
                    : event.data?.subjectForegroundColor,
                }}
              >
                {event.data?.subject}
              </span>
            )}
          </div>
        </div>
      }
    />
  );
};

export default EventCard;
