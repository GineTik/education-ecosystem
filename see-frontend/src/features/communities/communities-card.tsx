export function CommunitiesCard() {
  return (
    <div className="space-y-1 cursor-pointer hover:ring-2 ring-muted ring-offset-5 rounded-md transition-all ring-offset-background duration-100">
      <div className="w-[200px] h-[200px] bg-secondary rounded-md"></div>
      <h2 className="mb-0">Назва спільноти</h2>
      <p className="text-sm text-muted-foreground">Опис спільноти</p>
    </div>
  );
}
