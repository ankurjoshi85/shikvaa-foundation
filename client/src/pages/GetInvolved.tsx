import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";
import { HandHeart, Building2, GraduationCap } from "lucide-react";

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary py-20 text-center px-4 border-b border-border">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Get Involved</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real change requires collective action. Join hands with Shikvaa Foundation to amplify our impact across communities.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="partner" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent mb-12">
            <TabsTrigger value="partner" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border py-4 text-base rounded-xl">
              <Building2 className="w-5 h-5 mr-2" /> Partner & CSR
            </TabsTrigger>
            <TabsTrigger value="volunteer" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border py-4 text-base rounded-xl">
              <HandHeart className="w-5 h-5 mr-2" /> Volunteer
            </TabsTrigger>
            <TabsTrigger value="intern" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border py-4 text-base rounded-xl">
              <GraduationCap className="w-5 h-5 mr-2" /> Internships
            </TabsTrigger>
          </TabsList>
          
          <div className="bg-card border border-border rounded-3xl p-6 md:p-12 shadow-xl shadow-black/5">
            <TabsContent value="partner" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Corporate & Institutional Partnerships</h2>
                <p className="text-muted-foreground">
                  We welcome corporations to fulfill their CSR mandates through our transparent and high-impact programs. Partner with us to fund Cyber Setu AI+ deployments or educational infrastructure.
                </p>
              </div>
              <ContactForm type="partner" title="Submit Partnership Inquiry" />
            </TabsContent>

            <TabsContent value="volunteer" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Become a Volunteer</h2>
                <p className="text-muted-foreground">
                  Give the gift of time and skill. Whether you're an IT professional wanting to teach cybersecurity or someone passionate about community organizing, we need you.
                </p>
              </div>
              <ContactForm type="volunteer" title="Register as Volunteer" />
            </TabsContent>

            <TabsContent value="intern" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Student Internships</h2>
                <p className="text-muted-foreground">
                  Gain real-world experience in the non-profit sector. We offer internships in program management, digital marketing, content creation, and technical training.
                </p>
              </div>
              <ContactForm type="internship" title="Apply for Internship" />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
