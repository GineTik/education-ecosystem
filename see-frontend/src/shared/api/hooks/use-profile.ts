"use client";

import { rqClient } from "../instance";

export function useProfile() {
  return rqClient.useQuery("get", "/users/profile");
}
