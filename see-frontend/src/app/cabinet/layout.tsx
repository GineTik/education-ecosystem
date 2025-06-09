import { CabinetSidebar } from "@/features/sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/shared/components/ui-kit/sidebar";
import { CabinetHeader } from "./header";

export default function StudentCabinetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <CabinetSidebar />
      <SidebarInset className="flex flex-col">
        <CabinetHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
