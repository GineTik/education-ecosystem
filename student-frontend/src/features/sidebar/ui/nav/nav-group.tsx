import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/shared/components/ui-kit/sidebar";
import {
  DefaultMenuItem,
  DefaultMenuItemProps,
} from "../nav-items/default-menu-item";

type NavGroupProps = {
  label: string;
  items: DefaultMenuItemProps[];
};

export function NavGroup({ label, items }: NavGroupProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <DefaultMenuItem key={item.title} {...item} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
