"use client";

import { GlobeIcon, Loader2 } from "lucide-react";
import { useInstitutionProfile } from "../hooks/use-institution-profile";
import { Skeleton } from "@/shared/components/ui-kit/skeleton";
import Link from "next/link";

export function InstitutionHeader() {
  const profile = useInstitutionProfile();

  if (profile.isError) {
    console.error(profile.error);
    return <div>Error</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        {profile.data?.name ?? <Skeleton className="w-40 h-8" />} 
      </h1>
      <div className="flex items-center divide-x divide-border space-x-2 *:pr-2">
        <Link target="_blank" href={profile.data?.website ?? ""} className="text-sm text-muted-foreground flex items-center gap-1 hover:underline">
          <GlobeIcon className="size-4" />
          {profile.data?.website ?? <Skeleton className="w-20 h-4" />}
        </Link>
        <span className="text-sm text-muted-foreground">
          Аббревіатура: {profile.data?.abbreviation ?? <Skeleton className="w-20 h-4" />}
        </span>
      </div>
    </div>
  );
}
