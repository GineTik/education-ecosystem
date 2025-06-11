"use client";

import { KBD } from "@/shared/components/hotkeys/kbd";
import { Button } from "@/shared/components/ui-kit/button";
import { CONFIG } from "@/shared/config/env";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

export function LoginPage() {
  const router = useRouter();

  useHotkeys("enter", () => {
    router.push(CONFIG.API_GOOGLE_LOGIN_URL ?? "");
  });

  // Login page
  return (
    <div className="mt-20 max-w-[300px] w-full mx-auto space-y-4">
      <h1>Вхід</h1>
      <Button asChild className="w-full">
        <Link href={CONFIG.API_GOOGLE_LOGIN_URL ?? ""}>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 stroke-primary-foreground fill-primary-foreground"
          >
            <title>Google</title>
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          Гугл авторизація
          <KBD hotkeys="enter" isContrast />
        </Link>
      </Button>
      <span className="text-sm text-muted-foreground">
        Використовуйте свій студентський акаунт для входу!
      </span>
    </div>
  );
}
