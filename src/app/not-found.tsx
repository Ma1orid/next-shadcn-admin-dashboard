"use client";

import Link from "next/link";

import { AlertCircle, Home, LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div
      className={`relative flex h-dvh flex-col items-center justify-center overflow-hidden p-4 text-center ${styles.container}`}
    >
      {/* Animated background orbs */}
      <div className={`${styles.orb} ${styles.orb1} bg-primary`} />
      <div className={`${styles.orb} ${styles.orb2} bg-destructive`} />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className={`rounded-full bg-destructive/10 p-6 ${styles.icon}`}>
            <AlertCircle className="size-20 text-destructive" />
          </div>
        </div>

        {/* Title */}
        <div className={`space-y-2 ${styles.title}`}>
          <h1 className="font-black text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-destructive to-destructive/50">
            404
          </h1>
          <h2 className={`font-bold text-2xl md:text-3xl ${styles.subtitle}`}>Страница не найдена</h2>
        </div>

        {/* Description */}
        <p
          className={`text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed ${styles.description}`}
        >
          К сожалению, страница, которую вы ищете, не существует или была удалена. Проверьте адрес и попробуйте снова.
        </p>

        {/* Buttons */}
        <div className={`flex flex-col gap-3 sm:flex-row justify-center pt-4 ${styles.buttons}`}>
          <Link prefetch={false} replace href="/dashboard/default">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Home className="size-4" />
              Вернуться на главную
            </Button>
          </Link>
          <Link prefetch={false} href="/auth/login">
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
              <LogIn className="size-4" />
              Перейти на вход
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className={`pt-8 border-t border-border/50 ${styles.footer}`}>
          <p className="text-xs text-muted-foreground">Если вы считаете, что это ошибка, свяжитесь с нами в Discord</p>
        </div>
      </div>
    </div>
  );
}
