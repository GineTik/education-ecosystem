"use client";

import { SunMoonIcon } from "lucide-react";
import { Toggle } from "../ui-kit/toggle";
import { useTheme } from "next-themes";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="data-[state=on]:bg-transparent"
    >
      <SunMoonIcon className="size-4" />
    </Toggle>
  );
}
