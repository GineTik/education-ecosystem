"use client";

import type React from "react";
import { X } from "lucide-react";
import {
  useFieldArray,
  Control,
  FieldValues,
  Path,
  UseFormReturn,
  useController,
} from "react-hook-form";

import { Button } from "@/shared/components/ui-kit/button";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui-kit/form";
import { Input } from "@/shared/components/ui-kit/input";
import { Badge } from "@/shared/components/ui-kit/badge";

type TagInputFormProps<T extends FieldValues> = {
  label: string;
  placeholder: string;
  name: Path<T>;
  control: Control<T>;
  form: UseFormReturn<T>;
};

export function TagInputForm<T extends FieldValues>({
  label,
  placeholder,
  name,
  control,
  form,
}: TagInputFormProps<T>) {
  const { fieldState } = useController({ control, name });
  const { fields, append, remove } = useFieldArray({
    control,
    name: name as never,
  });

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = e.currentTarget;
      const value = input.value.trim();

      if (value) {
        append(value as never);
        input.value = "";
      }
    }
  };

  const handleRemoveTag = (index: number) => {
    remove(index);
  };

  const message = Array.isArray(fieldState.error)
    ? fieldState.error[0]?.message
    : fieldState.error?.message;

  return (
    <div className="space-y-2">
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <div className="flex gap-2">
          <FormControl>
            <Input
              placeholder={placeholder}
              onKeyDown={(e) => handleAddTag(e)}
            />
          </FormControl>
        </div>
        <FormMessage />
        {message && <FormMessage>{message}</FormMessage>}
      </FormItem>
      <div className="flex flex-wrap gap-2">
        {fields.map((field, index) => (
          <Badge
            key={field.id}
            variant="outline"
            className="h-7 gap-1 px-2 text-xs font-medium"
          >
            {form.getValues(name)[index]}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0 hover:bg-transparent hover:cursor-pointer"
              onClick={() => handleRemoveTag(index)}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove tag</span>
            </Button>
          </Badge>
        ))}
      </div>
    </div>
  );
}
