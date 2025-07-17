import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/shared/components/ui-kit/table";

type StudentInformationItem = {
  label: string;
  value: string | number | undefined;
};

type StudentProfileProps = {
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  otherInformation?: StudentInformationItem[];
};

export function StudentProfile({
  avatarUrl,
  firstName,
  lastName,
  email,
  otherInformation = [],
}: StudentProfileProps) {
  return (
    <div className="max-w-[800px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Профіль студента</h1>

      <div className="flex gap-4 rounded-lg mx-auto space-y-4">
        <div className="items-center md:items-start">
          {avatarUrl && (
            <div className="size-32 md:size-48 rounded-lg mb-3 md:mb-0 md:mr-6 flex-shrink-0">
              <Image
                src={avatarUrl}
                alt={`${firstName || "Student"}'s photo`}
                width={192}
                height={192}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          )}

          <div className="text-center md:text-left flex-grow mt-2">
            {firstName && (
              <h2 className="text-xl font-semibold mb-1">
                {`${firstName} ${lastName}`}
              </h2>
            )}

            <div className="space-y-1 text-muted-foreground">
              {email && (
                <span className="block text-muted-foreground">{email}</span>
              )}
            </div>
          </div>
        </div>

        {otherInformation &&
          otherInformation.filter((item) => item.value !== undefined).length >
            0 && (
            <Table>
              <TableBody>
                {otherInformation.map((item) =>
                  item.value !== undefined ? (
                    <TableRow key={item.label} className="">
                      <TableCell className="p-1 font-medium text-muted-foreground w-1/2">
                        {item.label}
                      </TableCell>
                      <TableCell className="p-1 text-foreground">
                        {item.value}
                      </TableCell>
                    </TableRow>
                  ) : null
                )}
              </TableBody>
            </Table>
          )}
      </div>
    </div>
  );
}
