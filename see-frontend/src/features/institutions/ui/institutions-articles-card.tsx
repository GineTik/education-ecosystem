import { Card, CardContent } from "@/shared/components/ui-kit/card";

type InstitutionArticlesCardProps = {
  title: string;
  description: string;
  image?: string;
  date: string;
};

export function InstitutionArticlesCard({
  title,
  description,
  date,
}: InstitutionArticlesCardProps) {
  return (
    <Card className="cursor-pointer hover:bg-muted/50 transition">
      <CardContent className="flex gap-4 px-2">
        <div className="w-[100px] h-[100px] rounded-md bg-muted"></div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
