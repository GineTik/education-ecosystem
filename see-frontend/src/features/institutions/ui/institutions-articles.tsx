import { InstitutionArticlesCard } from "./institutions-articles-card";

export function InstitutionArticles() {
  return (
    <div className="space-y-2">
      <InstitutionArticlesCard
        title="Назва публікації"
        description="Опис публікації"
        date="2021-01-01"
      />
      <InstitutionArticlesCard
        title="Назва публікації"
        description="Опис публікації"
        date="2021-01-01"
      />
      <InstitutionArticlesCard
        title="Назва публікації"
        description="Опис публікації"
        date="2021-01-01"
      />
      <InstitutionArticlesCard
        title="Назва публікації"
        description="Опис публікації"
        date="2021-01-01"
      />
    </div>
  );
}
