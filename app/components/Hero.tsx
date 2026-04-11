"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Shield, Award, Clock } from "lucide-react";
import { useWhatsApp } from "./WhatsAppModal";

const stats = [
  { icon: Award, label: "Anos de Experiência", value: "15+" },
  { icon: Shield, label: "Clientes Atendidos", value: "10.000+" },
  { icon: Clock, label: "Unidades em Manaus", value: "3" },
];

export default function Hero() {
  const { openModal } = useWhatsApp();

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-graphite-dark"
      aria-label="Apresentação Alexandre Sato"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(198,40,40,0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(198,40,40,0.05)_0%,_transparent_40%)]" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      </div>

      {/* Top bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-5 md:px-12"
      >
        <Image
          src="/logo.jpg"
          alt="Alexandre Sato"
          width={56}
          height={56}
          priority
          className="rounded-lg"
        />
        <div className="flex items-center gap-4">
          <a
            href="#servicos"
            className="hidden text-sm text-gray-400 transition-colors hover:text-white md:block"
          >
            Serviços
          </a>
          <a
            href="#unidades"
            className="hidden text-sm text-gray-400 transition-colors hover:text-white md:block"
          >
            Unidades
          </a>
          <button
            onClick={openModal}
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Orçamento</span>
          </button>
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center px-6 md:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Referência em Manaus
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Especialistas em{" "}
              <span className="relative inline-block text-accent">
                Martelinho de Ouro
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent/40" />
              </span>
              ,{" "}
              <span className="relative inline-block text-accent">
                Estética Automotiva
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent/40" />
              </span>{" "}
              e{" "}
              <span className="relative inline-block text-accent">
                Funilaria e Pintura
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent/40" />
              </span>{" "}
              em Manaus
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-8 max-w-lg text-lg leading-relaxed text-gray-400"
            >
              Tradição, qualidade e resultados impecáveis. Seu veículo merece o
              padrão <strong className="text-white">Alexandre Sato</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                <MessageCircle className="h-5 w-5" />
                Faça seu Orçamento
              </button>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white"
              >
                Conheça nossos serviços
              </a>
            </motion.div>
          </div>

          {/* Right — Logo showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden justify-center lg:flex"
          >
            <div className="relative">
              {/* Glow behind logo */}
              <div className="absolute -inset-8 rounded-3xl bg-accent/5 blur-3xl" />
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent/10" />
              <Image
                src="/logo.jpg"
                alt="Alexandre Sato - Funilaria e Pintura Premium em Manaus"
                width={420}
                height={420}
                priority
                className="relative rounded-3xl shadow-2xl shadow-black/60"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative z-10 border-t border-white/5 bg-graphite-dark/80 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/5 px-6 md:px-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 py-6 md:flex-row md:justify-center md:gap-4 md:py-8"
              >
                <Icon className="h-5 w-5 text-accent" />
                <div className="text-center md:text-left">
                  <p className="text-xl font-bold text-white md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 md:text-xs">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
