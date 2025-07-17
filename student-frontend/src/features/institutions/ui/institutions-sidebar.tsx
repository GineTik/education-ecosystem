"use client";

import { useInstitutionProfile } from "../hooks/use-institution-profile";
import Image from "next/image";
import { Skeleton } from "@/shared/components/ui-kit/skeleton";

export function InstitutionSidebar() {
  const profile = useInstitutionProfile();

  if (profile.isLoading) {
    return (
      <>
        <Skeleton
          className="size-[200px] rounded-lg"
        />
      </>
    )
  }

  return (
    <div className="max-w-[200px]">
      <div className="size-[200px] bg-muted rounded-lg overflow-hidden relative" style={{
        backgroundColor: profile.data?.logoBackgroundColor ?? undefined,
      }}>
        <Image src={profile.data?.logoUrl ?? ""} alt="logo" fill className="object-contain w-full p-2" />
      </div>
    </div>
  );
}
