"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui-kit/table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui-kit/avatar";

interface Student {
  id: string;
  name: string;
  subgroup: string;
  avatar: string;
}

const students: Student[] = [
  {
    id: "1",
    name: "Alex Thompson",
    subgroup: "Computer Science A",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=1",
  },
  {
    id: "2",
    name: "Sarah Chen",
    subgroup: "Computer Science B",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=2",
  },
  {
    id: "3",
    name: "Maria Garcia",
    subgroup: "Data Science A",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=3",
  },
  {
    id: "4",
    name: "David Kim",
    subgroup: "Computer Science A",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=4",
  },
  {
    id: "5",
    name: "Ethan Hunt",
    subgroup: "Data Science B",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=5",
  },
  {
    id: "6",
    name: "Fiona Gallagher",
    subgroup: "Computer Science B",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=6",
  },
];

export function StudentsList() {
  return (
    <div className="">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[80px]"></TableHead>
            <TableHead>Ім&apos;я</TableHead>
            <TableHead>Група</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={student.avatar} alt={student.name} />
                  <AvatarFallback>
                    {student.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.subgroup}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
