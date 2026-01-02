import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";

const inferredBase =
  typeof window !== "undefined" && window.location.pathname.includes("mailguard_overview")
    ? "/mailguard_overview"
    : "/";
const rawBase = import.meta.env.BASE_URL || inferredBase;
const normalizedBase = rawBase.replace(/\/+$/, "") || "/";
const basePath = normalizedBase === "/" ? "" : normalizedBase;

function AppRoutes() {
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRoutes />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
