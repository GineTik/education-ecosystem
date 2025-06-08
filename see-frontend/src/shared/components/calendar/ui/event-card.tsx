"use client";

import React, { useEffect, useRef, useState } from "react";
import { CalendarEvent } from "../calendar.types";
import EventPopup from "./event-popup";
import dayjs from "dayjs";
import { cn } from "@/shared/lib/utils";

type EventCardProps = {
  event: CalendarEvent;
};

const HIDE_TIME_HEIGHT = 50;

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (eventRef?.current) {
      setHeight(eventRef?.current.clientHeight);
    }
  }, [eventRef]);

  return (
    <EventPopup
      event={event}
      trigger={
        <div
          className={cn(
            "bg-secondary text-secondary-foreground p-1 rounded-sm text-sm cursor-pointer truncate h-full flex flex-col",
            event.data?.subjectColor && event.data?.subjectColor,
            event.data?.subjectForegroundColor &&
              event.data?.subjectForegroundColor
          )}
          ref={eventRef}
        >
          <span
            className={cn(
              "text-xs text-muted-foreground",
              height <= HIDE_TIME_HEIGHT && "hidden"
            )}
          >
            {dayjs(event.start).format("HH:mm")} -{" "}
            {dayjs(event.end).format("HH:mm")}
          </span>
          <span className="font-medium">{event.title}</span>
          {event.data?.subject && (
            <span className={cn("text-xs")}>{event.data?.subject}</span>
          )}
        </div>
      }
    />
  );
};

export default EventCard;
