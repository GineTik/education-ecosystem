"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui-kit/sidebar";
import { useMenu } from "../../hooks/use-menu";
import { SearchIcon } from "lucide-react";
import { DefaultMenuItem } from "../nav-items/default-menu-item";

export function NavMain() {
  const { mainMenu } = useMenu();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <SearchIcon />
          <span>Пошук</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      {mainMenu.map((item) => (
        <DefaultMenuItem key={item.title} {...item} />
      ))}
    </SidebarMenu>
  );
}
