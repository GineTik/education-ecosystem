import { ArticlesCard } from "@/features/articles";

export function InstitutionArticles() {
  return (
    <div className="space-y-2">
      <ArticlesCard
        title="Назва публікації"
        description="Опис публікації"
        date="2021-01-01"
      />
      <ArticlesCard
        title="Назва публікації"
        description="Опис публікації"
        date="2021-01-01"
      />
      <ArticlesCard
        title="Назва публікації"
        description="Опис публікації"
        date="2021-01-01"
      />
      <ArticlesCard
        title="Назва публікації"
        description="Опис публікації"
        date="2021-01-01"
        isLast
      />
    </div>
  );
}
