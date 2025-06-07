import type { Metadata } from "next";
import { AppSidebar } from "@/features/sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/shared/components/ui-kit/sidebar";
import { Header } from "./header";

export const metadata: Metadata = {
  title: "Student Cabinet",
  description: "Student Cabinet",
};

export default function StudentCabinetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
