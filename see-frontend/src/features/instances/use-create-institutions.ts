import { rqClient } from "@/shared/api/instance";
import { queryClient } from "@/shared/lib/query-client";
import { toast } from "sonner";

export function useCreateInstitution() {
  return rqClient.useMutation("post", "/instances", {
    onSuccess: () => {
      toast.success("Заклад створено успішно");
      queryClient.invalidateQueries({
        queryKey: rqClient.queryOptions("get", "/instances").queryKey,
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
