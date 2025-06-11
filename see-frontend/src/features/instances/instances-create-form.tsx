"use client";

import { ApiSchemas } from "@/shared/api/schema";
import { useForm } from "react-hook-form";
import { useCreateInstitution } from "./use-create-institutions";
import { Form } from "@/shared/components/ui-kit/form";
import { InputForm } from "@/shared/components/ui-kit/input";
import { TagInputForm } from "@/shared/components/ui-kit/tag-input";
import { LoadingButton } from "@/shared/components/ui-kit/loading-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const createInstanceSchema = z.object({
  name: z.string().min(1, "Назва має бути вказана"),
  validMailDomains: z
    .array(z.string())
    .min(1, "Допустимі email домени мають бути вказані"),
});

export function InstanceCreateForm() {
  const createInstitution = useCreateInstitution();
  const form = useForm<ApiSchemas["CreateInstanceDto"]>({
    defaultValues: {
      name: "",
      validMailDomains: [],
    },
    resolver: zodResolver(createInstanceSchema),
  });

  const onSubmit = form.handleSubmit((data) => {
    createInstitution.mutate({ body: data });
    form.reset();
  });

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4">
          <InputForm label="Назва" name="name" control={form.control} />
          <TagInputForm
            label="Допустимі email домени"
            name="validMailDomains"
            control={form.control}
            placeholder="stud.kai.edu.ua (enter для додавання)"
            form={form}
          />
          <LoadingButton
            type="submit"
            onClick={onSubmit}
            isLoading={createInstitution.isPending}
          >
            Створити
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
}
