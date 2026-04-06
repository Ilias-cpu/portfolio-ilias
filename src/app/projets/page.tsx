"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// --- Projet 01 data ---
const screenshots01 = [
  { src: "/coachly-landing.png", alt: "Landing page Coachly" },
  { src: "/coachly-dashboard.png", alt: "Dashboard Coachly" },
  { src: "/coachly-mobile.png", alt: "Vue mobile Coachly" },
  { src: "/coachly-brand.png", alt: "Brand identity Coachly" },
];
const construits01 = [
  "Landing page de conversion avec système d'inscription et connexion",
  "Dashboard coach avec gestion clients et création de programmes",
  "Vue mobile client avec programme du jour et suivi de séances",
  "Programmes structurés par semaines, jours, exercices et séries",
  "Brand identity complète avec palette, typographie et taglines",
];

// --- Projet 02 data ---
const screenshots02 = [
  { src: "/v2g-landing.png", alt: "Landing page V2G" },
  { src: "/v2g-simulation.png", alt: "Simulateur ROI V2G" },
  { src: "/v2g-exemple.png", alt: "Dashboard V2G" },
];
const construits02 = [
  "Landing page de présentation avec chatbot intégré",
  "Simulateur ROI personnalisé selon le véhicule et l'usage",
  "Dashboard d'analyse avec données réelles et projections",
  "Sous-menus de navigation Vue d'ensemble, Simulation, Véhicule, Historique",
  "Modèle prédictif basé sur capacité batterie, tarifs réseau et usage quotidien",
];

// --- Modale ---
function Modal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "24px",
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "1.5rem",
          cursor: "pointer",
          lineHeight: 1,
        }}
      >
        ×
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            borderRadius: "8px",
            display: "block",
          }}
        />
      </div>
    </motion.div>
  );
}

// --- Galerie réutilisable ---
function Galerie({
  images,
  gridClass,
  onOpen,
}: {
  images: { src: string; alt: string }[];
  gridClass: string;
  onOpen: (src: string, alt: string) => void;
}) {
  return (
    <div className={`grid gap-3 ${gridClass}`}>
      {images.map((s) => (
        <div
          key={s.src}
          onClick={() => onOpen(s.src, s.alt)}
          style={{
            position: "relative",
            aspectRatio: "16/9",
            borderRadius: "8px",
            border: "1px solid #1a2744",
            overflow: "hidden",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <Image src={s.src} alt={s.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

const btnStyle = {
  border: "1px solid #4a9eff",
  color: "#4a9eff",
  borderRadius: "9999px",
  padding: "8px 20px",
  fontSize: "0.9rem",
  fontWeight: 600,
  cursor: "pointer",
  background: "transparent",
} as const;

const badgeStyle = {
  background: "#0d1f35",
  border: "1px solid rgba(74,158,255,0.4)",
  color: "#4a9eff",
  borderRadius: "6px",
  padding: "5px 12px",
  fontSize: "0.8rem",
  fontWeight: 600,
} as const;

const sectionTitle = {
  color: "#4a9eff",
  letterSpacing: "0.15em",
  fontSize: "0.75rem",
  fontWeight: 800,
  textTransform: "uppercase" as const,
  marginBottom: "8px",
};

export default function Projets() {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src: string, alt: string) => { setModalSrc(src); setModalAlt(alt); };

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-12 py-24">
      <div className="max-w-5xl w-full mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(74,158,255,0.5)", color: "#4a9eff" }}
          >
            Projets Notables
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-10 uppercase">Projets</h1>
        </motion.div>

        {/* ── PROJET 01 ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start gap-6 mb-20"
        >
          <div className="flex-shrink-0 w-20 md:w-32">
            <span className="text-6xl md:text-8xl font-black select-none" style={{ color: "#1a2f50" }}>01</span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase mb-3">SAAS DATA SPORTIVES &amp; AUTOMATISATION</h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
              Développement d&apos;une plateforme SaaS d&apos;analyse de données sportives avec scraping automatisé,
              pipeline ETL et visualisation interactive. Intègre des bots d&apos;intégration API pour la collecte
              et le traitement de données en temps réel.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {["Python", "SQL", "Pandas", "Scikit-learn", "n8n", "API REST", "Supabase", "Next.js", "Vercel"].map((o) => <span key={o} style={badgeStyle}>{o}</span>)}
              <button onClick={() => setOpen01(!open01)} style={btnStyle}>{open01 ? "Réduire ↑" : "En savoir plus →"}</button>
            </div>
            <AnimatePresence>
              {open01 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }} style={{ overflow: "hidden" }}>
                  <div className="flex flex-col gap-6 mt-2 p-6 rounded-xl" style={{ background: "rgba(74,158,255,0.04)", border: "1px solid rgba(74,158,255,0.12)" }}>
                    <div>
                      <p style={sectionTitle}>Contexte</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Le marché du coaching sportif en ligne représente plusieurs milliards d&apos;euros et explose chaque année.
                        Pourtant la majorité des personal trainers gèrent encore leurs clients sur WhatsApp et Excel.
                        Coachly est une plateforme SaaS pensée pour centraliser le suivi client, les programmes et la progression
                        dans une interface épurée et mobile-first.
                      </p>
                    </div>
                    <div>
                      <p style={sectionTitle}>Ce que j&apos;ai construit</p>
                      <div className="flex flex-col gap-2">
                        {construits01.map((item) => <p key={item} className="text-slate-300 text-sm leading-relaxed">{item}</p>)}
                      </div>
                    </div>
                    <Galerie images={screenshots01} gridClass="grid-cols-1 sm:grid-cols-2" onOpen={openModal} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <hr style={{ borderColor: "#1a2f50", marginBottom: "2rem" }} />

        {/* ── PROJET 02 ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col md:flex-row items-start gap-6 mb-20"
        >
          <div className="flex-shrink-0 w-20 md:w-32">
            <span className="text-6xl md:text-8xl font-black select-none" style={{ color: "#1a2f50" }}>02</span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase mb-3">SIMULATEUR V2G – RETOUR SUR INVESTISSEMENT</h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
              La technologie Vehicle-to-Grid permet à un véhicule électrique de réinjecter de l&apos;énergie dans le réseau.
              Une technologie prometteuse, encore très peu documentée. Notre équipe a voulu savoir : est-ce vraiment rentable ?
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {["Python", "Next.js", "Plotly", "SQL", "API", "Données réelles", "Simulation prédictive", "Scikit-learn", "Chatbot IA"].map((o) => <span key={o} style={badgeStyle}>{o}</span>)}
              <button onClick={() => setOpen02(!open02)} style={btnStyle}>{open02 ? "Réduire ↑" : "En savoir plus →"}</button>
            </div>
            <AnimatePresence>
              {open02 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }} style={{ overflow: "hidden" }}>
                  <div className="flex flex-col gap-6 mt-2 p-6 rounded-xl" style={{ background: "rgba(74,158,255,0.04)", border: "1px solid rgba(74,158,255,0.12)" }}>
                    <div>
                      <p style={sectionTitle}>Le défi</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Projet académique en groupe sur plusieurs mois. La technologie V2G étant très récente, les données fiables
                        étaient quasi inexistantes. Nous avons contacté des concessionnaires, des constructeurs automobiles, des
                        opérateurs réseau. Beaucoup de refus. On a quand même réussi à constituer un jeu de données exploitable
                        pour alimenter nos estimations prédictives.
                      </p>
                    </div>
                    <div>
                      <p style={sectionTitle}>Ce que nous avons construit</p>
                      <div className="flex flex-col gap-2">
                        {construits02.map((item) => <p key={item} className="text-slate-300 text-sm leading-relaxed">{item}</p>)}
                      </div>
                    </div>
                    <div>
                      <p style={sectionTitle}>Statut</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Projet encore en cours de développement avec mon équipe. Objectif : déployer le site et mesurer sa croissance réelle.
                      </p>
                    </div>
                    <Galerie images={screenshots02} gridClass="grid-cols-1 sm:grid-cols-2" onOpen={openModal} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <hr style={{ borderColor: "#1a2f50", marginBottom: "2rem" }} />

        {/* ── PROJET 03 ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row items-start gap-6 mb-20"
        >
          <div className="flex-shrink-0 w-20 md:w-32">
            <span className="text-6xl md:text-8xl font-black select-none" style={{ color: "#1a2f50" }}>03</span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase mb-3">AGENTS CONVERSATIONNELS &amp; AUTOMATISATION IA</h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
              Conception et déploiement de solutions LLM, chatbots et agents vocaux pour optimiser les processus clients
              d&apos;une startup. Workflows automatisés multicanaux sur n8n et Make.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {["LLM", "LangChain", "RAG", "NLP", "OpenAI/Anthropic API", "n8n", "Make", "API REST", "Python", "Airtable", "Supabase"].map((o) => <span key={o} style={badgeStyle}>{o}</span>)}
              <a
                href="https://www.linkedin.com/posts/ilias-messaoudi_jai-choisi-lexp%C3%A9rience-avant-de-partir-activity-7427730263289483264-4RHg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF5ppzABBWnbjeiuihAFJUFMvoCjrRpdjpU"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...btnStyle, textDecoration: "none" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modale */}
      <AnimatePresence>
        {modalSrc && <Modal src={modalSrc} alt={modalAlt} onClose={() => setModalSrc(null)} />}
      </AnimatePresence>
    </section>
  );
}
