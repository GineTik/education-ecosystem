"use client";

import { rqClient } from "@/shared/api/instance";

export function useAbout() {
    return rqClient.useQuery("get", "/institution-profile/about");
}