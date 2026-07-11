export interface Family {
  id: string;
  name: string;
  members: number;
  description: string;
  image: string;
  color: string;
  joinedDate: string;
}

export const families: Family[] = [
  {
    id: "1",
    name: "Команда Альфа",
    members: 8,
    description: "Основная команда разработки и дизайна",
    image: "🚀",
    color: "from-blue-500 to-cyan-500",
    joinedDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Маркетинг Синий",
    members: 5,
    description: "Команда маркетинга и продаж",
    image: "📊",
    color: "from-purple-500 to-pink-500",
    joinedDate: "2024-02-20",
  },
  {
    id: "3",
    name: "Поддержка Золотая",
    members: 12,
    description: "Команда поддержки клиентов",
    image: "💬",
    color: "from-amber-500 to-orange-500",
    joinedDate: "2024-03-10",
  },
  {
    id: "4",
    name: "Финансы Зелёные",
    members: 6,
    description: "Финансовая и бухгалтерская команда",
    image: "💰",
    color: "from-green-500 to-emerald-500",
    joinedDate: "2024-01-25",
  },
  {
    id: "5",
    name: "HR Красные",
    members: 4,
    description: "Команда управления человеческими ресурсами",
    image: "👥",
    color: "from-red-500 to-rose-500",
    joinedDate: "2024-04-05",
  },
  {
    id: "6",
    name: "Инновации Фиолет",
    members: 7,
    description: "Команда исследований и разработок",
    image: "🔬",
    color: "from-violet-500 to-purple-500",
    joinedDate: "2024-05-12",
  },
];
