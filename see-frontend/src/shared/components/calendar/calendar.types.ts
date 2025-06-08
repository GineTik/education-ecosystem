export type CalendarEvent = {
  id: string | number;
  start: Date;
  end: Date;
  title: string;
  allDay?: boolean;
  data?: {
    subject?: string;
    subjectColor?: string;
    subjectForegroundColor?: string;
  };
};
