import type { ReactNode } from "react";

import { Zap } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { APP_CONFIG } from "@/config/app-config";

import styles from "./auth.module.css";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main>
      <div className="grid h-dvh justify-center p-2 lg:grid-cols-2">
        <div className="relative order-2 hidden h-full rounded-3xl bg-gradient-to-br from-primary to-primary/80 lg:flex overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-40 h-40 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className={`absolute top-10 space-y-3 px-10 text-primary-foreground ${styles.logoContainer}`}>
              <div className={styles.logo}>
                <Zap className="size-12 text-primary-foreground" />
              </div>
              <div>
                <h1 className={`font-black text-4xl ${styles.heading}`}>UPCNTRL</h1>
                <p className={`text-sm text-primary-foreground/80 ${styles.subheading}`}>Управление вашим успехом</p>
              </div>
            </div>

            <div className={`absolute bottom-10 flex w-full justify-between px-10 ${styles.infoBlock}`}>
              <div className="flex-1 space-y-2 text-primary-foreground">
                <h2 className="font-semibold text-lg">Готовы начать?</h2>
                <p className="text-sm opacity-90">
                  Войдите через Discord и получите доступ ко всем возможностям платформы.
                </p>
              </div>
              <Separator orientation="vertical" className="mx-3 h-auto bg-primary-foreground/30" />
              <div className="flex-1 space-y-2 text-primary-foreground">
                <h2 className="font-semibold text-lg">Нужна помощь?</h2>
                <p className="text-sm opacity-90">
                  Присоединитесь к нашему сообществу в Discord, где вас ждет полная поддержка.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative order-1 flex h-full ${styles.loginForm}`}>{children}</div>
      </div>
    </main>
  );
}
