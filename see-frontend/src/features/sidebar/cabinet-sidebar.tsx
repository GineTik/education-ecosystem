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
import { ROUTES } from "@/shared/constants/routes";
import { Role } from "@/shared/api/schema/generated";
import { HasRole } from "@/shared/components/auth/HasRole";

export function CabinetSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const {
    groupMenu,
    universityMenu,
    studentMenu,
    adminMenu,
    instanceExternalLinks,
  } = useMenu();

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <Logo href={ROUTES.HOME} />
        <NavMain />
      </SidebarHeader>
      <SidebarContent>
        <HasRole role={Role.student}>
          <NavGroup label="Ваш університет (КАІ)" items={universityMenu} />
          <NavGroup label="Ваша група (Б-3-121-1-ПІ)" items={groupMenu} />
          <NavGroup label="Студент (Ви)" items={studentMenu} />
        </HasRole>
        <HasRole role={Role.admin}>
          <NavGroup label="Адміністратор" items={adminMenu} />
        </HasRole>
        <HasRole role={Role.institution_admin}>
          <NavGroup label="Управління закладом" items={instanceExternalLinks} />
        </HasRole>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
