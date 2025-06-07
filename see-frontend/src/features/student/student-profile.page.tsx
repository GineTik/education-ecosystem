import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui-kit/card";

interface StudentInformationItem {
  label: string;
  value: string | number | undefined;
}

interface StudentProfileProps {
  photoUrl?: string;
  name?: string;
  year?: number | string;
  degree?: string;
  otherInformation?: StudentInformationItem[];
}

export function StudentProfilePage({
  photoUrl,
  name,
  year,
  degree,
  otherInformation = [],
}: StudentProfileProps) {
  return (
    <div className="max-w-[800px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Профіль студента</h1>

      <div className="bg-white rounded-lg mx-auto">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          {photoUrl && (
            <div className="size-32 md:size-48 rounded-lg bg-muted overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <Image
                src={photoUrl}
                alt={`${name || "Student"}'s photo`}
                width={192} // Corresponds to md:w-48 (48 * 4px base)
                height={192} // Corresponds to md:h-48
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div className="text-center md:text-left flex-grow">
            {name && <h2 className="text-xl font-semibold mb-1">{name}</h2>}

            <div className="space-y-1 text-gray-700">
              {year && (
                <p>
                  <strong>Year:</strong> {year}
                </p>
              )}
              {degree && (
                <p>
                  <strong>Degree:</strong> {degree}
                </p>
              )}
            </div>
          </div>
        </div>

        {otherInformation &&
          otherInformation.filter((item) => item.value !== undefined).length >
            0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold mb-3">
                  Інформація про студента
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <ul className="space-y-2">
                  {otherInformation.map((item) =>
                    item.value !== undefined ? (
                      <li
                        key={item.label}
                        className="flex flex-col sm:flex-row sm:justify-between py-1"
                      >
                        <span className="font-medium text-gray-600">
                          {item.label}:
                        </span>
                        <span className="text-gray-800 sm:text-right">
                          {item.value}
                        </span>
                      </li>
                    ) : null
                  )}
                </ul>
              </CardContent>
            </Card>
          )}

        {!photoUrl &&
          !name &&
          !year &&
          !degree &&
          (!otherInformation ||
            otherInformation.filter((item) => item.value !== undefined)
              .length === 0) && (
            <p className="text-center text-gray-500 mt-6">
              No student information available.
            </p>
          )}
      </div>
    </div>
  );
}

// Example Usage (can be removed or adapted for a specific page route):
/*
import { NextPage } from 'next';

const StudentProfileExamplePage: NextPage = () => {
  const studentData: StudentProfileProps = {
    photoUrl: "https://via.placeholder.com/192", // Replace with actual photo URL
    name: "Alisa Kovalenko",
    year: 3,
    degree: "Bachelor of Software Engineering",
    otherInformation: [
      { label: "Email", value: "alisa.kovalenko@example.com" },
      { label: "Student ID", value: "S123457" },
      { label: "Faculty", value: "Faculty of Informatics and Computing Techniques" },
      { label: "Group", value: "ІО-11" },
      { label: "Date of Birth", value: "2003-05-15" },
      { label: "Enrollment Date", value: "2021-09-01" },
      { label: "Phone Number", value: "+380991234567"},
      { label: "Telegram", value: "@alisakovalenko"},
      { label: "Advisor", value: undefined }, // Example of undefined value not being rendered
      { label: "GPA", value: 3.85 },
    ],
  };

  // You would typically fetch this data from an API in a real application
  // For example:
  // const { data: studentData, error, isLoading } = useSWR('/api/student/profile', fetcher);
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Failed to load profile</div>;
  // if (!studentData) return <div>No profile data</div>;


  return <StudentProfilePage {...studentData} />;
}

export default StudentProfileExamplePage;
*/
