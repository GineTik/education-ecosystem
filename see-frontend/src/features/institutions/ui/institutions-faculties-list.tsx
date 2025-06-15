"use client";

import { Loader2 } from "lucide-react";
import { useFaculties } from "../hooks/use-faculties";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui-kit/table";

export function InstitutionsFacultiesList() {
    const faculties = useFaculties();

    return <div>
        {faculties.isLoading && <Loader2 className="animate-spin" />}
        {!faculties.isLoading && <Table>
            <TableHeader>
                <TableHead>Назва</TableHead>
            </TableHeader>
            <TableBody>
                {faculties.data?.map((faculty) => (
                    <TableRow key={faculty.id}>
                        <TableCell>{faculty.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>}
    </div>;
}