"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useWhatsApp } from "./WhatsAppModal";

export default function WhatsAppButton() {
  const { openModal } = useWhatsApp();

  return (
    <motion.button
      onClick={openModal}
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </motion.button>
  );
}
