import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface TranslationContextType {
  t: (key: string) => string;
  lang: Language;
  toggleLang: () => void;
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.programs": "Our Programs",
    "nav.cybersetu": "Cyber Setu AI+",
    "nav.involved": "Get Involved",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "btn.donate": "Donate Now",
    "btn.partner": "Partner With Us",
    "hero.title": "Empowering Communities Through Technology & Education",
    "hero.subtitle": "Shikvaa Foundation is a Section 8 NGO bridging the digital divide and fostering holistic growth.",
    "hero.cta": "Discover Our Impact",
    "footer.desc": "A Section 8 Non-Profit Organization committed to driving sustainable change through education and technology.",
  },
  hi: {
    "nav.home": "मुख्य पृष्ठ",
    "nav.about": "हमारे बारे में",
    "nav.programs": "हमारे कार्यक्रम",
    "nav.cybersetu": "साइबर सेतु AI+",
    "nav.involved": "शामिल हों",
    "nav.gallery": "गैलरी",
    "nav.contact": "संपर्क करें",
    "btn.donate": "दान करें",
    "btn.partner": "साझेदार बनें",
    "hero.title": "प्रौद्योगिकी और शिक्षा के माध्यम से समुदायों का सशक्तिकरण",
    "hero.subtitle": "शिकवा फाउंडेशन एक सेक्शन 8 NGO है जो डिजिटल विभाजन को पाट रहा है।",
    "hero.cta": "हमारा प्रभाव देखें",
    "footer.desc": "शिक्षा और प्रौद्योगिकी के माध्यम से स्थायी परिवर्तन लाने के लिए प्रतिबद्ध एक सेक्शन 8 गैर-लाभकारी संगठन।",
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('shikvaa_lang') as Language;
    if (saved && (saved === 'en' || saved === 'hi')) {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'hi' : 'en';
    setLang(nextLang);
    localStorage.setItem('shikvaa_lang', nextLang);
  };

  const t = (key: string): string => {
    return (translations[lang] as Record<string, string>)[key] || (translations['en'] as Record<string, string>)[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, lang, toggleLang }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) throw new Error("useTranslation must be used within a TranslationProvider");
  return context;
}
