import { HOTKEYS } from "@/shared/constants/hotkeys";
import { ROUTES } from "@/shared/constants/routes";
import { BookOpenIcon, HomeIcon } from "lucide-react";
import { isExternal } from "util/types";

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
        href: ROUTES.STUDENT_INSTITUTION,
        emoji: "🏫",
        hotkeys: HOTKEYS.OPEN_INSTITUTION,
      },
      {
        title: "Спільноти",
        href: ROUTES.UNIVERSITY_COMMUNITIES,
        emoji: "🤝",
      },
      {
        title: "Сторінки",
        href: ROUTES.UNIVERSITY_ARTICLES,
        emoji: "📄",
      },
      {
        title: "Digital University",
        href: "https://digitaluniversity.kpi.ua/",
        emoji: "💻",
        isExternal: true,
      },
    ],
    groupMenu: [
      {
        title: "Профіль групи",
        href: ROUTES.STUDENT_GROUP,
        emoji: "👥",
        hotkeys: HOTKEYS.OPEN_GROUP,
      },
      {
        title: "Розклад",
        href: ROUTES.STUDENT_SCHEDULE,
        emoji: "📅",
        hotkeys: HOTKEYS.OPEN_SCHEDULE,
      },
      {
        title: "Група в телеграм",
        href: "https://t.me/see_group_b31211pi",
        emoji: "💬",
        isExternal: true,
      },
    ],
    studentMenu: [
      {
        title: "Профіль студента",
        href: ROUTES.STUDENT_PROFILE,
        emoji: "👤",
        hotkeys: HOTKEYS.OPEN_PROFILE,
      },
      {
        title: "Налаштування",
        href: ROUTES.STUDENT_SETTINGS,
        emoji: "⚙️",
      },
    ],
    adminMenu: [
      {
        title: "Управління закладами освіти",
        href: ROUTES.MANAGE_INSTANCES,
        emoji: "🏫",
      },
      {
        title: "Управління користувачами",
        href: ROUTES.MANAGE_USERS,
        emoji: "👤",
      },
    ],
    instanceExternalLinks: [
      {
        title: "Модулі public API",
        href: ROUTES.MANAGE_INSTANCE_MODULES,
        emoji: "🧱",
      },
      {
        title: "Digital University",
        href: "#",
        emoji: "📅",
        isExternal: true,
      },
    ],
  };
};
