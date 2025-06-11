import { SignedIn } from "@/shared/components/auth/signed-in";
import { SignedOut } from "@/shared/components/auth/signed-out";
import { ToggleHotkey } from "@/shared/components/hotkeys/toggle-hotkey";
import { Logo } from "@/shared/components/logo";
import { ThemeToggleButton } from "@/shared/components/theme/theme-toggle-button";
import { Button } from "@/shared/components/ui-kit/button";
import { ROUTES } from "@/shared/constants/routes";
import Link from "next/link";

export default function RootHeader() {
  return (
    <header className="flex items-center justify-between p-4">
      <Logo href={ROUTES.HOME} isFullTitle />
      <div className="flex items-center gap-2">
        <ToggleHotkey />
        <ThemeToggleButton />
        <SignedIn>
          <Button asChild>
            <Link href={ROUTES.CABINET_HOME}>До кабінету</Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <Button asChild>
            <Link href={ROUTES.LOGIN}>Увійти</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}
