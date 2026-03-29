"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">

          {/* Titre gauche */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/5 flex-shrink-0"
          >
            <h1 className="font-black leading-none text-white" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
              La data,
            </h1>
            <h1 className="font-black leading-none" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", color: "#4a9eff" }}>
              ma passion.
            </h1>
          </motion.div>

          {/* Contenu droite */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-3/5"
          >
            {/* Badge */}
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              style={{ border: "1px solid rgba(74,158,255,0.5)", color: "#4a9eff" }}
            >
              Qui suis-je ?
            </span>

            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Depuis tout petit, le sport a toujours été au c&oelig;ur de ma vie,
              course à pieds, renforcement musculaire, sports de combat.
              À un moment, j&apos;ai senti que je stagnais. Plutôt que d&apos;en faire
              plus, j&apos;ai décidé d&apos;analyser différemment : j&apos;ai commencé à
              collecter mes données d&apos;entraînement, à les structurer, puis à
              entraîner des modèles prédictifs sur des données issues de dizaines d&apos;études
              scientifiques pour comprendre ce qui faisait vraiment la différence.
              C&apos;est là que j&apos;ai réalisé la puissance de la data ;
              et je ne m&apos;en suis plus jamais séparé.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Aujourd&apos;hui étudiant en classe préparatoire scientifique intégrée à {" "}
              <span className="text-white font-semibold">l&apos;ECE Paris</span>, et admissible
              au cycle ingénieur à <span className="text-white font-semibold">l&apos;ESILV</span>{" "}(spécialisation Data &amp; IA), j&apos;ai conçu des{" "}
              <span style={{ color: "#4a9eff" }} className="font-semibold">agents LLM et chatbots chez Botlib.ai</span>{" "}
              et travaillé sur la structuration et la{" "}
              <span style={{ color: "#4a9eff" }} className="font-semibold">visualisation de données chez Chanel</span>.
              Autonome sur Python <span className="text-white font-semibold">(4 ans)</span> et SQL{" "}
              <span className="text-white font-semibold">(3 ans)</span>, j&apos;aime résoudre des problèmes
              concrets avec des outils modernes comme{" "}
              <span style={{ color: "#4a9eff" }} className="font-semibold">n8n, Make et les API</span>.
              Et une fois le problème résolu, j&apos;aime aller plus loin : visualiser les résultats pour
              tirer le meilleur des données récoltées et transformer chaque analyse en décision claire.
            </p>

            {/* Séparateur */}
            <div className="mb-8" style={{ height: "1px", background: "rgba(74,158,255,0.15)" }} />

            {/* Boutons */}
            <div className="flex flex-wrap gap-3">
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

        </div>
      </div>
    </section>
  );
}
