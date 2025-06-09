"use client";

import { KeyboardIcon } from "lucide-react";
import { Toggle } from "../ui-kit/toggle";
import { useHotkeysEnabled } from "./hotkeys-context";

export function ToggleHotkey() {
  const { isEnabled, toggleHotkeys } = useHotkeysEnabled();

  return (
    <Toggle
      pressed={isEnabled}
      onPressedChange={toggleHotkeys}
      className="w-fit"
    >
      <KeyboardIcon />
    </Toggle>
  );
}
