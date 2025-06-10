"use client";

import { Button } from "@/shared/components/ui-kit/button";
import { ROUTES } from "@/shared/constants/routes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AUTH_ERRORS_MESSAGES } from "./auth.constants";
import { useHotkeys } from "react-hotkeys-hook";
import { useRouter } from "next/navigation";
import { KBD } from "@/shared/components/hotkeys/kbd";

export function FailedLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const status = Number(searchParams.get("status"));
  const email = searchParams.get("email");

  const authError =
    status === 401 || status === 403
      ? AUTH_ERRORS_MESSAGES.DOMAIN_NOT_SUPPORTED(email?.split("@")[1] ?? "")
      : {
          message: error,
          heading: "Упс...",
        };

  useHotkeys("enter", () => {
    router.push(ROUTES.LOGIN);
  });

  return (
    <div className="mt-20 max-w-[400px] w-full mx-auto space-y-4">
      <p className="text-sm text-muted-foreground mb-4">Статус: {status}</p>

      <h1>{authError?.heading}</h1>

      <p className="text-sm text-muted-foreground leading-normal mb-5">
        {authError?.message}
      </p>

      <Button asChild className="w-full">
        <Link href={ROUTES.LOGIN}>
          Спробувати ще раз
          <KBD hotkeys="enter" isContrast />
        </Link>
      </Button>
    </div>
  );
}
