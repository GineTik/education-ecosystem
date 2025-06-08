"use client";

import { CALENDAR } from "@/shared/constants/calendar";
import { useEffect, useRef } from "react";

export const useCalendarScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // e.preventDefault();
      // if (e.shiftKey) {
      //   container.scrollLeft += e.deltaY;
      // } else {
      //   container.scrollTop += e.deltaY;
      // }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    // Set initial scroll to 6 AM
    const sixAmHour = 6;
    const cellHeightRem = parseFloat(CALENDAR.CELL_HEIGHT);
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const cellHeightPx = cellHeightRem * rootFontSize;
    container.scrollTop = cellHeightPx * sixAmHour;

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return scrollContainerRef;
};
