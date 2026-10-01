import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "LopesMed | Medicina do Trabalho em Rio Negrinho/SC",
  description:
    "Exames ocupacionais, PCMSO, consultas, ECG, EEG e perícias em segurança do trabalho no Ceramarte, em Rio Negrinho/SC.",
  openGraph: {
    title: "LopesMed | Medicina do Trabalho em Rio Negrinho/SC",
    description:
      "Exames ocupacionais, consultas e laudos de segurança do trabalho em um só lugar.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn("h-full antialiased", inter.variable)}>
      <body className="h-full font-sans selection:bg-primary selection:text-muted">
        <Header />
        {children}
      </body>
    </html>
  );
}
