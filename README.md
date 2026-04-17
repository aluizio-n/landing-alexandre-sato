# Alexandre Sato - Landing Page

Landing page para a **Alexandre Sato**, referência em **Martelinho de Ouro**, **Estética Automotiva** e **Funilaria e Pintura** em Manaus/AM.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** - animações e transições
- **Lucide React** - ícones

## Estrutura

```
app/
├── page.tsx                   # Página principal
├── layout.tsx                 # Layout com metadata e JSON-LD (SEO)
├── globals.css                # Paleta de cores e estilos globais
└── components/
    ├── Hero.tsx               # Seção principal com CTA
    ├── Services.tsx           # Serviços (Martelinho, Estética, Funilaria)
    ├── BeforeAfter.tsx        # Resultados antes/depois
    ├── Locations.tsx          # Unidades em Manaus
    ├── Footer.tsx             # Rodapé
    ├── WhatsAppButton.tsx     # Botão flutuante do WhatsApp
    └── WhatsAppModal.tsx      # Modal de seleção de unidade
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## SEO

- Metadata otimizada para as palavras-chave principais
- JSON-LD structured data (`AutoBodyShop`)
- Alt tags descritivas em todas as imagens
- HTML semântico com `aria-label`

## Deploy

A forma mais fácil de fazer deploy é pela [Vercel](https://vercel.com/new). Veja a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
