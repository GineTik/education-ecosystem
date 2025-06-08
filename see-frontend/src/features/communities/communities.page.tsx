import { CommunitiesCard } from "./communities-card";

export function CommunitiesPage() {
  return (
    <div className="max-w-[870px] w-full mx-auto p-4">
      <h1 className="mb-4">Спільноти</h1>
      <div className="flex gap-2 flex-wrap">
        <CommunitiesCard />
        <CommunitiesCard />
        <CommunitiesCard />
        <CommunitiesCard />
        <CommunitiesCard />
      </div>
    </div>
  );
}
