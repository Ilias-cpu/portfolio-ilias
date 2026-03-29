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
    <section className="min-h-screen flex items-center justify-center px-8 py-24">
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
          <h1 className="text-6xl font-black text-white uppercase">Compétences</h1>
        </motion.div>

        {/* Blocs empilés */}
        <div>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "#111f3a",
                borderRadius: "12px",
                padding: "24px 28px",
                marginBottom: "16px",
              }}
            >
              <p
                style={{
                  color: "#4a9eff",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                {cat.title}
              </p>
              <div style={{ height: "1px", background: "#4a9eff", marginBottom: "16px", opacity: 0.4 }} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
