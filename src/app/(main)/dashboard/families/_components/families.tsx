"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { CardAnimation, Family } from "./data";
import { FamilyCard } from "./family-card";

interface FamiliesProps {
  families: Family[];
}

export function Families({ families: initialFamilies }: FamiliesProps) {
  const [search, setSearch] = useState("");
  const [families, setFamilies] = useState(initialFamilies);

  const filteredFamilies = families.filter(
    (family) =>
      family.name.toLowerCase().includes(search.toLowerCase()) ||
      family.description.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAnimationChange = (familyId: string, animation: CardAnimation) => {
    setFamilies(families.map((family) => (family.id === familyId ? { ...family, cardAnimation: animation } : family)));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Все семьи</h1>
          <p className="text-muted-foreground">Управляйте командами и семьями. Всего семей: {families.length}</p>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск семей..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="whitespace-nowrap">+ Новая семья</Button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredFamilies.length > 0 ? (
          filteredFamilies.map((family) => (
            <FamilyCard key={family.id} family={family} onAnimationChange={handleAnimationChange} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
            <p className="text-muted-foreground text-lg">Семьи не найдены</p>
            <p className="text-sm text-muted-foreground">Попробуйте изменить поисковый запрос</p>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Всего семей</p>
          <p className="text-3xl font-bold">{families.length}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Активные</p>
          <p className="text-3xl font-bold text-green-600">{families.filter((f) => f.status === "active").length}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Pro лидеры</p>
          <p className="text-3xl font-bold text-amber-600">{families.filter((f) => f.leaderProStatus).length}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Всего участников</p>
          <p className="text-3xl font-bold">{families.reduce((sum, f) => sum + f.members, 0)}</p>
        </div>
      </div>
    </div>
  );
}
