"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "LANGAGES",
    items: ["Python", "SQL", "JavaScript", "C", "Java"],
  },
  {
    title: "DATA & BDD",
    items: ["Pandas", "Numpy", "Matplotlib", "MySQL", "Supabase", "Airtable", "Power BI"],
  },
  {
    title: "AUTOMATISATION & IA",
    items: ["n8n", "Make", "LLM / Agents IA", "API REST", "Next.js", "React", "VueJS"],
  },
  {
    title: "OUTILS & HÉBERGEMENT",
    items: ["Git", "VS Code", "Vercel", "Hostinger", "Azure (en cours)"],
  },
];

export default function Competences() {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-12 py-24">
      <div className="max-w-5xl w-full mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            style={{ border: "1px solid rgba(74,158,255,0.5)", color: "#4a9eff" }}
          >
            Compétences Techniques
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-10 uppercase">Compétences</h1>
        </motion.div>

        {/* Blocs empilés */}
        <div>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center"
              style={{
                background: "#111f3a",
                borderRadius: "12px",
                padding: "24px 28px",
                marginBottom: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                overflowX: "hidden",
              }}
            >
              <p
                className="text-xs font-semibold mb-3 md:mb-0 md:w-44 md:flex-shrink-0"
                style={{ color: "#4a9eff", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px", textAlign: "left", width: "100%" }}
              >
                {cat.title}
              </p>
              <div
                className="hidden md:block w-px self-stretch mx-8"
                style={{ background: "#4a9eff" }}
              />
              <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "#1c2e50",
                      color: "white",
                      borderRadius: "6px",
                      padding: "8px 16px",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
