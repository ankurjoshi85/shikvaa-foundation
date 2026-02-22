import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, FileText, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Header */}
      <div className="bg-primary py-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">About Shikvaa Foundation</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Driving sustainable social change through technology, education, and empowerment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-secondary border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-32 h-32 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To bridge societal gaps by leveraging modern technology, providing quality education, and enabling skill development. We strive to create equal opportunities for the underprivileged, ensuring no one is left behind in the digital age.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Eye className="w-32 h-32 text-accent" />
            </div>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Vision</h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                A world where every individual, regardless of their socio-economic background, has the knowledge, skills, and resources to thrive, contribute meaningfully to society, and lead a dignified life.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Legal Status */}
        <section className="flex flex-col lg:flex-row gap-12 items-center bg-card p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 border border-border">
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-accent/10 border-[8px] border-accent/20 flex items-center justify-center">
              <FileText className="w-20 h-20 text-accent" />
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Legal Status & Transparency</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shikvaa Foundation operates with complete transparency and adherence to statutory regulations. We are officially registered under the Companies Act, 2013, solidifying our commitment to structured, impactful, and accountable non-profit operations.
            </p>
            <div className="bg-secondary p-6 rounded-xl border border-border/50 inline-block">
              <div className="flex items-center gap-3 text-foreground font-medium text-lg">
                <CheckCircle2 className="text-green-600 h-6 w-6" />
                Registered Section 8 NGO
              </div>
              <div className="mt-2 text-muted-foreground font-mono text-sm">
                CIN: U85500DL2026NPL462553
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="text-center max-w-4xl mx-auto pb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-10">Message from the Founders</h2>
          <blockquote className="text-2xl font-serif italic text-muted-foreground leading-relaxed relative">
            <span className="absolute -top-10 -left-6 text-7xl text-accent/20">"</span>
            We started Shikvaa Foundation not just as an organization, but as a movement. A movement to ensure that the rapid advancements in technology and education reach the grassroots of our nation. Cyber Setu AI+ is our first major step towards ensuring digital safety and literacy for all.
            <span className="absolute -bottom-10 -right-6 text-7xl text-accent/20">"</span>
          </blockquote>
          <div className="mt-10">
            <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full" />
            <p className="font-bold text-lg text-foreground uppercase tracking-wider">The Founding Team</p>
            <p className="text-muted-foreground">Shikvaa Foundation</p>
          </div>
        </section>

      </div>
    </div>
  );
}
