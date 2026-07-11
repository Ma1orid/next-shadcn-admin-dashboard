"use client";

import Link from "next/link";

import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center space-y-6 bg-gradient-to-br from-background via-background to-muted p-4 text-center">
      <div className="space-y-2">
        <div className="flex justify-center">
          <AlertCircle className="size-20 text-destructive/80" />
        </div>
        <h1 className="font-bold text-4xl md:text-5xl">404</h1>
        <h2 className="font-semibold text-xl md:text-2xl">Страница не найдена</h2>
      </div>

      <p className="text-muted-foreground text-base md:text-lg max-w-md">
        К сожалению, страница, которую вы ищете, не существует или была удалена. Вернитесь на главную страницу.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link prefetch={false} replace href="/dashboard/default">
          <Button size="lg" className="w-full sm:w-auto">
            Вернуться на главную
          </Button>
        </Link>
        <Link prefetch={false} href="/auth/login">
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Перейти на вход
          </Button>
        </Link>
      </div>

      <div className="pt-8 text-xs text-muted-foreground">
        Если вы считаете, что это ошибка, свяжитесь с нами в Discord
      </div>
    </div>
  );
}
