import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui-kit/table";
import Link from "next/link";

export function InstitutionContacts() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ім&apos;я</TableHead>
            <TableHead>Посада</TableHead>
            <TableHead>Телефон</TableHead>
          </TableRow>
          <TableRow>
            <TableCell className="w-1/3">Тамара Михалівна</TableCell>
            <TableCell className="w-1/3">Декан</TableCell>
            <TableCell className="w-1/3">
              <Link href="tel:+380991234567">+380991234567</Link>
            </TableCell>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}
