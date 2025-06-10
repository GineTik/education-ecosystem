"use client";

import { HotkeysProvider } from "@/shared/components/hotkeys/hotkeys-context";
import { queryClient } from "@/shared/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <HotkeysProvider>{children}</HotkeysProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
