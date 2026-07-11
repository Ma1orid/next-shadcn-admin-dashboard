"use client";

import { Calendar, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import type { Family } from "./data";

interface FamilyCardProps {
  family: Family;
}

export function FamilyCard({ family }: FamilyCardProps) {
  const joinDate = new Date(family.joinedDate);
  const formattedDate = joinDate.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      {/* Background gradient */}
      <div className={`h-24 bg-gradient-to-r ${family.color} opacity-80 transition-opacity group-hover:opacity-100`} />

      <CardHeader className="pb-3 pt-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="text-4xl mb-2">{family.image}</div>
            <CardTitle className="text-xl">{family.name}</CardTitle>
            <CardDescription className="text-base">{family.description}</CardDescription>
          </div>
          <Badge variant="secondary" className="whitespace-nowrap">
            ID: {family.id}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Users className="size-4 text-muted-foreground" />
            <span>{family.members} участников</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="size-4 text-muted-foreground" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1">
            Открыть
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
