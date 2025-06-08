import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui-kit/tabs";
import MarkdownView from "react-showdown";
import { InstitutionContacts } from "./institutions-contacts";
import styles from "./../markdown.module.css";
import { InstitutionArticles } from "./institutions-articles";

export function InstitutionTabs() {
  return (
    <Tabs defaultValue="articles">
      <TabsList>
        <TabsTrigger value="articles">Публікації</TabsTrigger>
        <TabsTrigger value="description">Опис</TabsTrigger>
        <TabsTrigger value="contacts">Контакти</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <div className={styles.markdown}>
          <MarkdownView markdown={"# Hello"} />
        </div>
      </TabsContent>
      <TabsContent value="contacts">
        <InstitutionContacts />
      </TabsContent>
      <TabsContent value="articles">
        <InstitutionArticles />
      </TabsContent>
    </Tabs>
  );
}
