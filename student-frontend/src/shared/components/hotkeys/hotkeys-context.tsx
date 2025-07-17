"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type HotkeysContextType = {
  isEnabled: boolean;
  toggleHotkeys: () => void;
};

const HotkeysContext = createContext<HotkeysContextType>({
  isEnabled: false,
  toggleHotkeys: () => {},
});

const HOTKEYS_STORAGE_KEY = "hotkeys-enabled";

type HotkeysProviderProps = {
  children: ReactNode;
};

export const HotkeysProvider = ({ children }: HotkeysProviderProps) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(() => {
    // Initialize from localStorage, default to true if not found
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(HOTKEYS_STORAGE_KEY);
      return stored !== null ? JSON.parse(stored) : false;
    }
    return false;
  });

  const toggleHotkeys = () => {
    setIsEnabled((prev) => {
      const newValue = !prev;
      // Sync with localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(HOTKEYS_STORAGE_KEY, JSON.stringify(newValue));
      }
      return newValue;
    });
  };

  // Sync with localStorage on mount and when isEnabled changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(HOTKEYS_STORAGE_KEY, JSON.stringify(isEnabled));
    }
  }, [isEnabled]);

  const value = {
    isEnabled,
    toggleHotkeys,
  };

  return (
    <HotkeysContext.Provider value={value}>{children}</HotkeysContext.Provider>
  );
};

export const useHotkeysEnabled = () => {
  const context = useContext(HotkeysContext);
  if (!context) {
    throw new Error("useHotkeys must be used within a HotkeysProvider");
  }
  return context;
};
