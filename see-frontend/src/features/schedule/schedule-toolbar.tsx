import { Button } from "@/shared/components/ui-kit/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ToolbarProps, View } from "react-big-calendar";
import { ScheduleEvent } from "./schedule.types";

export function ScheduleToolbar({
  label,
  onNavigate,
  onView,
  views,
  view,
}: ToolbarProps<ScheduleEvent>) {
  return (
    <div className="flex items-center justify-between mb-2 px-2">
      <div className="flex gap-1">
        <Button variant="outline" onClick={() => onNavigate("PREV")}>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline" onClick={() => onNavigate("TODAY")}>
          Today
        </Button>
        <Button variant="outline" onClick={() => onNavigate("NEXT")}>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
      <span className="grow text-center">{label}</span>
      <span className="flex gap-1">
        {(views as View[]).map((viewName) => (
          <Button
            key={viewName}
            variant={view === viewName ? "default" : "outline"}
            onClick={() => onView(viewName)}
          >
            {viewName.charAt(0).toUpperCase() + viewName.slice(1)}
          </Button>
        ))}
      </span>
    </div>
  );
}
