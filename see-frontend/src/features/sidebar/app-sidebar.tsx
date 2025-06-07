"use client";

import * as React from "react";
import { NavMain } from "./ui/nav/nav-main";
import { NavGroup } from "./ui/nav/nav-group";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/shared/components/ui-kit/sidebar";
import { Logo } from "@/shared/components/logo";
import { useMenu } from "./hooks/use-menu";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { groupMenu, universityMenu, studentMenu } = useMenu();

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <Logo />
        <NavMain />
      </SidebarHeader>
      <SidebarContent>
        <NavGroup label="Ваш університет (КАІ)" items={universityMenu} />
        <NavGroup label="Ваша група (Б-3-121-1-ПІ)" items={groupMenu} />
        <NavGroup label="Студент (Ви)" items={studentMenu} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
