"use client";

import { rqClient } from "@/shared/api/instance";

export function useInstances() {
  return rqClient.useQuery("get", "/instances");
}
