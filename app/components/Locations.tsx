"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, Navigation } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const units = [
  {
    name: "Unidade Major Gabriel",
    address: "R. Maj. Gabriel, 1192 — Centro, Manaus, AM, 69020-405",
    phone: "559232346177",
    mapsUrl: "https://www.google.com/maps/place/Alexandre+Sato+Funilaria+e+Pintura+Major+Gabriel/@-3.1240612,-60.0191458,17z/data=!3m1!4b1!4m6!3m5!1s0x926c0565cfdcf3a5:0x7dfc5b13753ff503!8m2!3d-3.1240612!4d-60.0165709!16s%2Fg%2F1yfj43lw7",
  },
  {
    name: "Unidade Umberto Calderaro",
    address: "Av. Umberto Calderaro, 250 — São Francisco, Manaus, AM, 69055-700",
    phone: "559238774441",
    mapsUrl: "https://www.google.com/maps/place/Alexandre+Sato+Funilaria+e+Pintura+Para%C3%ADba/@-3.1133832,-60.0151061,17z/data=!3m1!4b1!4m6!3m5!1s0x926c0568c6290e57:0xb4c11729d79406a9!8m2!3d-3.1133832!4d-60.0102352!16s%2Fg%2F11fsy_r28z",
  },
  {
    name: "Unidade V8",
    address: "Av. Efigênio Salles, 276 — Aleixo, Manaus, AM, 69060-020",
    phone: "5592993471926",
    mapsUrl: "https://www.google.com/maps/place/Alexandre+Sato+Funilaria+e+Pintura+V8/@-3.0891711,-60.0106485,17z/data=!3m1!4b1!4m6!3m5!1s0x926c1b51550f4637:0xb88fc86802beccba!8m2!3d-3.0891711!4d-60.0080736!16s%2Fg%2F11rr7s20ld",
  },
  {
    name: "Unidade Max Teixeira",
    address: "Av. Max Teixeira, 200 — Col. Santo Antônio, Manaus, AM, 69058-415",
    phone: "559232335470",
    mapsUrl: "https://www.google.com/maps/place/Alexandre+Sato+Max+Teixeira/@-3.046423,-60.0233236,17z/data=!3m1!4b1!4m6!3m5!1s0x926c1b8e2fab6151:0xbfc07c8c05b17ec9!8m2!3d-3.046423!4d-60.0207487!16s%2Fg%2F11qnk91bk3",
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

function LocationCard({ unit, i }: { unit: (typeof units)[number]; i: number }) {
  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className="w-[85vw] flex-shrink-0 snap-center rounded-2xl border border-white/10 bg-graphite p-8 text-center transition-colors hover:border-accent/30 md:w-auto"
    >
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
        <MapPin className="h-7 w-7 text-accent" />
      </div>

      <h3 className="mb-2 text-xl font-bold text-white">{unit.name}</h3>
      <p className="mb-6 text-sm text-gray-400">{unit.address}</p>

      <div className="flex flex-col gap-3">
        <a
          href={`https://wa.me/${unit.phone}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-light"
        >
          <MessageCircle className="h-4 w-4" />
          Falar no WhatsApp
        </a>
        <a
          href={unit.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/50 px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        >
          <Navigation className="h-4 w-4" />
          Ver no Google Maps
        </a>
      </div>
    </motion.div>
  );
}

export default function Locations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.scrollWidth / units.length;
      setActiveIndex(Math.round(scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

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
          Com 4 unidades estrategicamente localizadas, sempre há uma Alexandre
          Sato perto de você.
        </p>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-4 pb-4 snap-x snap-mandatory"
          >
            {units.map((unit, i) => (
              <LocationCard key={unit.name} unit={unit} i={i} />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {units.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para unidade ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-accent" : "w-2 bg-white/30"
                }`}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / units.length;
                  el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {units.map((unit, i) => (
            <LocationCard key={unit.name} unit={unit} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
