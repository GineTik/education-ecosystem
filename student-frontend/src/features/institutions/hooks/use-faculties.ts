"use client";

import { rqClient } from "@/shared/api/instance";

export function useFaculties() {
    return rqClient.useQuery("get", "/institution-profile/faculties");
}