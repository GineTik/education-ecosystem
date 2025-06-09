import { CommandIcon } from "lucide-react";
import Link from "next/link";

type LogoProps = {
  href?: string;
};

export function Logo({ href }: LogoProps) {
  return (
    <Link
      href={href ?? ""}
      className="inline-flex items-center gap-2 hover:bg-sidebar-accent p-1 rounded-md transition-colors"
    >
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-5 items-center justify-center rounded-sm">
        <CommandIcon className="size-3" />
      </div>
      <span className="truncate font-medium">SEE</span>
    </Link>
  );
}
