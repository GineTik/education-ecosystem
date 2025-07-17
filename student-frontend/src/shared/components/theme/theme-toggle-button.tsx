"use client";

import { SunMoonIcon } from "lucide-react";
import { Toggle } from "../ui-kit/toggle";
import { useTheme } from "next-themes";
import { useHotkeys } from "react-hotkeys-hook";
import { HOTKEYS } from "@/shared/constants/hotkeys";
import { KBD } from "../hotkeys/kbd";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  useHotkeys(HOTKEYS.TOGGLE_THEME, () => {
    setTheme(theme === "dark" ? "light" : "dark");
  });

  return (
    <Toggle
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="data-[state=on]:bg-transparent"
    >
      <SunMoonIcon className="size-4" />
      <KBD hotkeys={HOTKEYS.TOGGLE_THEME} />
    </Toggle>
  );
}
