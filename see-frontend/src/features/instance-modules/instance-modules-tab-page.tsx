"use client";

import { ApiSchemas } from "@/shared/api/schema";
import { Form, FormField } from "@/shared/components/ui-kit/form";
import { Input } from "@/shared/components/ui-kit/input";
import { LoadingButton } from "@/shared/components/ui-kit/loading-button";
import { Switch } from "@/shared/components/ui-kit/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/shared/components/ui-kit/table";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateInstanceModule } from "./use-update-instance-module";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { SaveIcon } from "lucide-react";

type InstanceModulesTabPageProps = {
  module: ApiSchemas["GetModuleDto"];
};

export function InstanceModulesTabPage({
  module,
}: InstanceModulesTabPageProps) {
  const form = useForm({
    defaultValues: module,
    mode: "onChange",
    resolver: zodResolver(z.object({
      isEnabled: z.boolean().optional(),
      apiKey: z.string().nullable().optional(),
      baseUrl: z.string().url({ message: "Будь ласка, введіть валідну URL-адресу" }),
    })),
  });
  const formValues = form.watch();
  const updateModule = useUpdateInstanceModule();
  const [prevValues, setPrevValues] = useState(formValues);

  const onSubmit = form.handleSubmit((data) => {
    updateModule.mutate({
      params: {
        path: { typeSlug: module.slug },
      },
      body: {
        baseUrl: data.baseUrl,
        apiKey: data.apiKey === "" && data.apiKey === undefined ? null : data.apiKey!,
        isEnabled: data.isEnabled ?? false,
      },
    });
      setPrevValues(formValues);
    },
    () => {
      const errorMessages = Object.values(form.formState.errors)
        .map(error => error.message)
        .filter(Boolean);
      toast.error(errorMessages.join('\n'));
    },
  );

  return (
    <div className="space-y-2">
      <h2>{module.name}</h2>
      <p className="text-muted-foreground text-sm">{module.description}</p>
      {!formValues.isEnabled && (
        <p className="text-muted-foreground text-sm">
          Модуль не активовано, це значить, що для студентів фунціонал пов'язаний з цим модулем не буде доступний. Заповніть базову адресу для активації модуля.
        </p>
      )}
      <Table>
        <TableBody>
          <Form {...form}>
            <ModuleSettingRow name="Увімкнути модуль">
              <FormField
                control={form.control}
                name="isEnabled"
                render={({ field }) => (
                  <Switch
                    checked={field.value ?? false}
                    onCheckedChange={(checked) => {
                      if (formValues.baseUrl === "") {
                        toast.error("Будь ласка, заповніть базову адресу");
                        return;
                      }
                      field.onChange(checked);
                    }}
                  />
                )}
              />
            </ModuleSettingRow>
            <ModuleSettingRow name="Базова адреса">
              <Input placeholder="https://example.com" {...form.register("baseUrl")} />
            </ModuleSettingRow>
            {formValues.isEnabled && (
              <>
                <ModuleSettingRow name="АПІ ключ">
                  <Input placeholder="Відсутній" {...form.register("apiKey")} />
                </ModuleSettingRow>
              </>
            )}
            
          </Form>
        </TableBody>
      </Table>

        <div className="flex justify-end">

          <LoadingButton
            isLoading={updateModule.isPending}
            onClick={onSubmit}
            className="w-full mt-2"
            disabled={!isFormValuesChanged(prevValues, formValues)}
          >
            <SaveIcon className="w-4 h-4" />
            {isFormValuesChanged(prevValues, formValues) ? "Зберегти" : "Збережено"}
          </LoadingButton>
        </div>
    </div>
  );
}

function isFormValuesChanged<T>(prevValues: T, actualValues: T) {
  return JSON.stringify(prevValues) !== JSON.stringify(actualValues);
} 

type ModuleSettingRowProps = {
  name: string;
  children: React.ReactElement;
};

function ModuleSettingRow({ name, children }: ModuleSettingRowProps) {
  return (
    <TableRow className="w-full">
      <TableCell className="pl-0">{name}</TableCell>
      <TableCell className="pr-0 w-1/2">{children}</TableCell>
    </TableRow>
  );
}
