"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Hammer, Sparkles, PaintBucket } from "lucide-react";
import { useWhatsApp } from "./WhatsAppModal";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    title: "Martelinho de Ouro",
    icon: Hammer,
    image: "/carro2.jpg",
    imageAlt:
      "Resultado de Martelinho de Ouro - BMW azul com acabamento acetinado perfeito - Alexandre Sato Manaus",
    description:
      "Nosso serviço de Martelinho de Ouro em Manaus remove amassados, mossas e deformações da lataria do seu veículo sem comprometer a pintura original. Com técnicas avançadas e profissionais altamente qualificados, a Alexandre Sato garante um resultado perfeito, preservando o valor e a estética do seu carro.",
    cta: "Orçamento Martelinho de Ouro",
  },
  {
    title: "Estética Automotiva",
    icon: Sparkles,
    image: "/carro1.jpg",
    imageAlt:
      "Estética Automotiva premium - pintura vermelho com efeito escuro em Fusca - Alexandre Sato Manaus",
    description:
      "A Estética Automotiva da Alexandre Sato em Manaus oferece polimento técnico, cristalização de pintura, higienização interna completa e revitalização de plásticos. Devolvemos o brilho e a aparência de zero quilômetro ao seu veículo, utilizando produtos premium e técnicas profissionais.",
    cta: "Orçamento Estética Automotiva",
  },
  {
    title: "Funilaria e Pintura",
    icon: PaintBucket,
    image: "/carro3.jpg",
    imageAlt:
      "Funilaria e Pintura - acabamento roxo metálico em carro clássico - Alexandre Sato Manaus",
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

function ServiceCard({
  service,
  i,
  openModal,
}: {
  service: (typeof services)[number];
  i: number;
  openModal: () => void;
}) {
  const Icon = service.icon;
  return (
    <motion.article
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className="group w-[85vw] flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-graphite-light transition-colors hover:border-accent/30 md:w-auto"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-graphite-dark">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 85vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-light via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
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
}

export default function Services() {
  const { openModal } = useWhatsApp();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.scrollWidth / services.length;
      setActiveIndex(Math.round(scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-4 pb-4 snap-x snap-mandatory"
          >
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                i={i}
                openModal={openModal}
              />
            ))}
          </div>
          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para serviço ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-6 bg-accent"
                    : "w-2 bg-white/30"
                }`}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / services.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden gap-10 md:grid md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              i={i}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
