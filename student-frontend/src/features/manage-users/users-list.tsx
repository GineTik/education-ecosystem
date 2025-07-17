"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui-kit/table";
import { useUsers } from "./use-users";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui-kit/avatar";
import dayjs from "dayjs";

export function UsersList() {
  const users = useUsers();

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Ім&apos;я</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Роль</TableHead>
            <TableHead>Дата створення</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.data?.map((user) => (
            <TableRow key={user.id} className="">
              <TableCell className="max-w-8">
                <Avatar className="size-8 dark:bg-muted/30">
                  <AvatarFallback>{user.firstName?.[0]}</AvatarFallback>
                  <AvatarImage src={user.avatarUrl ?? undefined} />
                </Avatar>
              </TableCell>
              <TableCell className="max-w-[50px] truncate">{user.id}</TableCell>
              <TableCell>
                {user.firstName ?? (
                  <span className="text-muted-foreground">N/a</span>
                )}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                {user.createdAt
                  ? dayjs(user.createdAt).format("DD.MM.YYYY")
                  : "N/a"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
