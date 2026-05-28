import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Gallery from "@/pages/gallery";
import GalleryCategory from "@/pages/gallery-category";
import PartyFavorsBoys from "@/pages/party-favors-boys";
import PartyPacksBoxOnly from "@/pages/party-packs-box-only";
import PartyPacks3DCombo from "@/pages/party-packs-3d-combo";
import Packages from "@/pages/packages";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/gallery/party-favors/boys" component={PartyFavorsBoys} />
      <Route path="/gallery/party-packs/box-only" component={PartyPacksBoxOnly} />
      <Route path="/gallery/party-packs/3d-combo" component={PartyPacks3DCombo} />
      <Route path="/gallery/:slug" component={GalleryCategory} />
      <Route path="/packages" component={Packages} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
