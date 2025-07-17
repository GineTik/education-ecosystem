import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui-kit/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/shared/components/ui-kit/table";

type GroupHeaderProps = {
  name: string;
  faculty: string;
  course: string;
  specialty: string;
  studentsCount: number;
};

export function GroupHeader({
  name,
  faculty,
  course,
  specialty,
  studentsCount,
}: GroupHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-1">
        <div className="mb-2">
          <span className="text-sm text-gray-500">Група</span>
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ІІ</AvatarFallback>
          </Avatar>
          <div className=" items-center">
            <span className="text-sm text-gray-500">Староста</span>
            <h2 className="text-base font-bold">Олександр Іванов</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ІІ</AvatarFallback>
          </Avatar>
          <div className=" items-center">
            <span className="text-sm text-gray-500">Куратор</span>
            <h2 className="text-base font-bold">Іван Іванов</h2>
          </div>
        </div>
      </div>
      <div className="space-y-2 mt-6">
        <Table className="w-fit">
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-muted-foreground">
                Факультет
              </TableCell>
              <TableCell className="">{faculty}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-muted-foreground">
                Курс
              </TableCell>
              <TableCell className="">{course}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-muted-foreground">
                Спеціальність
              </TableCell>
              <TableCell className="">{specialty}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-muted-foreground">
                Кількість студентів
              </TableCell>
              <TableCell>{studentsCount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
