import { ROUTES } from "@/shared/constants/routes";
import { BookOpenIcon, HomeIcon } from "lucide-react";

export const useMenu = () => {
  return {
    mainMenu: [
      {
        title: "Головна",
        href: ROUTES.CABINET_HOME,
        icon: HomeIcon,
      },
      {
        title: "Про проєкт",
        href: ROUTES.ABOUT_PROJECT,
        icon: BookOpenIcon,
      },
    ],
    universityMenu: [
      {
        title: "Профіль університету",
        href: ROUTES.STUDENT_UNIVERSITY(1),
        emoji: "🏫",
      },
      {
        title: "Спільноти",
        href: ROUTES.UNIVERSITY_COMMUNITIES(1),
        emoji: "🤝",
      },
      {
        title: "Сторінки",
        href: ROUTES.UNIVERSITY_PAGES(1),
        emoji: "📄",
      },
      {
        title: "Digital University",
        href: "https://digitaluniversity.kpi.ua/",
        emoji: "💻",
        external: true,
      },
    ],
    groupMenu: [
      {
        title: "Профіль групи",
        href: ROUTES.STUDENT_GROUP,
        emoji: "👥",
      },
      {
        title: "Розклад",
        href: ROUTES.STUDENT_SCHEDULE,
        emoji: "📅",
      },
      {
        title: "Група в телеграм",
        href: "https://t.me/see_group_b31211pi",
        emoji: "💬",
        external: true,
      },
    ],
    studentMenu: [
      {
        title: "Профіль студента",
        href: ROUTES.STUDENT_PROFILE,
        emoji: "👤",
      },
      {
        title: "Налаштування",
        href: ROUTES.STUDENT_SETTINGS,
        emoji: "⚙️",
      },
    ],
  };
};
