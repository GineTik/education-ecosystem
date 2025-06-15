"use client";

import { rqClient } from "@/shared/api/instance";

export function useSpecialties() {
    return rqClient.useQuery("get", "/institution-profile/specialty");
}