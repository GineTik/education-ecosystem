export function CommunitiesCard() {
  return (
    <div className="space-y-1 cursor-pointer hover:ring-2 hover:ring-secondary ring-offset-4 rounded-md transition-all">
      <div className="w-[200px] h-[200px] bg-secondary rounded-md"></div>
      <h2 className="mb-0">Назва спільноти</h2>
      <p className="text-sm text-muted-foreground">Опис спільноти</p>
    </div>
  );
}
