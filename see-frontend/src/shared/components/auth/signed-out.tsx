"use client";

import { useProfile } from "@/shared/hooks/use-profile";

type SignedOutProps = {
  children: React.ReactNode;
};

export function SignedOut({ children }: SignedOutProps) {
  const profile = useProfile();

  if (profile.isError && profile.failureReason?.statusCode === 401) {
    return children;
  }

  return null;
}
