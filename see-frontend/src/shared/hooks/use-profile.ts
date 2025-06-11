"use client";

import { rqClient } from "../api/instance";

export function useProfile() {
  return rqClient.useQuery("get", "/users/profile");
}
