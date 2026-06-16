import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";
import Section, { SectionTitle } from "../layout/Section";

export default function Video() {
  return (
    <Section id="video">
      <SectionTitle subtitle="Erleben Sie die Reitanlage Feld in Bewegung.">
        Video & Social Media
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* YouTube embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "16/9" }}>
            <iframe
              src="https://www.youtube.com/embed/FGueoxajj7Q"
              title="Reitanlage Feld Waldburg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-warm-gray text-sm mt-3 text-center">Reitanlage Feld — Waldburg</p>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
            Folgen Sie uns auf Instagram
          </h3>
          <p className="text-warm-gray leading-relaxed mb-6">
            Aktuelle Bilder, Impressionen aus dem Stallalltag und die schönsten Momente aus Waldburg — direkt auf Instagram. Werden Sie Teil unserer Community.
          </p>

          <a
            href="https://www.instagram.com/reitanlage_feld/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-pink-300 bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all group w-fit"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
              <Instagram size={24} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-charcoal group-hover:text-pink-600 transition-colors">@reitanlage_feld</p>
              <p className="text-sm text-warm-gray">Instagram · Jetzt folgen</p>
            </div>
          </a>

          <a
            href="https://youtu.be/FGueoxajj7Q?si=OBfHuCwSWjXXwyBs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-red-200 bg-red-50 hover:bg-red-100 transition-all group w-fit mt-4"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
              <Youtube size={24} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-charcoal group-hover:text-red-600 transition-colors">Video auf YouTube</p>
              <p className="text-sm text-warm-gray">Reitanlage Feld · ansehen</p>
            </div>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
