import Section, { SectionTitle } from "../layout/Section";
import { Footprints, Leaf, Users, Sun } from "lucide-react";

const highlights = [
  { icon: Footprints, text: "Täglicher Auslauf in Kleingruppen (2–8 Pferde)" },
  { icon: Leaf, text: "Ganzjähriger Koppelgang & Sommerweide" },
  { icon: Users, text: "Persönliche, familiäre Betreuung" },
  { icon: Sun, text: "Harmonische & friedliche Atmosphäre" },
];

export default function About() {
  return (
    <Section id="ueber-uns">
      <SectionTitle subtitle="Ihr Pferd verdient das Beste — und das geben wir ihm.">
        Willkommen auf der Reitanlage Feld
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/32.jpeg"
              alt="Reitanlage Feld — Sommerweide mit Pferden"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-forest/20 rounded-2xl -z-10" />
        </div>

        <div>
          <p className="text-lg leading-relaxed text-charcoal mb-4">
            Auf unserer Anlage kommen sowohl Ihr Pferd als auch Sie zur Ruhe. Wir liegen in ländlicher Idylle bei Waldburg und legen großen Wert auf ein freundliches, friedliches Miteinander.
          </p>
          <p className="text-base leading-relaxed text-warm-gray mb-4">
            Ihre Pferde werden bestens in ihrem neuen Zuhause umsorgt — mit Vollpension, regelmäßigem Auslauf und individueller Betreuung. Sie danken es Ihnen mit Ausgeglichenheit und Leistungsbereitschaft.
          </p>
          <p className="text-base leading-relaxed text-warm-gray mb-6">
            Wir bieten sowohl Vollpension mit Rundumservice als auch einen separaten Stalltrakt mit Selbstversorgung an. Dressur- und Springunterricht ist auf Wunsch jederzeit möglich.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 p-3 bg-cream-dark rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-forest" />
                </div>
                <span className="text-sm font-medium text-charcoal">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-forest/5 border-l-4 border-forest rounded-r-xl">
            <p className="text-forest font-semibold text-sm uppercase tracking-wide mb-1">Unser Versprechen</p>
            <p className="text-charcoal leading-relaxed">
              Ihre Pferde kommen täglich nach draußen — außer bei extremster Witterung. Wir legen Wert auf möglichst ausgiebige Auslaufzeiten als Ausgleich zur Boxenhaltung.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
