"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, MapPin } from "lucide-react";

const units = [
  {
    name: "Unidade Major Gabriel",
    address: "R. Maj. Gabriel, 1192 — Centro",
    phone: "559232346177",
  },
  {
    name: "Unidade Umberto Calderaro",
    address: "Av. Umberto Calderaro, 250 — São Francisco",
    phone: "559238774441",
  },
  {
    name: "Unidade V8",
    address: "Av. Efigênio Salles, 276 — Aleixo",
    phone: "5592993471926",
  },
  {
    name: "Unidade Max Teixeira",
    address: "Av. Max Teixeira, 200 — Col. Santo Antônio",
    phone: "559232335470",
  },
];

type WhatsAppContextType = {
  openModal: () => void;
};

const WhatsAppContext = createContext<WhatsAppContextType>({
  openModal: () => {},
});

export function useWhatsApp() {
  return useContext(WhatsAppContext);
}

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <WhatsAppContext.Provider value={{ openModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            >
              <div
                className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-graphite-light shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative border-b border-white/5 bg-graphite px-6 pb-5 pt-6">
                  <button
                    onClick={closeModal}
                    aria-label="Fechar"
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Fale pelo WhatsApp
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Escolha a unidade mais próxima de você
                  </p>
                </div>

                {/* Units list */}
                <div className="space-y-2 p-4">
                  {units.map((unit, i) => (
                    <motion.a
                      key={unit.name}
                      href={`https://wa.me/${unit.phone}?text=Olá! Gostaria de fazer um orçamento.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-graphite p-4 transition-all hover:border-green-500/30 hover:bg-green-500/5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-green-500/10">
                        <MapPin className="h-5 w-5 text-gray-400 transition-colors group-hover:text-green-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">
                          {unit.name}
                        </p>
                        <p className="text-xs text-gray-500">{unit.address}</p>
                      </div>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/20 transition-transform group-hover:scale-110">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Footer hint */}
                <div className="border-t border-white/5 px-6 py-4">
                  <p className="text-center text-xs text-gray-600">
                    Seg a Sex — 8h às 17h / Sáb — 8h às 12h
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </WhatsAppContext.Provider>
  );
}
