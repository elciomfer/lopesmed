import Link from "next/link";
import {
  ChevronRight,
  ClipboardCheck,
  FileSearch,
  FileText,
  HeartPulse,
  MessageCircle,
  Phone,
  Send,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { company, mapEmbedUrl } from "@/constants/company";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Background } from "@/components/background";

const section =
  "flex min-h-dvh snap-start snap-always flex-col justify-center px-[max(1.5rem,calc((100%-980px)/2))]";

const services = [
  {
    icon: ClipboardCheck,
    title: "Exames ocupacionais",
    text: "ASO admissional, periódico, de retorno ao trabalho, de mudança de função e demissional.",
  },
  {
    icon: FileText,
    title: "PCMSO",
    text: "Programa de Controle Médico de Saúde Ocupacional elaborado e acompanhado conforme a NR-7.",
  },
  {
    icon: Stethoscope,
    title: "Consultas",
    text: "Atendimento clínico ambulatorial para avaliar e orientar a saúde de cada colaborador.",
  },
  {
    icon: HeartPulse,
    title: "ECG e EEG",
    text: "Eletrocardiograma e eletroencefalograma, muito pedidos para trabalho em altura e direção.",
  },
  {
    icon: FileSearch,
    title: "Perícia técnica",
    text: "Perícias e laudos em segurança do trabalho, com análise de cada ambiente e função.",
  },
  {
    icon: Send,
    title: "eSocial",
    text: "Envio dos eventos de saúde e segurança do trabalho, sem dor de cabeça para o seu RH.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "LopesMed",
  legalName: company.legalName,
  taxID: company.cnpj,
  telephone: company.phone.schema,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: "BR",
  },
};

export default function Home() {
  return (
    <main className="h-dvh snap-y snap-mandatory overflow-y-auto overscroll-y-contain scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section
        id="about"
        className={cn(
          section,
          "relative isolate items-center overflow-hidden bg-background text-center",
        )}
      >
        <Background />

        <h1 className="mt-3 max-w-3xl bg-linear-to-b from-foreground to-foreground/70 bg-clip-text pb-1 text-5xl font-semibold tracking-tight text-balance md:text-6xl">
          Cuidar de quem faz a sua empresa funcionar.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-muted-foreground">
          Exames ocupacionais, consultas e laudos de segurança do trabalho. Tudo
          em um só lugar.
        </p>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Button
            className="rounded-full px-5 shadow-lg shadow-primary/25"
            nativeButton={false}
            render={
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Agendar exames
          </Button>
          <Link
            href="#services"
            className="flex items-center text-sm text-primary hover:underline"
          >
            Ver serviços <ChevronRight className="size-4" />
          </Link>
        </p>
      </section>

      <section id="services" className={cn(section, "bg-muted")}>
        <h2 className="text-4xl font-semibold tracking-tight text-balance">
          Do admissional ao demissional.
        </h2>
        <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
          Tudo o que sua equipe precisa para trabalhar com saúde, e sua empresa
          para ficar em dia com as normas.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Card className="h-full">
                <CardHeader className="space-y-2">
                  <CardTitle className="flex flex-row items-center justify-between">
                    {title}
                    <Icon className="size-6 text-primary" />
                  </CardTitle>
                  <CardDescription>{text}</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contact"
        className={cn(
          section,
          "grid content-center gap-10 bg-background md:grid-cols-2 md:items-center",
        )}
      >
        <header>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Vamos conversar.
          </h2>
          <p className="mt-3 max-w-md text-pretty text-muted-foreground">
            Agende exames para sua equipe ou tire dúvidas sobre PCMSO e laudos.
            Atendemos pelo WhatsApp, por telefone ou pessoalmente.
          </p>
          <p className="mt-8 flex flex-wrap gap-3">
            <Button
              className="rounded-full px-5"
              nativeButton={false}
              render={
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle /> WhatsApp
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-5"
              nativeButton={false}
              render={<a href={company.phone.href} />}
            >
              <Phone /> {company.phone.display}
            </Button>
          </p>
        </header>

        <iframe
          title={`Mapa: ${company.address.street}, ${company.address.district}, ${company.address.city}/${company.address.state}`}
          src={mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-4/3 w-full rounded-3xl border-0 md:aspect-4.75/5"
        />
      </section>

      <Footer />
    </main>
  );
}
