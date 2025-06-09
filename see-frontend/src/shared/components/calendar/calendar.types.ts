export type CalendarEvent = {
  id: string | number;
  start: Date;
  end: Date;
  title: string;
  allDay?: boolean;
  data?: {
    subject?: string;
    subjectColor?: string;
    subjectDarkColor?: string;
    subjectForegroundColor?: string;
    subjectDarkForegroundColor?: string;
  };
};
