export type CalendarEvent = {
  id: string | number;
  start: Date;
  end: Date;
  title: string;
  allDay?: boolean;
  type?: string;
  teacher?: string;
  data?: {
    subjectColor?: string;
    subjectDarkColor?: string;
    subjectForegroundColor?: string;
    subjectDarkForegroundColor?: string;
  };
};
