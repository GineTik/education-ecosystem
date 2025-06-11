import { rqClient } from "@/shared/api/instance";
import { toast } from "sonner";

export function useCreateUser() {
  return rqClient.useMutation("post", "/users", {
    onSuccess: () => {
      toast.success("Користувач створений успішно");
    },
    onError: (error) => {
      toast.error(`Помилка при створенні користувача ${error.message}`);
    },
  });
}
