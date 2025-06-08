import { InstitutionHeader } from "./ui/institutions-header";
import { InstitutionSidebar } from "./ui/institutions-sidebar";
import { InstitutionTabs } from "./ui/institutions-tabs";

export function InstitutionPage() {
  return (
    <div className="space-y-4 flex gap-4 justify-center p-4">
      <InstitutionSidebar />
      <div className="space-y-2 max-w-[800px] w-full">
        <div className="">
          <InstitutionHeader />
        </div>
        <InstitutionTabs />
      </div>
    </div>
  );
}
