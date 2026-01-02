import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";

function AppRoutes() {
  const useHash = import.meta.env.MODE === "production";
  const routerHook = useHash ? useHashLocation : undefined;
  const rawBase = import.meta.env.BASE_URL || "/";
  // With hash routing, keep base empty so hash drives routing on Pages.
  const normalizedBase = useHash ? "" : (rawBase.replace(/\/+$/, "") || "/");
  const basePath = normalizedBase === "/" ? "" : normalizedBase;

  return (
    <WouterRouter base={basePath} hook={routerHook}>
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
