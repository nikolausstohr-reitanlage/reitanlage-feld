import { motion } from "framer-motion";
import Section, { SectionTitle } from "../layout/Section";
import { Dumbbell, Wind, Droplets, Zap, Home, TreePine, Coffee, Star } from "lucide-react";

const features = [
  { icon: Dumbbell, title: "Reithalle 20×40 m", desc: "Mit Beregnungsanlage und Quarzsand-Vlieshäcksel-Gemisch. Regelmäßig geegt, gewalzt und bewässert.", tags: ["Dressur", "Springen", "überdacht"] },
  { icon: TreePine, title: "Außenreitplatz 20×60 m", desc: "Sand-Vliesfaser-Gemisch, regelmäßig gepflegt. Ideal für Training in der freien Natur.", tags: ["Outdoor", "Dressur", "Springen"] },
  { icon: Wind, title: "Außenboxen mit Paddock", desc: "Großzügige Außenboxen mit eigenem Paddock — jede Box selbstverständlich mit Fenster.", tags: ["Paddockbox", "Außenbox", "Innenbox"] },
  { icon: Droplets, title: "Waschplatz & Solarium", desc: "Waschbox innen und außen, Pferdetrocknungsplatz mit Rotlicht für optimale Pflege.", tags: ["Waschbox", "Rotlicht", "Pflege"] },
  { icon: Home, title: "Sattelkammern", desc: "Zwei abgeschlossene Sattelkammern für sichere Aufbewahrung Ihrer Ausrüstung.", tags: ["Sicherheit", "Lagerung"] },
  { icon: Star, title: "Reit- & Springunterricht", desc: "Auf Wunsch Dressur- und Springunterricht für alle Klassen. Eigene Reitlehrer möglich.", tags: ["Dressur", "Springen", "alle Niveaus"] },
  { icon: Zap, title: "Parkplatz für Anhänger", desc: "Ausreichend Platz für Pferdeanhänger und Fahrzeuge direkt auf der Anlage.", tags: ["Parkplatz", "Anhänger"] },
  { icon: Coffee, title: "Reiterstüble", desc: "Gemütliches, beheiztes Aufenthaltsraum für einen schönen Tagesausklang nach dem Reiten.", tags: ["Aufenthaltsraum", "beheizt", "Gemütlichkeit"] },
];

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-cream-dark"
    >
      <div className="w-14 h-14 bg-forest/10 group-hover:bg-forest rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
        <Icon size={28} className="text-forest group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-heading text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
      <p className="text-warm-gray text-sm leading-relaxed mb-4">{feature.desc}</p>
      <div className="flex flex-wrap gap-2">
        {feature.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-cream-dark/80 text-forest text-xs font-medium rounded-full">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Ausstattung() {
  return (
    <Section id="ausstattung" className="bg-cream-dark">
      <SectionTitle subtitle="Alles was Ihr Pferd und Sie brauchen — auf einer Anlage.">
        Ausstattung & Angebot
      </SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
      </div>

      {/* Ausreitgelände callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-cream-dark"
      >
        <h3 className="font-heading text-xl font-bold text-charcoal mb-4">Wunderschönes Ausreitgelände</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-warm-gray leading-relaxed">
          <p>Die Reitanlage Feld liegt in einer der schönsten Ausreigegenden Baden-Württembergs — mit guten Verbindungen nach Österreich und in die Schweiz. Trails durch Wald und Wiesen direkt vor der Haustür.</p>
          <p>Neben dem Vollpensionstrakt bieten wir auch einen separaten Stalltrakt mit Selbstversorgung an — ideal für Reiter, die ihre Pferde selbst versorgen möchten.</p>
        </div>
      </motion.div>
    </Section>
  );
}
