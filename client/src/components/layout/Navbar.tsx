import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/logo_1771762061671.jpg";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { t, toggleLang, lang } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/programs", label: t("nav.programs") },
    { href: "/cybersetu", label: t("nav.cybersetu") },
    { href: "/get-involved", label: t("nav.involved") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Shikvaa Foundation" 
              className="h-12 w-auto rounded-md shadow-sm group-hover:shadow-md transition-shadow" 
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-tight text-foreground">SHIKVAA</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Foundation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent relative ${
                  location === link.href ? "text-accent" : "text-foreground/80"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleLang} title={`Switch to ${lang === 'en' ? 'Hindi' : 'English'}`}>
              <Globe className="h-5 w-5" />
            </Button>
            {mounted && (
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all">
              {t("btn.donate")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
             {mounted && (
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location === link.href 
                      ? "bg-accent/10 text-accent" 
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-3">
                <Button variant="outline" onClick={toggleLang} className="w-full justify-center gap-2">
                  <Globe className="h-4 w-4" /> 
                  Switch to {lang === 'en' ? 'Hindi' : 'English'}
                </Button>
                <Button className="w-full bg-accent text-accent-foreground">{t("btn.donate")}</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
