import { GroupHeader } from "./ui/group-header";
import { StudentsList } from "./ui/students-list";

type GroupPageProps = {
  groupId: string;
};

export function GroupPage({ groupId }: GroupPageProps) {
  return (
    <div className="max-w-[800px] w-full mx-auto p-4 space-y-10">
      <GroupHeader
        name={`Group ${groupId}`}
        faculty="Faculty of Computer Science"
        course="Course 1"
        specialty="Computer Science"
        studentsCount={100}
      />
      <StudentsList />
    </div>
  );
}
