import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Shield, BookOpen, Briefcase, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Programs() {
  const { t } = useTranslation();

  const programs = [
    {
      id: "cybersetu",
      title: "Cyber Setu AI+",
      icon: Shield,
      color: "bg-blue-500",
      desc: t("prog.cybersetu_desc"),
      link: "/cybersetu"
    },
    {
      id: "education",
      title: t("pillar.education_title"),
      icon: BookOpen,
      color: "bg-emerald-500",
      desc: t("prog.education_desc"),
      link: "#"
    },
    {
      id: "skills",
      title: t("pillar.skills_title"),
      icon: Briefcase,
      color: "bg-orange-500",
      desc: t("prog.skills_desc"),
      link: "#"
    },
    {
      id: "welfare",
      title: t("pillar.welfare_title"),
      icon: Heart,
      color: "bg-rose-500",
      desc: t("prog.welfare_desc"),
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary py-20 text-center px-4 border-b border-border">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">{t("programs.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("programs.subtitle")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-lg shadow-black/5 border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className={`h-16 w-16 rounded-2xl ${prog.color}/10 flex items-center justify-center mb-8`}>
                <prog.icon className={`h-8 w-8 text-${prog.color.split('-')[1]}-600 dark:text-${prog.color.split('-')[1]}-400`} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{prog.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 flex-grow">
                {prog.desc}
              </p>
              {prog.link !== "#" && (
                <Button variant="outline" className="w-fit group border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <Link href={prog.link}>
                    {t("btn.explore_program")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
