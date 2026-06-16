import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const sectionIds = ["ueber-uns", "ausstattung", "preise", "galerie", "kontakt"];
const navLabels = {
  "ueber-uns": "Über uns",
  ausstattung: "Ausstattung",
  preise: "Preise",
  galerie: "Galerie",
  kontakt: "Kontakt",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds, 200);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-cream/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <span className={`font-heading text-xl md:text-2xl font-bold transition-colors ${scrolled ? "text-forest" : "text-white"}`}>
              Reitanlage Feld
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {sectionIds.map((id) => (
              <button key={id} onClick={() => handleClick(id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeId === id
                    ? scrolled ? "text-forest bg-forest/10" : "text-white bg-white/20"
                    : scrolled ? "text-charcoal/70 hover:text-forest hover:bg-forest/5" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}>
                {navLabels[id]}
              </button>
            ))}
            <span className="ml-2 px-3 py-1.5 bg-forest text-white text-xs font-semibold rounded-full animate-pulse">
              4 Plätze frei
            </span>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 rounded-lg ${scrolled ? "text-charcoal" : "text-white"}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-cream-dark shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {sectionIds.map((id) => (
              <button key={id} onClick={() => handleClick(id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeId === id ? "text-forest bg-forest/10" : "text-charcoal/70 hover:text-forest hover:bg-forest/5"
                }`}>
                {navLabels[id]}
              </button>
            ))}
            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 bg-forest text-white text-xs font-semibold rounded-full">4 Stallplätze frei</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
