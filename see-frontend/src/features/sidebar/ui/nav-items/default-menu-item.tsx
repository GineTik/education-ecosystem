import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/components/ui-kit/sidebar";
import { LucideProps } from "lucide-react";
import { ExternalLinkIcon } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Link from "next/link";

type DefaultMenuItemProps = {
  title: string;
  href: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  emoji?: string;
  external?: boolean;
};

export function DefaultMenuItem({
  title,
  href,
  icon: Icon,
  emoji,
  external,
}: DefaultMenuItemProps) {
  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton asChild>
        <Link href={href} target={external ? "_blank" : undefined}>
          {Icon && <Icon />}
          {emoji && <span>{emoji}</span>}
          <span>{title}</span>
          {external && (
            <ExternalLinkIcon className="w-4 h-4 ml-auto text-muted-foreground" />
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
