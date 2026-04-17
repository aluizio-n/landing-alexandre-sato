import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Alexandre Sato | Martelinho de Ouro, Estética Automotiva e Funilaria e Pintura em Manaus",
  description:
    "Alexandre Sato é referência em Martelinho de Ouro, Estética Automotiva e Funilaria e Pintura em Manaus. Qualidade premium, atendimento especializado e 3 unidades para melhor atendê-lo. Solicite seu orçamento!",
  keywords: [
    "Martelinho de Ouro",
    "Estética Automotiva",
    "Funilaria e Pintura",
    "Martelinho de Ouro Manaus",
    "Estética Automotiva Manaus",
    "Funilaria e Pintura Manaus",
    "Alexandre Sato",
    "reparo automotivo Manaus",
    "polimento automotivo Manaus",
    "pintura automotiva Manaus",
  ],
  openGraph: {
    title:
      "Alexandre Sato | Martelinho de Ouro, Estética Automotiva e Funilaria e Pintura em Manaus",
    description:
      "Referência em Martelinho de Ouro, Estética Automotiva e Funilaria e Pintura em Manaus. Qualidade premium e atendimento especializado.",
    url: "https://alexandresato.com.br",
    siteName: "Alexandre Sato",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://alexandresato.com.br",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Alexandre Sato",
  description:
    "Especialistas em Martelinho de Ouro, Estética Automotiva e Funilaria e Pintura em Manaus.",
  url: "https://alexandresato.com.br",
  telephone: "+5592000000000",
  areaServed: {
    "@type": "City",
    name: "Manaus",
    "@id": "https://www.wikidata.org/wiki/Q5765",
  },
  service: [
    {
      "@type": "Service",
      name: "Martelinho de Ouro",
      description:
        "Reparo de amassados sem comprometer a pintura original do veículo.",
    },
    {
      "@type": "Service",
      name: "Estética Automotiva",
      description:
        "Polimento, cristalização, higienização e revitalização completa do veículo.",
    },
    {
      "@type": "Service",
      name: "Funilaria e Pintura",
      description:
        "Serviços completos de funilaria e pintura automotiva com acabamento premium.",
    },
  ],
  department: [
    {
      "@type": "AutoBodyShop",
      name: "Alexandre Sato - Unidade Major Gabriel",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Maj. Gabriel, 1192",
        addressLocality: "Manaus",
        addressRegion: "AM",
        postalCode: "69020-405",
        addressCountry: "BR",
      },
    },
    {
      "@type": "AutoBodyShop",
      name: "Alexandre Sato - Unidade Umberto Calderaro",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Umberto Calderaro, 250 - São Francisco",
        addressLocality: "Manaus",
        addressRegion: "AM",
        postalCode: "69055-700",
        addressCountry: "BR",
      },
    },
    {
      "@type": "AutoBodyShop",
      name: "Alexandre Sato - Unidade V8",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Efigênio Salles, 276 - Aleixo",
        addressLocality: "Manaus",
        addressRegion: "AM",
        postalCode: "69060-020",
        addressCountry: "BR",
      },
    },
    {
      "@type": "AutoBodyShop",
      name: "Alexandre Sato - Unidade Max Teixeira",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Max Teixeira, 200 - Col. Santo Antônio",
        addressLocality: "Manaus",
        addressRegion: "AM",
        postalCode: "69058-415",
        addressCountry: "BR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
