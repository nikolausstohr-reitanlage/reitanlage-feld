import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Section, { SectionTitle } from "../layout/Section";

const images = [
  // Featured — best shot first
  { src: "/images/7.jpeg",   alt: "Abendstimmung über den Koppeln — Schloss Waldburg im Hintergrund" },
  // Horses & nature
  { src: "/images/31.jpeg",  alt: "Pferd galoppiert im Winterschnee" },
  { src: "/images/12.jpg.jpeg", alt: "Pferde auf der Herbstweide mit Sonnenblumen" },
  { src: "/images/8.jpeg",   alt: "Sonnenuntergang über den Koppeln" },
  { src: "/images/WhatsApp Image 2026-06-15 at 4.41.12 PM.jpeg", alt: "Pferde grasen auf der Sommerweide" },
  { src: "/images/WhatsApp Image 2026-06-15 at 4.41.11 PM.jpeg", alt: "Pferde grasen durch Wiesenblumen" },
  { src: "/images/10.jpeg",  alt: "Pferde auf der Herbstweide" },
  // Arenas
  { src: "/images/14.jpeg",  alt: "Außenreitplatz mit Reitern im Sommer" },
  { src: "/images/WhatsApp Image 2026-06-15 at 4.41.10 PM.jpeg", alt: "Reiterin auf dem Außenreitplatz im Frühling" },
  { src: "/images/outdoor-arena.jpg", alt: "Außenreitplatz — 20×60 m" },
  { src: "/images/indoor-arena.jpg",  alt: "Reithalle — 20×40 m" },
  // Stalls & facilities  
  { src: "/images/3.jpeg",   alt: "Stallgang mit neugierigen Pferdeköpfen" },
  { src: "/images/WhatsApp Image 2026-06-15 at 4.41.13 PM.jpeg", alt: "Stallgang — gepflegte Innenboxen" },
  { src: "/images/13.jpeg",  alt: "Reiterstüble — gemütlicher Aufenthaltsraum" },
  { src: "/images/11.jpeg",  alt: "Hofansicht mit Kürbishgarten und Sandpaddock" },
  // Winter wonderland
  { src: "/images/29.jpeg",  alt: "Winteridylle — Koppeln im tiefen Schnee" },
  { src: "/images/18.jpeg",  alt: "Pferde im Winterschnee gut versorgt" },
  { src: "/images/30.jpeg",  alt: "Wintermorgen auf der Anlage" },
  { src: "/images/33.jpeg",  alt: "Reithalle im Winter — Frost und Morgenlicht" },
  // Spring & overview
  { src: "/images/20.jpeg",  alt: "Frühlingskoppeln mit blauem Himmel" },
  { src: "/images/aerial-view.jpg", alt: "Luftaufnahme der Reitanlage Feld" },
];

export default function Galerie() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const featured = images[0];
  const grid = images.slice(1);

  return (
    <Section id="galerie" className="bg-cream-dark">
      <SectionTitle subtitle="Alle vier Jahreszeiten — immer ein besonderer Ort.">
        Galerie
      </SectionTitle>

      {/* Featured large image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg mb-4"
        style={{ aspectRatio: "16/7" }}
        onClick={() => { setIndex(0); setOpen(true); }}
      >
        <img
          src={featured.src}
          alt={featured.alt}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/20 transition-colors duration-300" />
        <div className="absolute bottom-4 left-4 bg-forest-dark/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
          {featured.alt}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {grid.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.06 }}
            className="relative overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-lg transition-shadow"
            style={{ aspectRatio: "4/3" }}
            onClick={() => { setIndex(i + 1); setOpen(true); }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
      />
    </Section>
  );
}
