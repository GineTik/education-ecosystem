import { Loader2 } from "lucide-react";
import { Button } from "./button";

type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  isLoading: boolean;
};

export function LoadingButton({
  children,
  isLoading,
  ...props
}: LoadingButtonProps) {
  return (
    <Button {...props} disabled={isLoading || props.disabled}>
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : children}
    </Button>
  );
}
