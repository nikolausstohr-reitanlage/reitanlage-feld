import { ArrowUp, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <span className="font-heading text-xl font-bold text-white block mb-3">Reitanlage Feld</span>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Dressur, Springen & Freizeit<br />
              in naturnaher Idylle bei Waldburg
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/reitanlage_feld/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-pink-500/30 rounded-lg text-white/70 hover:text-white transition-all text-sm"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://youtu.be/FGueoxajj7Q?si=OBfHuCwSWjXXwyBs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-red-500/30 rounded-lg text-white/70 hover:text-white transition-all text-sm"
              >
                <Youtube size={16} /> YouTube
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[["ueber-uns","Über uns"],["ausstattung","Ausstattung"],["preise","Preise"],["galerie","Galerie"],["kontakt","Kontakt"]].map(([id, label]) => (
                <a key={id} href={`#${id}`} className="hover:text-gold transition-colors">{label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Kontakt</h4>
            <p className="text-sm text-white/60">Claudia Stohr</p>
            <p className="text-sm text-white/60 mt-1">Feld, 88289 Waldburg</p>
            <p className="text-sm text-white/60 mt-1">Telefonisch ab 17 Uhr</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Reitanlage Feld · Waldburg. Alle Angaben ohne Gewähr.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-1 text-xs text-white/40 hover:text-gold transition-colors">
            <ArrowUp size={14} /> Nach oben
          </button>
        </div>
      </div>
    </footer>
  );
}
