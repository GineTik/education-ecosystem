"use client";

import { Loader2 } from "lucide-react";
import { useInstances } from "./use-institutions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui-kit/table";
import { Badge } from "@/shared/components/ui-kit/badge";

export function InstancesList() {
  const instances = useInstances();

  if (instances.isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {instances.data?.length === 0 && (
        <div className="">
          <p className="text-sm text-muted-foreground">
            Немає доступних закладів освіти
          </p>
        </div>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Назва</TableHead>
            <TableHead>Допустимі email домени</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {instances.data?.map((instance) => (
            <TableRow key={instance.id}>
              <TableCell>{instance.name}</TableCell>
              <TableCell>
                {instance.validMailDomains.map((domain) => (
                  <Badge variant="secondary" key={domain}>
                    {domain}
                  </Badge>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
