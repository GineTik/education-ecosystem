import type { Metadata } from "next";
import { AppSidebar } from "@/features/sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/shared/components/ui-kit/sidebar";
import { Header } from "./header";
import { ThemeProvider } from "next-themes";

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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex flex-col">
          <Header />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
