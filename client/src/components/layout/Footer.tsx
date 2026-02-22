import { Link } from "wouter";
import { useTranslation } from "@/lib/i18n";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoImg from "@assets/logo_1771762061671.jpg";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Shikvaa Logo" className="h-12 w-auto rounded bg-white p-1" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white">SHIKVAA</span>
                <span className="text-xs text-accent uppercase tracking-widest">Foundation</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {t("footer.desc")} <br/><br/>
              CIN: U85500DL2026NPL462553 <br/>
              Registered Section 8 Company
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-accent transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/programs" className="hover:text-accent transition-colors">{t("nav.programs")}</Link></li>
              <li><Link href="/cybersetu" className="hover:text-accent transition-colors">{t("nav.cybersetu")}</Link></li>
              <li><Link href="/get-involved" className="hover:text-accent transition-colors">{t("nav.involved")}</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">{t("nav.gallery")}</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Our Focus</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Cyber Setu AI+</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Education Initiatives</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Skill Development</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Women Empowerment</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Child Welfare</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>123 Foundation Hub, New Delhi, Delhi 110001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>contact@shikvaafoundation.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Shikvaa Foundation. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
