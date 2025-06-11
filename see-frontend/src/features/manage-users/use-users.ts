"use client";

import { rqClient } from "@/shared/api/instance";

export function useUsers() {
  return rqClient.useQuery("get", "/users");
}
