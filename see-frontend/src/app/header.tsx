import { ToggleHotkey } from "@/shared/components/hotkeys/toggle-hotkey";
import { Logo } from "@/shared/components/logo";
import { ThemeToggleButton } from "@/shared/components/theme/theme-toggle-button";
import { Button } from "@/shared/components/ui-kit/button";
import { ROUTES } from "@/shared/constants/routes";
import Link from "next/link";

export default function RootHeader() {
  return (
    <header className="flex items-center justify-between p-4">
      <Logo href={ROUTES.HOME} />
      <div className="flex items-center gap-2">
        <ToggleHotkey />
        <ThemeToggleButton />
        <Button asChild>
          <Link href={ROUTES.LOGIN}>Увійти</Link>
        </Button>
      </div>
    </header>
  );
}
