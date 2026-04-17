"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useWhatsApp } from "./WhatsAppModal";
import { useState, useRef, useEffect } from "react";

const transformations = [
  {
    title: "Funilaria e Pintura em L200",
    before: "/l200-antes.png",
    after: "/l200-depois.png",
    beforeAlt:
      "Antes - Funilaria e Pintura em L200 com danos na lataria - Alexandre Sato Manaus",
    afterAlt:
      "Depois - Funilaria e Pintura em L200 com acabamento perfeito - Alexandre Sato Manaus",
  },
  {
    title: "Troca de Tampa Traseira e Pintura - Onix",
    before: "/onix-antes.png",
    after: "/onix-depois.png",
    beforeAlt:
      "Antes - Troca de tampa traseira e funilaria do para-choque Onix - Alexandre Sato Manaus",
    afterAlt:
      "Depois - Tampa traseira e para-choque do Onix restaurados - Alexandre Sato Manaus",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function TransformationCard({ item }: { item: (typeof transformations)[number] }) {
  return (
    <div className="w-[85vw] flex-shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 bg-graphite p-5">
      <h3 className="mb-4 text-center text-lg font-bold text-white">
        {item.title}
      </h3>

      <div className="space-y-3">
        <div className="relative">
          <div className="absolute left-3 top-3 z-10 rounded-full bg-graphite-dark/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm">
            Antes
          </div>
          <div className="overflow-hidden rounded-xl">
            <Image
              src={item.before}
              alt={item.beforeAlt}
              width={600}
              height={600}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
            <ArrowRight className="h-4 w-4 rotate-90 text-accent" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Depois
          </div>
          <div className="overflow-hidden rounded-xl">
            <Image
              src={item.after}
              alt={item.afterAlt}
              width={600}
              height={600}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { openModal } = useWhatsApp();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.scrollWidth / transformations.length;
      setActiveIndex(Math.round(scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="resultados"
      className="bg-graphite-dark px-4 py-20 md:py-28"
      aria-label="Resultados de Funilaria e Pintura"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
          Resultados
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Veja a transformação real dos veículos que passam pela Alexandre Sato.
          Qualidade comprovada em cada detalhe de{" "}
          <strong className="text-white">Funilaria e Pintura</strong>,{" "}
          <strong className="text-white">Estética Automotiva</strong> e{" "}
          <strong className="text-white">Martelinho de Ouro</strong>.
        </p>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-4 pb-4 snap-x snap-mandatory"
          >
            {transformations.map((item) => (
              <TransformationCard key={item.title} item={item} />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {transformations.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para resultado ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === activeIndex
                  ? "w-6 bg-accent"
                  : "w-2 bg-white/30"
                  }`}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / transformations.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </div>

        {/* Desktop stacked */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="hidden space-y-16 md:block"
        >
          {transformations.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="overflow-hidden rounded-3xl border border-white/10 bg-graphite p-6 md:p-10"
            >
              <h3 className="mb-6 text-center text-lg font-bold text-white md:text-xl">
                {item.title}
              </h3>

              <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
                <div className="relative">
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-graphite-dark/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm">
                    Antes
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={item.before}
                      alt={item.beforeAlt}
                      width={600}
                      height={600}
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    Depois
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={item.after}
                      alt={item.afterAlt}
                      width={600}
                      height={600}
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-gray-400">
            Quer o mesmo resultado no seu veículo? Fale com a gente.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar orçamento gratuito
          </button>
        </motion.div>
      </div>
    </section>
  );
}
