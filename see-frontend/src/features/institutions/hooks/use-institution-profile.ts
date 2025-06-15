"use client";

import { rqClient } from "@/shared/api/instance";

export function useInstitutionProfile() {
    return rqClient.useQuery("get", "/institution-profile");
}