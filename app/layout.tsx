import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Checklist Express para IPS | VALIDANDO",
  description: "Evalúa en menos de 3 minutos si tu IPS está preparada para una visita de habilitación.",
  icons: {
    icon: "/logo-validando.svg",
    shortcut: "/logo-validando.svg",
    apple: "/logo-validando.svg",
  },
  openGraph: {
    title: "Checklist Express para IPS | VALIDANDO",
    description: "Evalúa en menos de 3 minutos si tu IPS está preparada para una visita de habilitación.",
    images: [{ url: "/logo-validando.svg", alt: "VALIDANDO" }],
  },
  twitter: {
    card: "summary",
    title: "Checklist Express para IPS | VALIDANDO",
    description: "Evalúa en menos de 3 minutos si tu IPS está preparada para una visita de habilitación.",
    images: ["/logo-validando.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
