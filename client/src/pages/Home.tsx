import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ArrowRight, Shield, BookOpen, Users, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerImg from "@assets/WhatsApp_Image_2026-02-11_at_12.00.30_AM_1771762061672.jpeg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60 z-10" />
          {/* landing page hero scenic landscape or related image */}
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80&fit=crop"
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm tracking-wide">
              {t("home.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-lg rounded-xl shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5" asChild>
                <Link href="/programs">{t("hero.cta")}</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl border-white/30 text-white hover:bg-white hover:text-black transition-all bg-transparent" asChild>
                <Link href="/about">{t("btn.learn_more")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlight: Cyber Setu */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img 
                src={bannerImg} 
                alt="Cyber Setu AI+" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">{t("nav.cybersetu")}</h3>
                <p className="text-slate-200">{t("cybersetu.flagship")}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                {t("home.cyber_setu_title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("home.cyber_setu_desc")}
              </p>
              <ul className="space-y-4 pb-4">
                <li className="flex items-center gap-3 text-foreground">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>{t("home.cyber_setu_feature1")}</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <span>{t("home.cyber_setu_feature2")}</span>
                </li>
              </ul>
              <Button className="group bg-primary" asChild>
                <Link href="/cybersetu">
                  {t("nav.cybersetu")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">{t("home.pillars_title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("home.pillars_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: t("pillar.education_title"), desc: t("pillar.education_desc") },
              { icon: Users, title: t("pillar.skills_title"), desc: t("pillar.skills_desc") },
              { icon: HeartHandshake, title: t("pillar.welfare_title"), desc: t("pillar.welfare_desc") },
            ].map((pillar, i) => (

              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg shadow-black/5 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <pillar.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
