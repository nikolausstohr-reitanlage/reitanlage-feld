import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Section, { SectionTitle } from "../layout/Section";

const included = [
  "Füttern: Heu 3–4× täglich im Winter, 2–3× im Sommer",
  "Kraftfutter 2× täglich",
  "Mineralfuttergabe möglich",
  "Misten der Box",
  "Weideführservice",
  "Sommerweidennutzung",
  "Winterkoppeln & Sandpaddock im Winter",
  "Auslauf in Kleingruppen (täglich)",
  "Nutzung beider Reitflächen",
  "Parkplatz für Pferdeanhänger",
];

export default function Preise() {
  return (
    <Section id="preise" dark>
      <SectionTitle light subtitle="Transparente Konditionen — alles inklusive.">
        Preise & Leistungen
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Price card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Vollpension · Paddockboxen</p>
          <div className="flex items-end gap-2 mb-2">
            <span className="font-heading text-6xl font-bold text-gold">610</span>
            <span className="text-gold text-2xl mb-2">€</span>
            <span className="text-white/40 mb-3">/ Monat</span>
          </div>
          <p className="text-white/50 text-sm mb-8">Inkl. MwSt. · Monatliche Abrechnung</p>

          <div className="space-y-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 text-white/80 text-sm">
                <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a href="#kontakt"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 px-6 py-4 bg-gold hover:bg-gold-light text-forest-dark font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold/25">
            Platz anfragen
          </a>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold text-white mb-3">Selbstversorgung</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Neben der Vollpension bieten wir auch einen separaten Stalltrakt mit Selbstversorgung an. Preis auf Anfrage.
            </p>
          </div>

          <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold text-white mb-3">Zusatzleistungen</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>· Größere Winterausläufe je nach Gruppengröße</li>
              <li>· Fliegenmaske & Deckenservice</li>
              <li>· Dressur- & Springunterricht</li>
              <li>· Weideführservice</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-heading text-xl font-bold text-white mb-3">Besondere Eignung</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>· Hufrehe-geeignete Haltung</li>
              <li>· Notfallboxen verfügbar</li>
              <li>· Pensions- und Gastboxen</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
