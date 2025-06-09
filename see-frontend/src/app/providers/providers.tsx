import { HotkeysProvider } from "@/shared/components/hotkeys/hotkeys-context";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HotkeysProvider>{children}</HotkeysProvider>
    </ThemeProvider>
  );
}
