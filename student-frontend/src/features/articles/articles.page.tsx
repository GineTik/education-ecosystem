import { ArticlesCard } from "./articles-card";
import { ArticlesPagination } from "./articles-pagination";

export function ArticlesPage() {
  return (
    <div className="max-w-[870px] w-full mx-auto p-4">
      <h1 className="mb-4">Статті</h1>
      <div className="space-y-2">
        <ArticlesCard
          title="Назва статті"
          description="Опис статті"
          date="2021-01-01"
        />
        <ArticlesCard
          title="Назва статті"
          description="Опис статті"
          date="2021-01-01"
        />
        <ArticlesCard
          title="Назва статті"
          description="Опис статті"
          date="2021-01-01"
          isLast
        />
      </div>
      <ArticlesPagination />
    </div>
  );
}
