import { Globe } from "lucide-react";

import { APP_CONFIG } from "@/config/app-config";

import { DiscordButton } from "../_components/social-auth/discord-button";
import styles from "../auth.module.css";

export default function LoginV2() {
  return (
    <>
      <div className={`mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px] ${styles.loginForm}`}>
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Добро пожаловать
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">Войдите в UPCNTRL через ваш аккаунт Discord</p>
        </div>
        <div className="space-y-4">
          <DiscordButton className="w-full" />
        </div>
      </div>

      <div className="absolute bottom-5 flex w-full justify-between px-10">
        <div className="text-sm">{APP_CONFIG.copyright}</div>
        <div className="flex items-center gap-1 text-sm">
          <Globe className="size-4 text-muted-foreground" />
          РУ
        </div>
      </div>
    </>
  );
}
