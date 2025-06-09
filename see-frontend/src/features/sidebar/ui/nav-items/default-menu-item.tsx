"use client";

import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/components/ui-kit/sidebar";
import { LucideProps } from "lucide-react";
import { ExternalLinkIcon } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";
import Link from "next/link";
import { KBD } from "@/shared/components/hotkeys/kbd";
import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

type DefaultMenuItemProps = {
  title: string;
  href: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  emoji?: string;
  external?: boolean;
  hotkeys?: string;
};

export function DefaultMenuItem({
  title,
  href,
  icon: Icon,
  emoji,
  external,
  hotkeys,
}: DefaultMenuItemProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();
  useHotkeys(hotkeys ?? "", () => {
    router.push(href);
  });

  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton asChild>
        <Link
          ref={linkRef}
          href={href}
          target={external ? "_blank" : undefined}
        >
          {Icon && <Icon />}
          {emoji && <span>{emoji}</span>}
          <span>{title}</span>
          {external && (
            <ExternalLinkIcon className="w-4 h-4 ml-auto text-muted-foreground" />
          )}
          {hotkeys && <KBD hotkeys={hotkeys} />}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
