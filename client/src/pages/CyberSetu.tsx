import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ShieldCheck, Cpu, Network, Lightbulb, Users, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function CyberSetu() {
  const { t } = useTranslation();
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4">
          <Network className="w-[600px] h-[600px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold mb-6">
              <Cpu className="h-4 w-4" /> {t("cybersetu.flagship")}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">{t("cybersetu.title")}</h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              {t("cybersetu.subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: ShieldCheck, title: t("cybersetu.feature1_title"), desc: t("cybersetu.feature1_desc") },
            { icon: Lightbulb, title: t("cybersetu.feature2_title"), desc: t("cybersetu.feature2_desc") },
            { icon: Users, title: t("cybersetu.feature3_title"), desc: t("cybersetu.feature3_desc") }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary p-8 rounded-2xl border border-border text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{feat.title}</h3>
              <p className="text-muted-foreground">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout: Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-foreground">{t("cybersetu.why_title")}</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                {t("cybersetu.why_desc")}
              </p>
              <p>
                <strong>{t("cybersetu.title")}</strong> {t("cybersetu.why_desc2")}
              </p>
              <ul className="space-y-3 mt-6 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span>{t("cybersetu.point1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span>{t("cybersetu.point2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span>{t("cybersetu.point3")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="sticky top-28">
            <ContactForm 
              type="workshop" 
              title={t("btn.request_workshop")} 
            />
            <p className="text-sm text-center text-muted-foreground mt-4">
              {t("cybersetu.workshop_note")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
