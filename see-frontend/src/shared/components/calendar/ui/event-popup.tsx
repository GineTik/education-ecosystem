import React from "react";
import { CalendarEvent } from "../calendar.types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui-kit/popover";
import { Button } from "@/shared/components/ui-kit/button";

type EventPopupProps = {
  event: CalendarEvent;
  trigger: React.ReactNode;
};

const EventPopup: React.FC<EventPopupProps> = ({ event, trigger }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{event.title}</h4>
            <p className="text-sm text-muted-foreground">
              {event.start.toLocaleTimeString()} -{" "}
              {event.end.toLocaleTimeString()}
            </p>
          </div>
          <div className="grid gap-2">
            <Button>Edit</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EventPopup;
