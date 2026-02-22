import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { TranslationProvider } from "@/lib/i18n";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import CyberSetu from "@/pages/CyberSetu";
import GetInvolved from "@/pages/GetInvolved";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import { Layout } from "@/components/layout/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/cybersetu" component={CyberSetu} />
        <Route path="/get-involved" component={GetInvolved} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TranslationProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </QueryClientProvider>
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;
