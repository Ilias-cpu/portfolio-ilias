"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/competences", label: "Compétences" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(10, 22, 40, 0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(74,158,255,0.15)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="font-black text-white text-base tracking-wider uppercase">
          Ilias<span style={{ color: "#4a9eff" }}>.</span>
        </span>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  color: active ? "#4a9eff" : "#94a3b8",
                  background: active ? "rgba(74,158,255,0.12)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Badge desktop */}
        <span
          className="hidden md:inline text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: "rgba(74,158,255,0.15)", color: "#4a9eff", border: "1px solid rgba(74,158,255,0.3)" }}
        >
          Alternance Sept. 2026
        </span>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className="block h-0.5 w-6 transition-all duration-200"
            style={{ background: "#4a9eff", transform: open ? "rotate(45deg) translateY(8px)" : "none" }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-200"
            style={{ background: "#4a9eff", opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-200"
            style={{ background: "#4a9eff", transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }}
          />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div
          className="md:hidden flex flex-col px-6 pb-6 gap-1"
          style={{ borderTop: "1px solid rgba(74,158,255,0.1)" }}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  color: active ? "#4a9eff" : "#94a3b8",
                  background: active ? "rgba(74,158,255,0.12)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <span
            className="mt-2 self-start text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: "rgba(74,158,255,0.15)", color: "#4a9eff", border: "1px solid rgba(74,158,255,0.3)" }}
          >
            Alternance Sept. 2026
          </span>
        </div>
      )}
    </nav>
  );
}
