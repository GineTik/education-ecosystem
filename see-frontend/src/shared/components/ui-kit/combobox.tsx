"use client";

import { cn } from "@/shared/lib/utils";
import { ChevronsUpDownIcon, CheckIcon } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { FormField, FormItem, FormLabel, FormMessage } from "./form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { FieldValues, Path } from "react-hook-form";
import { Control } from "react-hook-form";

type ComboboxProps = {
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  noFoundMessage?: string;
  onChange: (value: string) => void;
  align?: "start" | "center" | "end";
};

export function Combobox({
  options,
  placeholder = "Виберіть",
  noFoundMessage = "Нічого не знайдено",
  align = "start",
  onChange,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value ? (
            options.find((option) => option.value === value)?.label
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align={align}>
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{noFoundMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={(currentValue) => {
                    const value = options.find(
                      (option) => option.label === currentValue
                    )?.value;
                    if (value) {
                      setValue(value);
                      setOpen(false);
                    }
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

type ComboboxFormProps<T extends FieldValues> = Omit<
  ComboboxProps,
  "onChange"
> & {
  control: Control<T>;
  name: Path<T>;
  label: string;
};

export function ComboboxForm<T extends FieldValues>({
  options,
  placeholder,
  noFoundMessage,
  control,
  name,
  label,
}: ComboboxFormProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Combobox
            options={options}
            placeholder={placeholder}
            noFoundMessage={noFoundMessage}
            {...field}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
