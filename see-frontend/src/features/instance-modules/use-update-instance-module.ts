import { rqClient } from "@/shared/api/instance";

export function useUpdateInstanceModule() {
  return rqClient.useMutation("put", "/modules/{typeSlug}");
}
