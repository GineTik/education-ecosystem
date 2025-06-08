import { ThemeToggleButton } from "@/shared/components/theme/theme-toggle-button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/shared/components/ui-kit/breadcrumb";
import { Separator } from "@/shared/components/ui-kit/separator";
import { SidebarTrigger } from "@/shared/components/ui-kit/sidebar";

export function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 w-full">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                Student education ecosystem
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto px-3">
        <ThemeToggleButton />
      </div>
    </header>
  );
}
