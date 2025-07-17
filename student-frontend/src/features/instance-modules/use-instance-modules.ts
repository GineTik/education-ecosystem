"use client";

import { rqClient } from "@/shared/api/instance";

export function useInstanceModules() {
  return rqClient.useQuery("get", "/users/modules");
}
