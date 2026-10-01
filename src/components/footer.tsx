import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { sections } from "@/constants/sections";
import { company } from "@/constants/company";

export function Footer() {
  const { address } = company;

  return (
    <footer className="snap-end grid gap-x-8 gap-y-8 bg-muted px-[max(1rem,calc((100%-980px)/2))] pt-10 pb-5 text-xs leading-5 text-muted-foreground sm:grid-cols-3">
      <nav aria-label="Rodapé" className="flex flex-col gap-2">
        <h2 className="font-semibold text-foreground">Navegação</h2>
        {sections.map((s) => (
          <Link key={s.id} href={`#${s.id}`} className="w-fit hover:underline">
            {s.title}
          </Link>
        ))}
      </nav>

      <address className="flex flex-col gap-2 not-italic">
        <span className="font-semibold text-foreground">Contato</span>
        <a
          href={company.phone.href}
          className="flex w-fit items-center gap-1.5 hover:underline"
        >
          <Phone className="size-3" />
          {company.phone.display}
        </a>
        <a
          href={`mailto:${company.email}`}
          className="flex w-fit items-center gap-1.5 hover:underline"
        >
          <Mail className="size-3" />
          {company.email}
        </a>
        <span className="flex gap-1.5">
          <MapPin className="mt-1 size-3 shrink-0" />
          <span>
            {address.street}
            <br />
            {address.district}, {address.city}/{address.state}, {address.zip}
          </span>
        </span>
      </address>

      <p className="flex flex-col gap-2">
        <Link
          href="/"
          className="w-fit text-sm font-semibold uppercase tracking-tight text-primary"
        >
          {company.brand}
        </Link>
        Saúde, segurança e medicina do trabalho
      </p>

      <p className="flex flex-col gap-1 border-t border-border pt-4 sm:col-span-full md:flex-row md:justify-between">
        <span>
          Copyright © {new Date().getFullYear()} {company.legalName}.
        </span>
        <span>
          CNPJ {company.cnpj}
          {/* · Diretor técnico: {company.technicalDirector} */}
        </span>
      </p>
    </footer>
  );
}
