"use client";

import { useHotkeysEnabled } from "./hotkeys-context";

type KBDProps = {
  hotkeys: string;
};

export function KBD({ hotkeys }: KBDProps) {
  const { isEnabled } = useHotkeysEnabled();

  if (!isEnabled) {
    return null;
  }

  return (
    <div className="text-xs">
      <kbd>{hotkeys}</kbd>
    </div>
  );
}
