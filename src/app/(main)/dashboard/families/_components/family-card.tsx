"use client";

import { useState } from "react";

import { Building2, Heart, Settings } from "lucide-react";
import { siDiscord } from "simple-icons";

import { SimpleIcon } from "@/components/simple-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { CardAnimation, Family, FamilyStatus, OrganizationType } from "./data";
import { animationOptions } from "./data";

interface FamilyCardProps {
  family: Family;
  onAnimationChange?: (familyId: string, animation: CardAnimation) => void;
}

const statusConfig: Record<FamilyStatus, { label: string; color: string; animation: string }> = {
  active: {
    label: "Активна",
    color: "bg-green-500/20 text-green-700 dark:text-green-400",
    animation: "animate-pulse",
  },
  frozen: {
    label: "Заморожена",
    color: "bg-blue-500/20 text-blue-700 dark:text-blue-400",
    animation: "animate-bounce",
  },
  disband: {
    label: "Распущена",
    color: "bg-destructive/20 text-destructive dark:text-red-400",
    animation: "animate-pulse",
  },
};

const organizationConfig: Record<Exclude<OrganizationType, null>, { label: string; icon: string; color: string }> = {
  crime: {
    label: "Криминальная организация",
    icon: "🏴",
    color: "text-red-600",
  },
  government: {
    label: "Государственная организация",
    icon: "🏛️",
    color: "text-blue-600",
  },
};

const getAnimationClass = (animation: CardAnimation | undefined) => {
  if (!animation || animation === "none") return "";
  return `animation-${animation}`;
};

export function FamilyCard({ family, onAnimationChange }: FamilyCardProps) {
  const [likes, setLikes] = useState(family.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<CardAnimation>(family.cardAnimation ?? "none");
  const status = statusConfig[family.status];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleAnimationChange = (animation: CardAnimation) => {
    setCurrentAnimation(animation);
    onAnimationChange?.(family.id, animation);
  };

  const animationLabel = animationOptions.find((opt) => opt.value === currentAnimation)?.label || "Без анимации";

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${getAnimationClass(currentAnimation)}`}
    >
      <CardContent className="flex flex-col gap-3 p-4 flex-1">
        {/* Header: Avatar, Status, Mansion and Pro Badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="text-4xl flex-shrink-0">{family.image}</div>
          <div className="flex flex-col gap-2 items-end">
            {family.leaderProStatus && (
              <Badge className="pro-badge border-0 text-xs" title="Pro статус лидера">
                Pro
              </Badge>
            )}
            <Badge className={`${status.color} ${status.animation} border-0 text-xs`}>{status.label}</Badge>
            {family.hasMansion && (
              <div className={`flex items-center gap-1 text-xs font-medium`}>
                <Building2 className="size-3" />
                <span>Особняк</span>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <div className="space-y-0.5 flex-1">
          <h3 className="font-semibold text-sm line-clamp-1">{family.name}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2">{family.description}</p>
        </div>

        {/* Organization Type */}
        {family.organization && (
          <div className={`flex items-center gap-1 text-xs ${organizationConfig[family.organization].color}`}>
            <span>{organizationConfig[family.organization].icon}</span>
            <span className="font-medium">{organizationConfig[family.organization].label}</span>
          </div>
        )}

        {/* Stats */}
        <div className="flex gap-3 text-xs text-muted-foreground border-t pt-2">
          <div>👥 {family.members}</div>
          <div>
            📅
            {new Date(family.joinedDate).toLocaleDateString("ru-RU", {
              month: "2-digit",
              year: "2-digit",
            })}
          </div>
        </div>

        {/* Animation indicator for Pro users */}
        {family.leaderProStatus && currentAnimation !== "none" && (
          <div className="text-xs text-muted-foreground bg-secondary/50 rounded px-2 py-1 text-center">
            ✨ Анимация: {animationLabel}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          {/* Like Button */}
          <Button
            size="sm"
            variant={isLiked ? "default" : "outline"}
            className="flex-1 gap-1.5 h-8 text-xs transition-all duration-200"
            onClick={handleLike}
          >
            <Heart className={`size-3.5 ${isLiked ? "fill-current" : ""}`} />
            <span>{likes}</span>
          </Button>

          {/* Discord Button */}
          <Button
            size="sm"
            variant="outline"
            className="flex-1 gap-1.5 h-8 text-xs hover:bg-[#5865F2] hover:text-white transition-all duration-200"
            asChild
          >
            <a href="https://discord.gg" target="_blank" rel="noreferrer">
              <SimpleIcon icon={siDiscord} className="size-3.5" />
              <span>Discord</span>
            </a>
          </Button>

          {/* Animation Settings - Only for Pro users */}
          {family.leaderProStatus && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground transition-all"
                  title="Выбрать анимацию"
                >
                  <Settings className="size-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="text-xs">Выбрать анимацию</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {animationOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => handleAnimationChange(option.value)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{option.icon}</span>
                    <span className="text-xs">{option.label}</span>
                    {currentAnimation === option.value && <span className="ml-auto text-xs">✓</span>}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
