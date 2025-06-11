"use client";

import { ApiSchemas } from "@/shared/api/schema";
import { ComboboxForm } from "@/shared/components/ui-kit/combobox";
import { Form } from "@/shared/components/ui-kit/form";
import { InputForm } from "@/shared/components/ui-kit/input";
import { useForm } from "react-hook-form";
import { useInstances } from "@/features/instances";
import { Role } from "@/shared/api/schema/generated";
import { LoadingButton } from "@/shared/components/ui-kit/loading-button";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useCreateUser } from "./use-create-user";

export function UsersCreateForm() {
  const instances = useInstances();
  const createUser = useCreateUser();
  const form = useForm<ApiSchemas["CreateUserDto"]>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      roleSlug: "",
      instanceId: "",
    },
    resolver: zodResolver(
      z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email(),
        roleSlug: z.enum(Object.values(Role) as [string, ...string[]]),
        instanceId: z.string().min(1),
      })
    ),
  });

  const onSubmit = form.handleSubmit((data) => {
    createUser.mutate({
      body: data,
    });
    form.reset();
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 items-start">
            <InputForm
              name="firstName"
              control={form.control}
              label="Ім'я"
              placeholder="Ім'я"
            />
            <InputForm
              name="lastName"
              control={form.control}
              label="Прізвище"
              placeholder="Прізвище"
            />
          </div>
          <InputForm
            name="email"
            control={form.control}
            label="Email"
            placeholder="Email"
          />
          <div className="grid grid-cols-2 gap-4 items-start">
            <ComboboxForm
              name="roleSlug"
              control={form.control}
              label="Роль"
              placeholder="Роль"
              options={Object.values(Role).map((role) => ({
                value: role,
                label: role,
              }))}
              noFoundMessage="Роль не знайдена"
            />
            {instances.data && (
              <ComboboxForm
                name="instanceId"
                control={form.control}
                label="Instance"
                options={
                  instances.data?.map((instance) => ({
                    value: instance.id,
                    label: instance.name,
                  })) ?? []
                }
                noFoundMessage="Instance не знайдений"
              />
            )}
          </div>
          <LoadingButton type="submit" className="w-full" isLoading={false}>
            Створити
          </LoadingButton>
        </form>
      </Form>
    </>
  );
}
