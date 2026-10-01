import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Armchair,
  AtSign,
  Brain,
  ChevronRight,
  Ear,
  FileCheck,
  FileSearch,
  FileText,
  Gauge,
  GraduationCap,
  HandHeart,
  HardHat,
  HeartPulse,
  IdCard,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Repeat,
  RotateCcw,
  Send,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  UserMinus,
  UserPlus,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Footer } from "@/components/footer";
import { company, mapEmbedUrl } from "@/constants/company";
import { cn } from "@/lib/utils";
import { Background } from "@/components/background";

const section =
  "flex min-h-dvh snap-start flex-col justify-center px-[max(1.5rem,calc((100%-980px)/2))] py-20 md:snap-always";

type Service = { icon: LucideIcon; title: string; text: string };

const serviceTabs: { value: string; label: string; items: Service[] }[] = [
  {
    value: "ocupacionais",
    label: "Ocupacionais",
    items: [
      {
        icon: UserPlus,
        title: "Admissional",
        text: "Antes do início das atividades, para confirmar a aptidão do colaborador para a função.",
      },
      {
        icon: UserCheck,
        title: "Periódico",
        text: "Acompanhamento regular da saúde, na frequência definida pelo PCMSO.",
      },
      {
        icon: RotateCcw,
        title: "Retorno ao trabalho",
        text: "Depois de um afastamento, antes de o colaborador retomar as atividades.",
      },
      {
        icon: Repeat,
        title: "Mudança de risco",
        text: "Quando a nova função expõe o colaborador a riscos ocupacionais diferentes.",
      },
      {
        icon: UserMinus,
        title: "Demissional",
        text: "Na saída do colaborador, encerrando o acompanhamento de saúde ocupacional.",
      },
      {
        icon: Stethoscope,
        title: "Consultas",
        text: "Atendimento clínico ambulatorial para avaliar e orientar a saúde de cada colaborador.",
      },
    ],
  },
  {
    value: "complementares",
    label: "Complementares",
    items: [
      {
        icon: Ear,
        title: "Audiometria",
        text: "Avalia a audição de quem trabalha exposto a ruído.",
      },
      {
        icon: Wind,
        title: "Espirometria",
        text: "Mede a função pulmonar, indicada para exposição a poeiras e agentes químicos.",
      },
      {
        icon: HeartPulse,
        title: "Eletrocardiograma",
        text: "ECG, muito pedido para trabalho em altura, espaço confinado e direção.",
      },
      {
        icon: Brain,
        title: "Eletroencefalograma",
        text: "EEG, comum em funções com trabalho em altura e operação de máquinas.",
      },
      {
        icon: Activity,
        title: "Holter",
        text: "Registra o ritmo cardíaco por 24 horas, durante a rotina normal.",
      },
      {
        icon: Gauge,
        title: "MAPA 24h",
        text: "Monitora a pressão arterial ao longo de um dia inteiro.",
      },
    ],
  },
  {
    value: "laudos",
    label: "Laudos",
    items: [
      {
        icon: FileText,
        title: "PCMSO",
        text: "Programa de Controle Médico de Saúde Ocupacional, conforme a NR-7.",
      },
      {
        icon: ShieldCheck,
        title: "PGR",
        text: "Programa de Gerenciamento de Riscos, que identifica e controla os riscos do ambiente.",
      },
      {
        icon: FileCheck,
        title: "LTCAT",
        text: "Laudo Técnico das Condições Ambientais do Trabalho, base para a aposentadoria especial.",
      },
      {
        icon: IdCard,
        title: "PPP",
        text: "Perfil Profissiográfico Previdenciário, com o histórico de exposição de cada colaborador.",
      },
      {
        icon: Armchair,
        title: "Laudo ergonômico (AET)",
        text: "Análise Ergonômica do Trabalho, conforme a NR-17.",
      },
      {
        icon: FileSearch,
        title: "Perícia técnica",
        text: "Perícias e laudos em segurança do trabalho, com análise de cada ambiente e função.",
      },
    ],
  },
];

const benefits: (Service & { featured?: boolean; logo?: string })[] = [
  {
    icon: HardHat,
    title: "Parceria com a LopesSeg",
    text: "Medicina e segurança do trabalho caminhando juntas, para sua empresa cuidar das duas frentes com quem já conhece a sua realidade.",
    featured: true,
  },
  {
    icon: HandHeart,
    title: "Convênio Medprev",
    text: "Temos convênio com a Medprev.",
    logo: "/images/medprev.png",
  },
  {
    icon: Send,
    title: "eSocial em dia",
    text: "Envio dos eventos de SST sem dor de cabeça para o seu RH.",
    logo: "/images/esocial.png",
  },
  {
    icon: Stethoscope,
    title: "Médicos do trabalho",
    text: "Atendimento feito por especialistas em saúde ocupacional.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    text: "Capacitação para sua equipe trabalhar com mais saúde e segurança.",
  },
];

const contacts = [
  ...company.whatsappNumbers.map((w) => ({
    icon: MessageCircle,
    title: "WhatsApp",
    text: w.display,
    href: w.href,
    external: true,
  })),
  {
    icon: Mail,
    title: "E-mail",
    text: company.email,
    href: `mailto:${company.email}`,
    external: false,
  },
  {
    icon: MapPin,
    title: "Endereço",
    text: `${company.address.street}, ${company.address.district}, ${company.address.city}/${company.address.state}`,
    href: undefined,
    external: false,
  },
];

const json = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "LopesMed",
  legalName: company.legalName,
  taxID: company.cnpj,
  telephone: company.phone.schema,
  email: company.email,
  sameAs: [company.instagram.href],
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: "BR",
  },
};

function WhatsAppButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      className="rounded-full px-5 shadow-lg shadow-primary/25"
      nativeButton={false}
      render={<a href={company.whatsapp} target="_blank" rel="noopener noreferrer" />}
    >
      {children}
    </Button>
  );
}

export default function Home() {
  return (
    <main className="h-dvh snap-y snap-proximity overflow-y-auto overscroll-y-contain scroll-smooth md:snap-mandatory motion-reduce:scroll-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(json).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section
        id="about"
        className={cn(section, "relative isolate items-center overflow-hidden bg-background text-center")}
      >
        <Background />

        <h1 className="mt-5 max-w-3xl bg-linear-to-b from-foreground to-foreground/70 bg-clip-text pb-1 text-5xl font-semibold tracking-tight text-balance text-transparent md:text-6xl">
          Cuidar de quem faz a sua empresa funcionar.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-muted-foreground">
          Saúde, segurança e medicina do trabalho. Exames ocupacionais e complementares, programas e laudos, tudo em um
          só lugar.
        </p>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <WhatsAppButton>Agendar exames</WhatsAppButton>
          <Link href="#services" className="flex items-center text-sm text-primary hover:underline">
            Ver serviços <ChevronRight className="size-4" />
          </Link>
        </p>
      </section>

      {/* Serviços */}
      <section id="services" className={cn(section, "bg-muted")}>
        <h2 className="text-4xl font-semibold tracking-tight text-balance">Do admissional ao demissional.</h2>
        <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
          Tudo o que sua equipe precisa para trabalhar com saúde, e sua empresa para ficar em dia com as normas.
        </p>

        <Tabs defaultValue={serviceTabs[0].value} className="mt-10 gap-6">
          <TabsList className="h-10 w-full rounded-full p-1 sm:w-fit">
            {serviceTabs.map(({ value, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex-1 rounded-full px-4 text-xs sm:flex-none sm:text-sm"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceTabs.map(({ value, items }) => (
            <TabsContent key={value} value={value}>
              <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {items.map(({ icon: Icon, title, text }) => (
                  <li key={title}>
                    <Card className="h-full">
                      <CardHeader className="space-y-2">
                        <CardTitle className="flex flex-row items-center justify-between gap-3">
                          {title}
                          <Icon className="size-6 shrink-0 text-primary" />
                        </CardTitle>
                        <CardDescription>{text}</CardDescription>
                      </CardHeader>
                    </Card>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Diferenciais */}
      <section id="benefits" className={cn(section, "bg-muted")}>
        <h2 className="text-4xl font-semibold tracking-tight text-balance">Saúde e segurança, lado a lado.</h2>
        <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
          Mais do que exames: um parceiro para manter sua empresa protegida e sua equipe bem cuidada.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text, featured, logo }) => (
            <li key={title} className={cn(featured && "-order-2 sm:col-span-2")}>
              <Card
                className={cn(
                  "h-full",
                  featured && "relative isolate overflow-hidden border-0 bg-primary text-primary-foreground",
                )}
              >
                {featured && (
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-16 -z-10 size-56 rounded-full bg-lime-300/30 blur-3xl"
                  />
                )}
                <CardHeader className="space-y-2">
                  {logo ? (
                    <div className="relative h-11 w-28 overflow-hidden rounded-2xl">
                      <Image src={logo} alt={title} fill sizes="112px" className="object-contain" />
                    </div>
                  ) : (
                    <span
                      className={cn(
                        "mb-2 flex size-11 items-center justify-center rounded-2xl",
                        featured ? "bg-primary-foreground/15" : "bg-primary/10",
                      )}
                    >
                      <Icon className={cn("size-5", featured ? "text-primary-foreground" : "text-primary")} />
                    </span>
                  )}
                  <CardTitle className={cn(featured && "text-2xl")}>{title}</CardTitle>
                  <CardDescription className={cn(featured && "max-w-md text-primary-foreground/80")}>
                    {text}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}

          {/* Parceria SudoMed: ao lado da LopesSeg, na primeira linha */}
          <li className="-order-1 sm:col-span-2">
            <Card className="h-full">
              <CardHeader className="space-y-2">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="relative h-11 w-36 overflow-hidden rounded-2xl bg-white">
                    <Image
                      src="/images/sudomed.png"
                      alt="SudoMed Segurança no Trabalho"
                      fill
                      sizes="144px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    Parceria
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Parceria com a SudoMed</CardTitle>
                <CardDescription className="max-w-md">
                  Contamos com a parceria da SudoMed, especialista em segurança no trabalho, para reforçar nosso suporte
                  em laudos técnicos e programas.
                </CardDescription>
              </CardHeader>
            </Card>
          </li>
        </ul>
      </section>

      {/* Contato */}
      <section
        id="contact"
        className={cn(section, "grid content-center gap-10 bg-background md:grid-cols-2 md:items-center")}
      >
        <header>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Vamos conversar.</h2>
          <p className="mt-3 max-w-md text-pretty text-muted-foreground">
            Agende exames para sua equipe ou tire dúvidas sobre PCMSO e laudos. Atendemos pelo WhatsApp, por telefone ou
            pessoalmente.
          </p>
          <p className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton>
              <MessageCircle /> WhatsApp
            </WhatsAppButton>
            <Button
              variant="outline"
              className="rounded-full px-5"
              nativeButton={false}
              render={<a href={company.phone.href} />}
            >
              <Phone /> {company.phone.display}
            </Button>
          </p>

          <Separator className="my-8" />

          <ItemGroup className="max-w-md gap-1">
            {contacts.map(({ icon: Icon, title, text, href, external }) => (
              <Item
                key={`${title}-${text}`}
                size="sm"
                className="rounded-2xl px-2 has-[a]:hover:bg-background"
                {...(href && {
                  render: (
                    <a
                      href={href}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    />
                  ),
                })}
              >
                <ItemMedia variant="icon" className="rounded-xl">
                  <Icon />
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle>{title}</ItemTitle>
                  <ItemDescription className="wrap-break-word">{text}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
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
