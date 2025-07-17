"use client";

import { useProfile } from "@/shared/hooks/use-profile";
import { StudentProfile } from "./student-profile";
import { Loader2 } from "lucide-react";
import dayjs from "dayjs";

export function StudentProfilePage() {
  const profile = useProfile();

  if (profile.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <StudentProfile
      avatarUrl={profile.data?.avatarUrl ?? undefined}
      firstName={profile.data?.firstName ?? "none"}
      lastName={profile.data?.lastName ?? "none"}
      email={profile.data?.email}
      otherInformation={[
        {
          label: "ID",
          value: profile.data?.id,
        },
        {
          label: "Дата створення",
          value: dayjs(profile.data?.createdAt).format("DD.MM.YYYY"),
        },
        {
          label: "Роль",
          value: profile.data?.role,
        },
      ]}
    />
  );
}
