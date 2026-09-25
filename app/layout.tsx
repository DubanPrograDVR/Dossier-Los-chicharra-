import type { Metadata, Viewport } from "next"
import { Anton, Figtree } from "next/font/google"
import "./globals.css"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
})

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
})

const siteUrl = "https://dossier-los-chicharra.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Los Chicharra — Rock Chicharra desde Molina",
  description:
    "Los Chicharra: banda de Molina, Chile. Punk rock, rock alternativo, blues rock y balada rock fusionados en un sonido propio: Rock Chicharra. Escucha nuestro repertorio y sigue el ruido.",
  keywords: [
    "Los Chicharra",
    "Rock Chicharra",
    "Molina",
    "Chile",
    "punk rock",
    "rock alternativo",
    "blues rock",
    "banda",
  ],
  authors: [{ name: "Los Chicharra" }],
  openGraph: {
    title: "Los Chicharra — Rock Chicharra desde Molina",
    description:
      "Ruido crudo, identidad propia y canciones hechas para sonar fuerte. Rock Chicharra desde Molina, Chile.",
    url: siteUrl,
    siteName: "Los Chicharra",
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: "/img/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${anton.variable} ${figtree.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
