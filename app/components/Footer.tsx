"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "./WhatsAppModal";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const INSTAGRAM_URL = "https://instagram.com/alexandresato"; // Substituir pelo perfil real

export default function Footer() {
  const { openModal } = useWhatsApp();

  return (
    <footer className="border-t border-white/10 bg-graphite-dark px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/alexandre-sato.jpg"
            alt="Alexandre Sato - Funilaria e Pintura Express"
            width={200}
            height={75}
            className="mb-3 h-12 w-auto object-contain"
          />
          <p className="text-center text-sm text-gray-400 md:text-left">
            Referência em Martelinho de Ouro, Estética Automotiva e Funilaria e
            Pintura em Manaus.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Links rápidos">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Links Rápidos
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#servicos" className="transition-colors hover:text-white">
                Serviços
              </a>
            </li>
            <li>
              <a href="#resultados" className="transition-colors hover:text-white">
                Resultados
              </a>
            </li>
            <li>
              <a href="#unidades" className="transition-colors hover:text-white">
                Unidades
              </a>
            </li>
            <li>
              <button
                onClick={openModal}
                className="transition-colors hover:text-white"
              >
                Orçamento
              </button>
            </li>
          </ul>
        </nav>

        {/* Social */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Redes Sociais
          </p>
          <div className="flex gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Alexandre Sato"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <button
              onClick={openModal}
              aria-label="WhatsApp da Alexandre Sato"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Alexandre Sato. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
