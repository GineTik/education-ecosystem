import { StudentProfilePage } from "@/features/students";

export default function Page() {
  const studentData = {
    photoUrl: "https://api.dicebear.com/7.x/lorelei/svg?seed=6",
    name: "Alisa Kovalenko",
    year: 3,
    degree: "Bachelor of Software Engineering",
    otherInformation: [
      { label: "Email", value: "alisa.kovalenko@example.com" },
      { label: "Student ID", value: "S123457" },
      {
        label: "Faculty",
        value: "Faculty of Informatics and Computing Techniques",
      },
      { label: "Group", value: "ІО-11" },
      { label: "Date of Birth", value: "2003-05-15" },
      { label: "Enrollment Date", value: "2021-09-01" },
      { label: "Phone Number", value: "+380991234567" },
      { label: "Telegram", value: "@alisakovalenko" },
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
