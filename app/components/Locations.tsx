"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const units = [
  {
    name: "Unidade Major Gabriel",
    address: "Av. Major Gabriel, Centro — Manaus, AM",
    mapsUrl: "#", // Substituir pela URL real do Google Maps
  },
  {
    name: "Unidade Paraíba",
    address: "Av. Paraíba — Manaus, AM",
    mapsUrl: "#", // Substituir pela URL real do Google Maps
  },
  {
    name: "Unidade Ephigênio Salles",
    address: "Avenida Ephigênio Salles — Manaus, AM",
    mapsUrl: "#", // Substituir pela URL real do Google Maps
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function Locations() {
  return (
    <section
      id="unidades"
      className="bg-graphite-dark px-4 py-20 md:py-28"
      aria-label="Unidades em Manaus"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
          Visite uma de nossas{" "}
          <span className="text-accent">unidades em Manaus</span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Com 3 unidades estrategicamente localizadas, sempre há uma Alexandre
          Sato perto de você.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {units.map((unit, i) => (
            <motion.div
              key={unit.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="rounded-2xl border border-white/10 bg-graphite p-8 text-center transition-colors hover:border-accent/30"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <MapPin className="h-7 w-7 text-accent" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-white">
                {unit.name}
              </h3>
              <p className="mb-6 text-sm text-gray-400">{unit.address}</p>

              <a
                href={unit.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
              >
                <Navigation className="h-4 w-4" />
                Ver no Google Maps
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
