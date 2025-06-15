"use client";

import { Loader2 } from "lucide-react";
import { useSpecialties } from "../hooks/use-specialties";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui-kit/table";

export function InstitutionsSpecialtiesList() {
    const specialties = useSpecialties();

    return <div>
        {specialties.isLoading && <Loader2 className="animate-spin" />}
        {!specialties.isLoading && <Table>
            <TableHeader>
                <TableHead>Код</TableHead>
                <TableHead>Назва</TableHead>
            </TableHeader>
            <TableBody>
                {specialties.data?.map((specialty) => (
                    <TableRow key={specialty.id}>
                        <TableCell>{specialty.code}</TableCell>
                        <TableCell>{specialty.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>}
    </div>;
}