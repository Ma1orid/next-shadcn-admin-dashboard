import Link from "next/link";

import { siDiscord } from "simple-icons";

import { SimpleIcon } from "@/components/simple-icon";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SidebarSupportCard() {
  return (
    <Card size="sm" className="overflow-hidden shadow-none group-data-[collapsible=icon]:hidden">
      <CardHeader className="min-w-0 px-4">
        <CardTitle className="truncate text-sm">Нужна помощь?</CardTitle>
        <CardDescription className="line-clamp-2">
          Присоединитесь к нашему сообществу в&nbsp;
          <Link
            href="https://discord.gg"
            target="_blank"
            rel="noreferrer"
            aria-label="Присоединиться на Discord"
            className="inline-flex items-center text-foreground"
          >
            <SimpleIcon icon={siDiscord} aria-hidden className="size-3 fill-current" />
          </Link>
          .
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
