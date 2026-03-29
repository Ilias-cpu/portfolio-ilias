"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 w-full max-w-4xl">

        {/* Texte gauche */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase"
            style={{ border: "1px solid rgba(74,158,255,0.5)", color: "#4a9eff" }}
          >
            Data &amp; IA Portfolio
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 uppercase text-white">
            ILIAS
          </h1>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 uppercase" style={{ color: "#4a9eff" }}>
            MESSAOUDI
          </h1>

          <p className="text-slate-400 text-base md:text-lg mb-6 w-full max-w-lg leading-relaxed">
            Étudiant en classe préparatoire intégrée en école d'ingénieur et voulant évoluer dans les domaines de la    {" "}
            <span className="text-white font-semibold">  Data et de l'IA</span>,
            je recherche une alternance de 3 ans à partir de septembre 2026 en tant que{" "}
            <span style={{ color: "#4a9eff" }} className="font-semibold">
              Data Engineer, Data Analyst, Data Scientist
            </span>{" "}
            ou{" "}
            <span style={{ color: "#4a9eff" }} className="font-semibold">
              Développeur Web
            </span>
          </p>

          {/* Cards info */}
          <div className="flex flex-col md:flex-row gap-3 mb-6 w-full">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                ),
                title: "Ce que je cherche",
                text: "Alternance de 3 ans (36 mois) · à partir de Septembre 2026",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: "Comment je travaille",
                text: "Autonome, rigoureux, à l'écoute et opérationnel rapidement",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: "Disponibilité",
                text: "Île-de-France · Côte d'Azur",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="w-full p-3 md:p-4"
                style={{
                  background: "#111f3a",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  {card.icon}
                  <span style={{ color: "#4a9eff", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {card.title}
                  </span>
                </div>
                <span style={{ color: "white", fontSize: "0.875rem" }}>{card.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 justify-start w-full">
            <a
              href="/CV-Ilias-Messaoudi.pdf"
              download="CV-Ilias-Messaoudi.pdf"
              className="font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
              style={{ background: "#4a9eff", color: "#060f1e" }}
            >
              Télécharger CV
            </a>
            <a
              href="https://linkedin.com/in/ilias-messaoudi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
              style={{ border: "1px solid rgba(74,158,255,0.5)", color: "#4a9eff" }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:ilias95messa70@gmail.com"
              className="font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
              style={{ border: "1px solid rgba(74,158,255,0.5)", color: "#4a9eff" }}
            >
              Email
            </a>
          </div>
        </motion.div>

        {/* Photo droite */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
          style={{ marginTop: "-40px", marginLeft: "-20px" }}
        >
          {/* Halo lumineux */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(74,158,255,0.35) 0%, transparent 70%)",
              transform: "scale(1.3)",
              filter: "blur(20px)",
            }}
          />
          {/* Cercle décoratif */}
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: "2px solid rgba(74,158,255,0.3)", transform: "scale(1.08)" }}
          />
          {/* Photo */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden"
            style={{ border: "3px solid rgba(74,158,255,0.6)" }}
          >
            <Image src="/photo.png" alt="Ilias Messaoudi" fill className="object-cover object-top" priority />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
