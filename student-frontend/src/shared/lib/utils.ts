import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines if a color is light or dark and returns appropriate text color for contrast
 * @param color - Hex color string (e.g., "#ff0000" or "ff0000")
 * @returns "white" for dark backgrounds, "black" for light backgrounds
 */
export function getContrastTextColor(color: string): "white" | "black" {
  if (!color) return "black";

  // Remove # if present
  const hex = color.replace("#", "");

  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance using the relative luminance formula
  // Formula: 0.299*R + 0.587*G + 0.114*B
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return white for dark colors (luminance < 0.5), black for light colors
  return luminance < 0.5 ? "white" : "black";
}
