"use client";

import { useProfile } from "@/shared/api/hooks/use-profile";

type SignedInProps = {
  children: React.ReactNode;
};

export function SignedIn({ children }: SignedInProps) {
  const profile = useProfile();

  if (
    profile.isLoading ||
    (profile.isError && profile.failureReason?.statusCode === 401)
  ) {
    return null;
  }

  return children;
}
