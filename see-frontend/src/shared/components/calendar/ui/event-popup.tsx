import React from "react";
import { CalendarEvent } from "../calendar.types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui-kit/popover";
import dayjs from "dayjs";

type EventPopupProps = {
  event: CalendarEvent;
  trigger: React.ReactNode;
};

const EventPopup: React.FC<EventPopupProps> = ({ event, trigger }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-80" side="right" align="start">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{event.title}</h4>
            <p className="text-sm text-muted-foreground">{event.teacher}</p>
            <p className="text-sm text-muted-foreground">
              {dayjs( event.start).format("HH:mm")} -{" "}
              {dayjs(event.end).format("HH:mm")}
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EventPopup;
