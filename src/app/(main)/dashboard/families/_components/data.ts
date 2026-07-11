export type FamilyStatus = "active" | "frozen" | "disband";
export type OrganizationType = "crime" | "government" | null;
export type CardAnimation = "none" | "bounce" | "pulse" | "spin" | "float" | "shake" | "glow";

export interface Family {
  id: string;
  name: string;
  members: number;
  description: string;
  image: string;
  color: string;
  joinedDate: string;
  status: FamilyStatus;
  likes: number;
  organization?: OrganizationType;
  hasMansion?: boolean;
  leaderProStatus?: boolean;
  cardAnimation?: CardAnimation;
}

export const animationOptions: { value: CardAnimation; label: string; icon: string }[] = [
  { value: "none", label: "Без анимации", icon: "⏸️" },
  { value: "bounce", label: "Прыжок", icon: "🦘" },
  { value: "pulse", label: "Пульс", icon: "💓" },
  { value: "spin", label: "Вращение", icon: "🔄" },
  { value: "float", label: "Плавание", icon: "🌊" },
  { value: "shake", label: "Встряска", icon: "📳" },
  { value: "glow", label: "Сияние", icon: "✨" },
];

export const families: Family[] = [
  {
    id: "1",
    name: "Команда Альфа",
    members: 8,
    description: "Основная команда разработки",
    image: "🚀",
    color: "from-blue-500 to-cyan-500",
    joinedDate: "2024-01-15",
    status: "active",
    likes: 12,
    organization: "crime",
    hasMansion: true,
    leaderProStatus: true,
    cardAnimation: "bounce",
  },
  {
    id: "2",
    name: "Маркетинг Синий",
    members: 5,
    description: "Команда маркетинга и продаж",
    image: "📊",
    color: "from-purple-500 to-pink-500",
    joinedDate: "2024-02-20",
    status: "active",
    likes: 8,
    organization: "government",
    hasMansion: false,
    leaderProStatus: false,
    cardAnimation: "none",
  },
  {
    id: "3",
    name: "Поддержка Золотая",
    members: 12,
    description: "Команда поддержки клиентов",
    image: "💬",
    color: "from-amber-500 to-orange-500",
    joinedDate: "2024-03-10",
    status: "frozen",
    likes: 15,
    organization: "crime",
    hasMansion: true,
    leaderProStatus: true,
    cardAnimation: "pulse",
  },
  {
    id: "4",
    name: "Финансы Зелёные",
    members: 6,
    description: "Финансовая команда",
    image: "💰",
    color: "from-green-500 to-emerald-500",
    joinedDate: "2024-01-25",
    status: "active",
    likes: 10,
    hasMansion: false,
    leaderProStatus: false,
    cardAnimation: "none",
  },
  {
    id: "5",
    name: "HR Красные",
    members: 4,
    description: "Управление ресурсами",
    image: "👥",
    color: "from-red-500 to-rose-500",
    joinedDate: "2024-04-05",
    status: "disband",
    likes: 5,
    organization: "government",
    hasMansion: true,
    leaderProStatus: true,
    cardAnimation: "glow",
  },
  {
    id: "6",
    name: "Инновации Фиолет",
    members: 7,
    description: "Исследования и разработки",
    image: "🔬",
    color: "from-violet-500 to-purple-500",
    joinedDate: "2024-05-12",
    status: "active",
    likes: 18,
    hasMansion: true,
    leaderProStatus: false,
    cardAnimation: "none",
  },
];
