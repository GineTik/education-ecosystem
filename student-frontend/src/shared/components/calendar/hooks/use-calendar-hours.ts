export function useCalendarHours() {
  return Array.from({ length: 24 }, (_, i) => (i + 6) % 24);
}
