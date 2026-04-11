"use client";

import { motion } from "framer-motion";
import { MessageCircle, Hammer, Sparkles, PaintBucket } from "lucide-react";
import { useWhatsApp } from "./WhatsAppModal";

const services = [
  {
    title: "Martelinho de Ouro",
    icon: Hammer,
    videoId: "VIDEO_ID_MARTELINHO",
    description:
      "Nosso serviço de Martelinho de Ouro em Manaus remove amassados, mossas e deformações da lataria do seu veículo sem comprometer a pintura original. Com técnicas avançadas e profissionais altamente qualificados, a Alexandre Sato garante um resultado perfeito, preservando o valor e a estética do seu carro.",
    cta: "Orçamento Martelinho de Ouro",
  },
  {
    title: "Estética Automotiva",
    icon: Sparkles,
    videoId: "VIDEO_ID_ESTETICA",
    description:
      "A Estética Automotiva da Alexandre Sato em Manaus oferece polimento técnico, cristalização de pintura, higienização interna completa e revitalização de plásticos. Devolvemos o brilho e a aparência de zero quilômetro ao seu veículo, utilizando produtos premium e técnicas profissionais.",
    cta: "Orçamento Estética Automotiva",
  },
  {
    title: "Funilaria e Pintura",
    icon: PaintBucket,
    videoId: "VIDEO_ID_FUNILARIA",
    description:
      "O serviço de Funilaria e Pintura da Alexandre Sato em Manaus é referência em qualidade e acabamento. Realizamos reparos estruturais, alinhamento de painéis e pintura automotiva com cabine de pintura profissional, garantindo a cor exata e um acabamento impecável para o seu veículo.",
    cta: "Orçamento Funilaria e Pintura",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function Services() {
  const { openModal } = useWhatsApp();

  return (
    <section
      id="servicos"
      className="bg-graphite px-4 py-20 md:py-28"
      aria-label="Serviços especializados"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
          Nossos Serviços{" "}
          <span className="text-accent">Especializados</span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Cada serviço é executado por profissionais experientes, com
          equipamentos de última geração e dedicação total ao seu veículo.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-graphite-light transition-colors hover:border-accent/30"
              >
                {/* Video placeholder */}
                <div className="relative aspect-video w-full bg-graphite-dark">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${service.videoId}`}
                    title={`Vídeo do serviço de ${service.title} - Alexandre Sato`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>

                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-light"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {service.cta}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
