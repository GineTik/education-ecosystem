import { cn } from "@/shared/lib/utils";

type ArticlesCardProps = {
  title: string;
  description: string;
  date: string;
  isLast?: boolean;
};

export function ArticlesCard({
  title,
  description,
  date,
  isLast,
}: ArticlesCardProps) {
  return (
    <div className="flex gap-4">
      <div className="pb-2">
        <div className="w-[100px] h-[100px] rounded-md bg-muted"></div>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 justify-center border-b border-border pb-2 w-full",
          isLast && "border-b-0"
        )}
      >
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
