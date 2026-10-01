"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import { sections } from "@/constants/sections";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_auto] items-center gap-x-2 px-[max(1rem,calc((100%-980px)/2))] text-xs backdrop-blur backdrop-saturate-150 select-none sm:grid-cols-[1fr_auto_1fr]">
      <Link
        href="/"
        onClick={() => setOpen(false)}
        className="flex h-11 w-fit items-center text-sm font-semibold uppercase tracking-tight text-primary"
      >
        {company.brand}
      </Link>

      <nav
        id="menu"
        className={cn(
          "col-span-full row-start-2 flex-col pt-2 pb-6",
          "sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex sm:flex-row sm:gap-8 sm:p-0",
          open ? "flex" : "hidden",
        )}
      >
        {sections.map((s) => (
          <Link
            key={s.id}
            href={`#${s.id}`}
            onClick={() => setOpen(false)}
            className="py-2 text-2xl font-semibold text-foreground/80 transition-colors hover:text-foreground sm:py-0 sm:text-xs sm:font-normal"
          >
            {s.label}
          </Link>
        ))}
      </nav>

      <Button
        size="xs"
        className="rounded-full px-3 sm:justify-self-end"
        nativeButton={false}
        render={<a href={company.whatsapp} target="_blank" rel="noopener noreferrer" />}
      >
        <MessageCircle /> Entre em contato
      </Button>

      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen((o) => !o)}
        className="grid size-8 place-items-center text-foreground/80 sm:hidden"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>
    </header>
  );
}
