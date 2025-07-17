"use client";

import { Button } from "@/shared/components/ui-kit/button";
import { ROUTES } from "@/shared/constants/routes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";
import { useRouter } from "next/navigation";
import { KBD } from "@/shared/components/hotkeys/kbd";
import { getAuthError } from "./auth.utils";

export function FailedLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const status = Number(searchParams.get("status"));
  const email = searchParams.get("email");

  const authError = getAuthError(status, email, error);

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
