import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";
import { useTranslation } from "@/lib/i18n";
import { HandHeart, Building2, GraduationCap } from "lucide-react";

export default function GetInvolved() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary py-20 text-center px-4 border-b border-border">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">{t("involved.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("involved.subtitle")}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="partner" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent mb-12">
            <TabsTrigger value="partner" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border py-4 text-base rounded-xl">
              <Building2 className="w-5 h-5 mr-2" /> {t("involved.tab_partner")}
            </TabsTrigger>
            <TabsTrigger value="volunteer" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border py-4 text-base rounded-xl">
              <HandHeart className="w-5 h-5 mr-2" /> {t("involved.tab_volunteer")}
            </TabsTrigger>
            <TabsTrigger value="intern" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border py-4 text-base rounded-xl">
              <GraduationCap className="w-5 h-5 mr-2" /> {t("involved.tab_intern")}
            </TabsTrigger>
          </TabsList>
          
          <div className="bg-card border border-border rounded-3xl p-6 md:p-12 shadow-xl shadow-black/5">
            <TabsContent value="partner" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{t("involved.partner_title")}</h2>
                <p className="text-muted-foreground">
                  {t("involved.partner_desc")}
                </p>
              </div>
              <ContactForm type="partner" title={t("btn.submit_partnership")} />
            </TabsContent>

            <TabsContent value="volunteer" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{t("involved.volunteer_title")}</h2>
                <p className="text-muted-foreground">
                  {t("involved.volunteer_desc")}
                </p>
              </div>
              <ContactForm type="volunteer" title={t("btn.register_volunteer")} />
            </TabsContent>

            <TabsContent value="intern" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{t("involved.intern_title")}</h2>
                <p className="text-muted-foreground">
                  {t("involved.intern_desc")}
                </p>
              </div>
              <ContactForm type="internship" title={t("btn.apply_internship")} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
