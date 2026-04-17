"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Shield, Award, Clock, Menu, X } from "lucide-react";
import { useWhatsApp } from "./WhatsAppModal";
import { useState } from "react";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Unidades", href: "#unidades" },
];

const stats = [
  { icon: Award, label: "Anos de Experiência", value: "15+" },
  { icon: Shield, label: "Clientes Atendidos", value: "10.000+" },
  { icon: Clock, label: "Unidades em Manaus", value: "4" },
];

export default function Hero() {
  const { openModal } = useWhatsApp();
  const [menuOpen, setMenuOpen] = useState(false);

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
          src="/alexandre-sato-logo.jpg"
          alt="Alexandre Sato - Funilaria e Pintura Express"
          width={160}
          height={60}
          priority
          className="h-10 w-auto object-contain md:h-12"
        />
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm text-gray-400 transition-colors hover:text-white md:block"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={openModal}
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Orçamento</span>
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:border-white/20 md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 flex flex-col bg-black/70 backdrop-blur-2xl md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Image
            src="/alexandre-sato-logo.jpg"
            alt="Alexandre Sato"
            width={160}
            height={60}
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center px-10">
          {navLinks.map((link, i) => (
            <motion.div key={link.href} initial={false} animate={menuOpen ? { opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.06 } } : { opacity: 0, y: 16 }}>
              {i > 0 && <div className="h-px bg-white/8" />}
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-5 text-center text-2xl font-light tracking-wide text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </motion.div>
          ))}
          <motion.div initial={false} animate={menuOpen ? { opacity: 1, y: 0, transition: { delay: 0.1 + navLinks.length * 0.06 } } : { opacity: 0, y: 16 }}>
            <div className="h-px bg-white/8" />
            <button
              onClick={() => {
                setMenuOpen(false);
                openModal();
              }}
              className="block w-full py-5 text-center text-2xl font-light tracking-wide text-gray-300 transition-colors hover:text-white"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Orçamento
            </button>
          </motion.div>
        </nav>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center px-6 md:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left — Text */}
          <div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Especialistas em{" "}
              <span className="text-accent">Martelinho de Ouro</span>,{" "}
              <span className="text-accent">Estética Automotiva</span> e{" "}
              <span className="text-accent">Funilaria e Pintura</span>{" "}
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
                Faça seu orçamento
              </button>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white"
              >
                Conheça nossos serviços
              </a>
            </motion.div>
          </div>

          {/* Right — Alexandre's photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden justify-center lg:flex"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-8 rounded-3xl bg-accent/5 blur-3xl" />
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent/10" />
              <Image
                src="/alexandre.jpg"
                alt="Alexandre Sato - Especialista em Funilaria, Pintura e Estética Automotiva em Manaus"
                width={480}
                height={580}
                priority
                className="relative rounded-3xl object-cover shadow-2xl shadow-black/60"
              />
              {/* Trust badge overlay */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-graphite-light/90 px-5 py-3 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Confiança & Qualidade
                </p>
                <p className="text-lg font-bold text-white">15+ anos</p>
              </div>
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
