import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const images = [
  // Using generic high-quality unsplash images related to education/tech/community
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&fit=crop",
];

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">{t("gallery.title")}</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          {t("gallery.subtitle")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
            >
              {/* gallery event photo */}
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif font-medium text-lg border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
                  View Moment
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
