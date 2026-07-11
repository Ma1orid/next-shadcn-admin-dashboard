import { siDiscord } from "simple-icons";

import { SimpleIcon } from "@/components/simple-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import styles from "../../auth.module.css";

export function DiscordButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button variant="secondary" className={cn(className, "transition-all duration-300 hover:scale-105")} {...props}>
      <SimpleIcon icon={siDiscord} className="size-4" />
      Войти через Discord
    </Button>
  );
}
