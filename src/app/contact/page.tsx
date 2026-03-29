"use client";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "Téléphone",
    value: "+33 6 24 59 93 62",
    href: "tel:+33624599362",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.88 13.6 19.79 19.79 0 0 1 1.82 5 2 2 0 0 1 3.8 2.82h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ilias-messaoudi",
    href: "https://linkedin.com/in/ilias-messaoudi",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "ilias95messa70@gmail.com",
    href: "mailto:ilias95messa70@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
      <div className="max-w-4xl w-full mx-auto text-center">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h1 className="text-white mb-5" style={{ fontSize: "3.5rem", fontWeight: 900, lineHeight: 1.1 }}>
            Me contacter 
          </h1>
          <p className="text-white mb-3" style={{ fontSize: "1.1rem" }}>
          </p>
          <p className="text-slate-400" style={{ fontSize: "0.95rem", marginTop: "12px" }}>
            Que vous ayez une opportunité, un conseil à me partager, ou que vous connaissiez quelqu&apos;un
            qui pourrait être intéressé par mon profil — n&apos;hésitez pas à me contacter.
            Je suis ouvert à tout échange et je réponds rapidement. Merci d&apos;avance pour votre aide.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="flex flex-col items-center gap-5 p-8 transition-all duration-200 hover:scale-105"
              style={{
                background: "#0d1f35",
                border: "1px solid #4a9eff",
                borderRadius: "12px",
                minWidth: "200px",
              }}
            >
              {/* Icône ronde */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: "1.5px solid #4a9eff",
                  background: "rgba(74,158,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>

              {/* Texte */}
              <div className="flex flex-col items-center gap-1">
                <span
                  className="text-xs font-black uppercase tracking-widest"
                  style={{ color: "#4a9eff" }}
                >
                  {item.label}
                </span>
                <span className="text-slate-300 text-sm font-medium text-center break-all">
                  {item.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
