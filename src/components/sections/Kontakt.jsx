import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ExternalLink } from "lucide-react";
import { SectionTitle } from "../layout/Section";

const benefits = [
  "Persönliche Betreuung Ihres Pferdes — kein Massenbetrieb",
  "Täglicher Auslauf garantiert (außer Extremwetter)",
  "Harmonische Kleingruppen für stressfreie Haltung",
  "Erstklassige Reitanlagen für Dressur & Springen",
  "Wunderschönes Ausreitgelände direkt vor der Tür",
  "Gute Verbindungen nach Österreich und in die Schweiz",
];

export default function Kontakt() {
  return (
    <section id="kontakt" className="relative overflow-hidden">
      <div className="bg-forest-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle light subtitle="Wir freuen uns auf Ihre Anfrage.">
            Kontakt & Anfrage
          </SectionTitle>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact methods */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 bg-forest-light/20 rounded-xl flex items-center justify-center">
                    <Phone className="text-forest-light" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Telefon</p>
                    <p className="text-white/60 text-sm">0160 9232 4555</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Adresse</p>
                    <p className="text-white/60 text-sm">Feld 12, 88289 Waldburg · Baden-Württemberg</p>
                  </div>
                </div>

                <a
                  href="mailto:reitanlage-feld@web.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all group"
                >
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold flex items-center gap-2">
                      Nachricht schreiben <ExternalLink size={14} className="text-white/40" />
                    </p>
                    <p className="text-white/60 text-sm">Über unser Profil auf Stall-Frei.de</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-forest/20 rounded-2xl border border-forest/30">
                  <div className="w-14 h-14 bg-forest/30 rounded-xl flex items-center justify-center">
                    <span className="text-gold font-bold text-lg">4</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Aktuell 4 Plätze frei</p>
                    <p className="text-white/60 text-sm">Von 18 Stallplätzen · jetzt anfragen</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Benefits */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3 className="font-heading text-2xl font-bold text-white mb-6">Warum Reitanlage Feld?</h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-gold/10 rounded-2xl border border-gold/20">
                <p className="text-gold font-heading text-xl font-bold mb-2">Ansprechpartnerin</p>
                <p className="text-white/70 text-sm mb-4">Claudia Stohr steht Ihnen für alle Fragen rund um freie Stallplätze gerne zur Verfügung.</p>
                <a
                  href="https://www.stall-frei.de/stall/baden-wuerttemberg/waldburg/107688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-light text-forest-dark font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold/25"
                >
                  <Mail size={18} /> Jetzt anfragen
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
