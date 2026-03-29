"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6" style={{background: "#0a1628"}}>
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="text-white text-center md:text-left">
          <span className="inline-block border border-blue-400 text-blue-400 text-sm font-semibold px-4 py-1 rounded mb-6 tracking-widest uppercase">
            Data & IA Portfolio
          </span>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4 uppercase">
            ILIAS<br />
            <span style={{color: "#4a9eff"}}>MESSAOUDI</span>
          </h1>
          <p className="text-slate-300 text-lg mb-10 max-w-md">
            Je transforme des données brutes en{" "}
            <span style={{color: "#4a9eff"}} className="font-semibold">insights utiles</span>{" "}
            grâce à la{" "}
            <span style={{color: "#4a9eff"}} className="font-semibold">data et l'IA</span>
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="/CV-Ilias-MESSAOUDI.pdf" download="CV-Ilias-MESSAOUDI.pdf" style={{background: "#4a9eff"}} className="font-bold px-6 py-2 rounded-full text-white transition">
              CV
            </a>
            <a href="https://linkedin.com/in/ton-profil" target="_blank" style={{borderColor: "#4a9eff", color: "#4a9eff"}} className="font-bold px-6 py-2 rounded-full border transition">
              LinkedIn
            </a>
            <a href="https://github.com/ton-profil" target="_blank" style={{borderColor: "#4a9eff", color: "#4a9eff"}} className="font-bold px-6 py-2 rounded-full border transition">
              GitHub
            </a>
            <a href="mailto:ilias95messa70@gmail.com" style={{borderColor: "#4a9eff", color: "#4a9eff"}} className="font-bold px-6 py-2 rounded-full border transition">
              Email
            </a>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <div className="absolute inset-0 rounded-full blur-2xl opacity-40" style={{background: "#4a9eff"}} />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4" style={{borderColor: "#4a9eff"}}>
            <Image src="/photo.png" alt="Ilias Messaoudi" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}