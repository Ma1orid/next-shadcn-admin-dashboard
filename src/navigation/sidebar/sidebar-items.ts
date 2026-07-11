import {
  Banknote,
  Calendar,
  ChartBar,
  CheckSquare,
  Fingerprint,
  Forklift,
  Gauge,
  GraduationCap,
  Kanban,
  LayoutDashboard,
  ListTodo,
  Lock,
  type LucideIcon,
  Mail,
  MessageSquare,
  ReceiptText,
  Server,
  ShoppingBag,
  SquareArrowUpRight,
  Users,
} from "lucide-react";

export type NavBadge = "new" | "soon";

export interface NavSubItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

interface NavItemBase {
  id: string;
  title: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

export interface NavMainLinkItem extends NavItemBase {
  url: string;
  subItems?: never;
}

export interface NavMainParentItem extends NavItemBase {
  subItems: NavSubItem[];
}

export type NavMainItem = NavMainLinkItem | NavMainParentItem;

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Панели управления",
    items: [
      {
        id: "default",
        title: "Главная",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        id: "crm",
        title: "CRM",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        id: "finance",
        title: "Финансы",
        url: "/dashboard/finance",
        icon: Banknote,
      },
      {
        id: "analytics",
        title: "Аналитика",
        url: "/dashboard/analytics",
        icon: Gauge,
      },
      {
        id: "productivity",
        title: "Производительность",
        url: "/dashboard/productivity",
        icon: ListTodo,
      },
      {
        id: "ecommerce",
        title: "Электронная коммерция",
        url: "/dashboard/ecommerce",
        icon: ShoppingBag,
      },
      {
        id: "academy",
        title: "Академия",
        url: "/dashboard/academy",
        icon: GraduationCap,
      },
      {
        id: "logistics",
        title: "Логистика",
        url: "/dashboard/logistics",
        icon: Forklift,
      },
      {
        id: "infrastructure",
        title: "Инфраструктура",
        url: "/dashboard/infrastructure",
        icon: Server,
        badge: "new",
      },
    ],
  },
  {
    id: 2,
    label: "Страницы",
    items: [
      {
        id: "email",
        title: "Электронная почта",
        url: "/dashboard/mail",
        icon: Mail,
      },
      {
        id: "chat",
        title: "Чат",
        url: "/dashboard/chat",
        icon: MessageSquare,
      },
      {
        id: "calendar",
        title: "Календарь",
        url: "/dashboard/calendar",
        icon: Calendar,
      },
      {
        id: "kanban",
        title: "Канбан",
        url: "/dashboard/kanban",
        icon: Kanban,
      },
      {
        id: "tasks",
        title: "Задачи",
        url: "/dashboard/tasks",
        icon: CheckSquare,
        badge: "new",
      },
      {
        id: "invoice",
        title: "Счета",
        url: "/dashboard/invoice",
        icon: ReceiptText,
      },
      {
        id: "users",
        title: "Пользователи",
        url: "/dashboard/users",
        icon: Users,
      },
      {
        id: "roles",
        title: "Роли",
        url: "/dashboard/roles",
        icon: Lock,
      },
      {
        id: "authentication",
        title: "Аутентификация",
        icon: Fingerprint,
        subItems: [{ id: "auth-login-v2", title: "Вход", url: "/auth/v2/login", newTab: true }],
      },
    ],
  },
  {
    id: 3,
    label: "Архив",
    items: [
      {
        id: "legacy-dashboards",
        title: "Панели управления",
        subItems: [
          { id: "legacy-default", title: "Главная V1", url: "/dashboard/default-v1" },
          { id: "legacy-crm", title: "CRM V1", url: "/dashboard/crm-v1" },
          { id: "legacy-finance", title: "Финансы V1", url: "/dashboard/finance-v1" },
          { id: "legacy-analytics", title: "Аналитика V1", url: "/dashboard/analytics-v1" },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Разное",
    items: [
      {
        id: "others",
        title: "Другое",
        url: "/dashboard/coming-soon",
        icon: SquareArrowUpRight,
        badge: "soon",
        disabled: true,
      },
    ],
  },
];
