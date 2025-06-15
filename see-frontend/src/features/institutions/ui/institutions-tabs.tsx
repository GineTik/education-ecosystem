"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui-kit/tabs";
import MarkdownView from "react-showdown";
import styles from "./../markdown.module.css";
import { useAbout } from "../hooks/use-about";
import { Loader2 } from "lucide-react";
import { InstitutionsFacultiesList } from "./institutions-faculties-list";
import { InstitutionsSpecialtiesList } from "./institutions-specialties";

export function InstitutionTabs() {
  const about = useAbout();
  
  return (
    <Tabs defaultValue="description">
      <TabsList>
        <TabsTrigger value="description">Опис</TabsTrigger>
        <TabsTrigger value="faculties">Факультети</TabsTrigger>
        <TabsTrigger value="specialties">Спеціальності</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <div className={styles.markdown}>
          {about.isLoading && <Loader2 className="animate-spin" />}
          {!about.isLoading && <MarkdownView markdown={about.data?.about ?? ''} />}
        </div>
      </TabsContent>
      <TabsContent value="faculties">
        <InstitutionsFacultiesList />
      </TabsContent>
      <TabsContent value="specialties">
        <InstitutionsSpecialtiesList />
      </TabsContent>
    </Tabs>
  );
}
