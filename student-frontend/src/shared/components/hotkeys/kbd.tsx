"use client";

import { cn } from "@/shared/lib/utils";
import { useHotkeysEnabled } from "./hotkeys-context";

type KBDProps = {
  hotkeys: string;
  isContrast?: boolean;
};

export function KBD({ hotkeys, isContrast }: KBDProps) {
  const { isEnabled } = useHotkeysEnabled();

  if (!isEnabled) {
    return null;
  }

  return (
    <div className="text-xs">
      <kbd
        className={cn(
          "rounded-md px-1 py-0.5",
          isContrast
            ? "text-primary-foreground border-primary-foreground/30"
            : "text-foreground"
        )}
      >
        {hotkeys}
      </kbd>
    </div>
  );
}
