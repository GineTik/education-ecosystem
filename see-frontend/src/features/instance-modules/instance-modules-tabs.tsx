"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/shared/components/ui-kit/tabs";
import { InstanceModulesTabPage } from "./instance-modules-tab-page";
import { useInstanceModules } from "./use-instance-modules";
import { Loader2 } from "lucide-react";

export function InstanceModulesTabs() {
  const modules = useInstanceModules();

  if (modules.isLoading || !modules.data) {
    return (
      <div className="mx-auto flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Tabs
        defaultValue={modules.data[0].slug}
        className="flex gap-4 flex-row items-start"
      >
        <div className="space-y-2">
          <h3>Модулі</h3>
          <TabsList className="flex-col h-auto *:w-full *:items-start *:justify-start">
            {modules.data?.map((module) => (
              <TabsTrigger key={module.slug} value={module.slug}>
                {module.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {modules.data?.map((module) => (
          <TabsContent key={module.slug} value={module.slug}>
            <InstanceModulesTabPage
              module={{
                ...module,
                name: module.name,
              }}
            />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
