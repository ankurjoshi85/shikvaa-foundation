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
    "btn.learn_more": "Learn More",
    "btn.explore_program": "Explore Program",
    "btn.apply_internship": "Apply for Internship",
    "btn.register_volunteer": "Register as Volunteer",
    "btn.submit_partnership": "Submit Partnership Inquiry",
    "btn.request_workshop": "Request a Workshop",
    "hero.title": "Empowering Communities Through Technology & Education",
    "hero.subtitle": "Shikvaa Foundation is a Section 8 NGO bridging the digital divide and fostering holistic growth.",
    "hero.cta": "Discover Our Impact",
    "home.badge": "Registered Section 8 NGO",
    "home.cyber_setu_title": "Bridging the Digital Divide",
    "home.cyber_setu_desc": "In today's rapidly evolving technological landscape, AI awareness and cyber safety are no longer luxuries—they are necessities. Our flagship program, Cyber Setu AI+, is designed to empower students, educators, and communities with the knowledge to navigate the digital world safely and effectively.",
    "home.cyber_setu_feature1": "Cybersecurity Awareness Workshops",
    "home.cyber_setu_feature2": "AI Literacy for Schools & Rural Areas",
    "home.pillars_title": "Our Core Pillars",
    "home.pillars_subtitle": "We focus on comprehensive development through strategic interventions in key areas of society.",
    "pillar.education_title": "Education",
    "pillar.education_desc": "Providing access to quality learning materials and digital infrastructure for underprivileged students.",
    "pillar.skills_title": "Skill Development",
    "pillar.skills_desc": "Equipping youth with modern, employable skills tailored to industry demands.",
    "pillar.welfare_title": "Women & Child Welfare",
    "pillar.welfare_desc": "Creating safe spaces and empowerment programs to foster independence and well-being.",
    "about.title": "About Shikvaa Foundation",
    "about.subtitle": "Driving sustainable social change through technology, education, and empowerment.",
    "about.mission_title": "Our Mission",
    "about.mission_desc": "To bridge societal gaps by leveraging modern technology, providing quality education, and enabling skill development. We strive to create equal opportunities for the underprivileged, ensuring no one is left behind in the digital age.",
    "about.vision_title": "Our Vision",
    "about.vision_desc": "A world where every individual, regardless of their socio-economic background, has the knowledge, skills, and resources to thrive, contribute meaningfully to society, and lead a dignified life.",
    "about.legal_title": "Legal Status & Transparency",
    "about.legal_desc": "Shikvaa Foundation operates with complete transparency and adherence to statutory regulations. We are officially registered under the Companies Act, 2013, solidifying our commitment to structured, impactful, and accountable non-profit operations.",
    "about.legal_badge": "Registered Section 8 NGO",
    "about.founder_title": "Message from the Founders",
    "about.founder_msg": "We started Shikvaa Foundation not just as an organization, but as a movement. A movement to ensure that the rapid advancements in technology and education reach the grassroots of our nation. Cyber Setu AI+ is our first major step towards ensuring digital safety and literacy for all.",
    "programs.title": "Our Programs",
    "programs.subtitle": "Targeted initiatives designed to address the most pressing challenges in our society today.",
    "prog.cybersetu_desc": "Empowering individuals with AI awareness and robust cybersecurity practices to safely navigate the modern digital landscape. We conduct specialized workshops in schools and rural communities.",
    "prog.education_desc": "Distributing learning materials, establishing community libraries, and providing scholarships to ensure financial constraints never hinder a child's right to quality education.",
    "prog.skills_desc": "Vocational training programs tailored for the youth, focusing on both traditional crafts and modern digital skills to enhance employability and foster entrepreneurship.",
    "prog.welfare_desc": "Creating safe ecosystems through legal awareness, health camps, and empowerment initiatives aimed at uplifting women and protecting children's rights.",
    "cybersetu.flagship": "Flagship Program",
    "cybersetu.title": "Cyber Setu AI+",
    "cybersetu.subtitle": "Bridging the gap between technological advancement and user awareness. Equipping schools, rural communities, and institutions with the tools to navigate AI and Cybersecurity safely.",
    "cybersetu.feature1_title": "Cyber Safety",
    "cybersetu.feature1_desc": "Protecting personal data, identifying phishing, and safe browsing habits.",
    "cybersetu.feature2_title": "AI Literacy",
    "cybersetu.feature2_desc": "Understanding artificial intelligence, its impact, and ethical usage.",
    "cybersetu.feature3_title": "Community Workshops",
    "cybersetu.feature3_desc": "Interactive sessions tailored for students, teachers, and parents.",
    "cybersetu.why_title": "Why Cyber Setu AI+?",
    "cybersetu.why_desc": "As digital transformation accelerates across India, exposure to the internet is increasing exponentially. However, digital literacy is not keeping pace, leading to rising cases of cyber fraud, misinformation, and unsafe online practices.",
    "cybersetu.why_desc2": "Cyber Setu AI+ (Cyber Bridge) acts as a conduit of knowledge. We aim to:",
    "cybersetu.point1": "Demystify complex AI concepts for the general public.",
    "cybersetu.point2": "Provide actionable cybersecurity protocols for schools and small businesses.",
    "cybersetu.point3": "Train educators to become 'Cyber Ambassadors' in their communities.",
    "cybersetu.workshop_note": "Workshops are typically provided free of cost to public schools and underprivileged communities.",
    "involved.title": "Get Involved",
    "involved.subtitle": "Real change requires collective action. Join hands with Shikvaa Foundation to amplify our impact across communities.",
    "involved.tab_partner": "Partner & CSR",
    "involved.tab_volunteer": "Volunteer",
    "involved.tab_intern": "Internships",
    "involved.partner_title": "Corporate & Institutional Partnerships",
    "involved.partner_desc": "We welcome corporations to fulfill their CSR mandates through our transparent and high-impact programs. Partner with us to fund Cyber Setu AI+ deployments or educational infrastructure.",
    "involved.volunteer_title": "Become a Volunteer",
    "involved.volunteer_desc": "Give the gift of time and skill. Whether you're an IT professional wanting to teach cybersecurity or someone passionate about community organizing, we need you.",
    "involved.intern_title": "Student Internships",
    "involved.intern_desc": "Gain real-world experience in the non-profit sector. We offer internships in program management, digital marketing, content creation, and technical training.",
    "gallery.title": "Our Impact in Action",
    "gallery.subtitle": "Glimpses from our recent workshops, community drives, and educational events.",
    "contact.title": "Contact Us",
    "contact.subtitle": "Have a question or want to work together? We'd love to hear from you.",
    "contact.get_in_touch": "Get In Touch",
    "contact.hq": "Our HQ",
    "contact.call_us": "Call Us",
    "contact.email": "Email",
    "contact.hours": "Working Hours",
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
    "btn.learn_more": "अधिक जानें",
    "btn.explore_program": "कार्यक्रम देखें",
    "btn.apply_internship": "इंटर्नशिप के लिए आवेदन करें",
    "btn.register_volunteer": "स्वयंसेवक के रूप में पंजीकरण करें",
    "btn.submit_partnership": "साझेदारी पूछताछ भेजें",
    "btn.request_workshop": "कार्यशाला का अनुरोध करें",
    "hero.title": "प्रौद्योगिकी और शिक्षा के माध्यम से समुदायों का सशक्तिकरण",
    "hero.subtitle": "शिकवा फाउंडेशन एक सेक्शन 8 NGO है जो डिजिटल विभाजन को पाट रहा है और समग्र विकास को बढ़ावा दे रहा है।",
    "hero.cta": "हमारा प्रभाव देखें",
    "home.badge": "पंजीकृत सेक्शन 8 NGO",
    "home.cyber_setu_title": "डिजिटल विभाजन को पाटना",
    "home.cyber_setu_desc": "आज के तेजी से बदलते तकनीकी परिदृश्य में, AI जागरूकता और साइबर सुरक्षा अब विलासिता नहीं बल्कि आवश्यकताएं हैं। हमारा प्रमुख कार्यक्रम, साइबर सेतु AI+, छात्रों, शिक्षकों और समुदायों को डिजिटल दुनिया को सुरक्षित और प्रभावी ढंग से नेविगेट करने के ज्ञान के साथ सशक्त बनाने के लिए डिज़ाइन किया गया है।",
    "home.cyber_setu_feature1": "साइबर सुरक्षा जागरूकता कार्यशालाएं",
    "home.cyber_setu_feature2": "स्कूलों और ग्रामीण क्षेत्रों के लिए AI साक्षरता",
    "home.pillars_title": "हमारे मुख्य स्तंभ",
    "home.pillars_subtitle": "हम समाज के प्रमुख क्षेत्रों में रणनीतिक हस्तक्षेप के माध्यम से व्यापक विकास पर ध्यान केंद्रित करते हैं।",
    "pillar.education_title": "शिक्षा",
    "pillar.education_desc": "वंचित छात्रों के लिए गुणवत्तापूर्ण शिक्षण सामग्री और डिजिटल बुनियादी ढांचे तक पहुंच प्रदान करना।",
    "pillar.skills_title": "कौशल विकास",
    "pillar.skills_desc": "युवाओं को उद्योग की मांगों के अनुरूप आधुनिक, रोजगार योग्य कौशल से लैस करना।",
    "pillar.welfare_title": "महिला एवं बाल कल्याण",
    "pillar.welfare_desc": "स्वतंत्रता और कल्याण को बढ़ावा देने के लिए सुरक्षित स्थान और सशक्तिकरण कार्यक्रम बनाना।",
    "about.title": "शिकवा फाउंडेशन के बारे में",
    "about.subtitle": "प्रौद्योगिकी, शिक्षा और सशक्तिकरण के माध्यम से स्थायी सामाजिक परिवर्तन लाना।",
    "about.mission_title": "हमारा मिशन",
    "about.mission_desc": "आधुनिक तकनीक का लाभ उठाकर, गुणवत्तापूर्ण शिक्षा प्रदान करके और कौशल विकास को सक्षम करके सामाजिक अंतराल को पाटना। हम वंचितों के लिए समान अवसर पैदा करने का प्रयास करते हैं, यह सुनिश्चित करते हुए कि डिजिटल युग में कोई भी पीछे न छूटे।",
    "about.vision_title": "हमारा विजन",
    "about.vision_desc": "एक ऐसी दुनिया जहां हर व्यक्ति, चाहे उनकी सामाजिक-आर्थिक पृष्ठभूमि कुछ भी हो, उनके पास पनपने, समाज में सार्थक योगदान देने और सम्मानजनक जीवन जीने के लिए ज्ञान, कौशल और संसाधन हों।",
    "about.legal_title": "कानूनी स्थिति और पारदर्शिता",
    "about.legal_desc": "शिकवा फाउंडेशन पूर्ण पारदर्शिता और वैधानिक नियमों के पालन के साथ काम करता है। हम आधिकारिक तौर पर कंपनी अधिनियम, 2013 के तहत पंजीकृत हैं, जो संरचित, प्रभावशाली और जवाबदेह गैर-लाभकारी कार्यों के प्रति हमारी प्रतिबद्धता को मजबूत करता है।",
    "about.legal_badge": "पंजीकृत सेक्शन 8 NGO",
    "about.founder_title": "संस्थापकों का संदेश",
    "about.founder_msg": "हमने शिकवा फाउंडेशन की शुरुआत केवल एक संगठन के रूप में नहीं, बल्कि एक आंदोलन के रूप में की है। एक आंदोलन यह सुनिश्चित करने के लिए कि प्रौद्योगिकी और शिक्षा में तेजी से प्रगति हमारे देश के जमीनी स्तर तक पहुंचे। साइबर सेतु AI+ सभी के लिए डिजिटल सुरक्षा और साक्षरता सुनिश्चित करने की दिशा में हमारा पहला बड़ा कदम है।",
    "programs.title": "हमारे कार्यक्रम",
    "programs.subtitle": "आज हमारे समाज में सबसे अधिक दबाव वाली चुनौतियों का समाधान करने के लिए डिज़ाइन की गई लक्षित पहल।",
    "prog.cybersetu_desc": "आधुनिक डिजिटल परिदृश्य को सुरक्षित रूप से नेविगेट करने के लिए AI जागरूकता और मजबूत साइबर सुरक्षा प्रथाओं के साथ व्यक्तियों को सशक्त बनाना। हम स्कूलों और ग्रामीण समुदायों में विशेष कार्यशालाएं आयोजित करते हैं।",
    "prog.education_desc": "शिक्षण सामग्री का वितरण, सामुदायिक पुस्तकालयों की स्थापना और छात्रवृत्ति प्रदान करना ताकि यह सुनिश्चित हो सके कि वित्तीय बाधाएं कभी भी बच्चे के गुणवत्तापूर्ण शिक्षा के अधिकार में बाधा न बनें।",
    "prog.skills_desc": "युवाओं के लिए विशेष व्यावसायिक प्रशिक्षण कार्यक्रम, जो रोजगार बढ़ाने और उद्यमिता को बढ़ावा देने के लिए पारंपरिक शिल्प और आधुनिक डिजिटल कौशल दोनों पर ध्यान केंद्रित करते हैं।",
    "prog.welfare_desc": "कानूनी जागरूकता, स्वास्थ्य शिविरों और सशक्तिकरण पहलों के माध्यम से सुरक्षित पारिस्थितिकी तंत्र बनाना जिसका उद्देश्य महिलाओं का उत्थान करना और बच्चों के अधिकारों की रक्षा करना है।",
    "cybersetu.flagship": "प्रमुख कार्यक्रम",
    "cybersetu.title": "साइबर सेतु AI+",
    "cybersetu.subtitle": "तकनीकी प्रगति और उपयोगकर्ता जागरूकता के बीच की खाई को पाटना। स्कूलों, ग्रामीण समुदायों और संस्थानों को AI और साइबर सुरक्षा को सुरक्षित रूप से नेविगेट करने के उपकरणों से लैस करना।",
    "cybersetu.feature1_title": "साइबर सुरक्षा",
    "cybersetu.feature1_desc": "व्यक्तिगत डेटा की सुरक्षा, फिशिंग की पहचान और सुरक्षित ब्राउज़िंग आदतें।",
    "cybersetu.feature2_title": "AI साक्षरता",
    "cybersetu.feature2_desc": "आर्टिफिशियल इंटेलिजेंस, इसके प्रभाव और नैतिक उपयोग को समझना।",
    "cybersetu.feature3_title": "सामुदायिक कार्यशालाएं",
    "cybersetu.feature3_desc": "छात्रों, शिक्षकों और अभिभावकों के लिए विशेष इंटरैक्टिव सत्र।",
    "cybersetu.why_title": "साइबर सेतु AI+ क्यों?",
    "cybersetu.why_desc": "जैसे-जैसे पूरे भारत में डिजिटल परिवर्तन तेज हो रहा है, इंटरनेट का उपयोग तेजी से बढ़ रहा है। हालाँकि, डिजिटल साक्षरता उसी गति से नहीं बढ़ रही है, जिससे साइबर धोखाधड़ी, गलत सूचना और असुरक्षित ऑनलाइन प्रथाओं के मामले बढ़ रहे हैं।",
    "cybersetu.why_desc2": "साइबर सेतु AI+ (साइबर ब्रिज) ज्ञान के मार्ग के रूप में कार्य करता है। हमारा लक्ष्य है:",
    "cybersetu.point1": "आम जनता के लिए जटिल AI अवधारणाओं को सरल बनाना।",
    "cybersetu.point2": "स्कूलों और छोटे व्यवसायों के लिए कार्रवाई योग्य साइबर सुरक्षा प्रोटोकॉल प्रदान करना।",
    "cybersetu.point3": "शिक्षकों को उनके समुदायों में 'साइबर एंबेसडर' बनने के लिए प्रशिक्षित करना।",
    "cybersetu.workshop_note": "कार्यशालाएं आमतौर पर सरकारी स्कूलों और वंचित समुदायों को निःशुल्क प्रदान की जाती हैं।",
    "involved.title": "शामिल हों",
    "involved.subtitle": "वास्तविक परिवर्तन के लिए सामूहिक कार्रवाई की आवश्यकता होती है। समुदायों में हमारे प्रभाव को बढ़ाने के लिए शिकवा फाउंडेशन के साथ हाथ मिलाएं।",
    "involved.tab_partner": "साझेदार और CSR",
    "involved.tab_volunteer": "स्वयंसेवक",
    "involved.tab_intern": "इंटर्नशिप",
    "involved.partner_title": "कॉर्पोरेट और संस्थागत भागीदारी",
    "involved.partner_desc": "हम कॉर्पोरेट घरानों का हमारे पारदर्शी और उच्च-प्रभाव वाले कार्यक्रमों के माध्यम से अपने CSR जनादेशों को पूरा करने के लिए स्वागत करते हैं। साइबर सेतु AI+ की तैनाती या शैक्षिक बुनियादी ढांचे को वित्तपोषित करने के लिए हमारे साथ साझेदारी करें।",
    "involved.volunteer_title": "स्वयंसेवक बनें",
    "involved.volunteer_desc": "समय और कौशल का उपहार दें। चाहे आप एक IT पेशेवर हों जो साइबर सुरक्षा सिखाना चाहते हों या सामुदायिक आयोजन के प्रति उत्साही हों, हमें आपकी आवश्यकता है।",
    "involved.intern_title": "छात्र इंटर्नशिप",
    "involved.intern_desc": "गैर-लाभकारी क्षेत्र में वास्तविक दुनिया का अनुभव प्राप्त करें। हम कार्यक्रम प्रबंधन, डिजिटल मार्केटिंग, सामग्री निर्माण और तकनीकी प्रशिक्षण में इंटर्नशिप प्रदान करते।",
    "gallery.title": "कार्रवाई में हमारा प्रभाव",
    "gallery.subtitle": "हमारी हालिया कार्यशालाओं, सामुदायिक अभियानों और शैक्षिक कार्यक्रमों की झलकियाँ।",
    "contact.title": "संपर्क करें",
    "contact.subtitle": "कोई प्रश्न है या साथ काम करना चाहते हैं? हमें आपसे सुनना अच्छा लगेगा।",
    "contact.get_in_touch": "संपर्क करें",
    "contact.hq": "हमारा मुख्यालय",
    "contact.call_us": "हमें कॉल करें",
    "contact.email": "ईमेल",
    "contact.hours": "कार्य के घंटे",
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
