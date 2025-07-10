import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import Home from "@/pages/Home";
import Intro from "@/pages/Intro";
import Structures from "@/pages/Structures";
import Hormonal from "@/pages/Hormonal";
import Raas from "@/pages/Raas";
import Jga from "@/pages/Jga";
import Summary from "@/pages/Summary";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/intro" component={Intro} />
      <Route path="/structures" component={Structures} />
      <Route path="/hormonal" component={Hormonal} />
      <Route path="/raas" component={Raas} />
      <Route path="/jga" component={Jga} />
      <Route path="/summary" component={Summary} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen text-white">
          <FloatingShapes />
          <Navigation />
          <main className="pt-20">
            <Router />
          </main>
          <Toaster />
          <Analytics />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
