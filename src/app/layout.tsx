import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://storgecare.com.br";
const siteName = "StorgeCare";
const siteTitle = "StorgeCare | Saúde domiciliar com cuidado humanizado em Belém";
const siteDescription = "A StorgeCare conecta você a serviços de saúde domiciliar com atendimento humanizado, segurança e agilidade em Belém e região metropolitana.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | StorgeCare",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "StorgeCare",
    "saude domiciliar",
    "atendimento domiciliar",
    "enfermagem domiciliar",
    "cuidador domiciliar",
    "fisioterapia domiciliar",
    "Belém",
    "região metropolitana de Belém",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "healthcare",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/assets/photos/hero.jpg",
        width: 1200,
        height: 630,
        alt: "StorgeCare oferecendo atendimento domiciliar humanizado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/photos/hero.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || process.env.NEXT_PUBLIC_GTM_ID || "AW-17990509984";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GTM_ID}');
              `}
          </Script>
        </>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
