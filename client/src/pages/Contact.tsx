import React from "react";
import { ContactForm } from "@/components/ContactForm";
import { useTranslation } from "@/lib/i18n";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-secondary py-20 text-center px-4 border-b border-border">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">{t("contact.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("contact.subtitle")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <h2 className="text-3xl font-serif font-bold text-foreground">{t("contact.get_in_touch")}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-foreground">{t("contact.hq")}</h4>
                <p className="text-muted-foreground">Plot No. 27-A FF Subhash Park Ext.<br/>Uttam Nagar, West Delhi 110059,<br/>India</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-foreground">{t("contact.call_us")}</h4>
                <p className="text-muted-foreground">123456789<br/>Mon-Fri, 9am to 6pm IST</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-foreground">{t("contact.email")}</h4>
                <p className="text-muted-foreground">shikvaa.foundation@gmail.com</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="text-accent w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-foreground">{t("contact.hours")}</h4>
                <p className="text-muted-foreground">Monday to Friday<br/>09:00 AM - 06:00 PM</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-muted rounded-2xl border border-border overflow-hidden relative group">
               <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                 <span className="bg-background/90 backdrop-blur text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-md">Interactive Map Embed</span>
               </div>
               {/* Note: Use real google maps embed iframe here */}
               <div className="w-full h-full bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm type="contact" title="Send us a message" />
          </div>

        </div>
      </div>
    </div>
  );
}
