import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";

function AppRoutes() {
  const routerHook = import.meta.env.MODE === "production" ? useHashLocation : undefined;
  const rawBase = import.meta.env.BASE_URL || "/";
  const normalizedBase = rawBase.replace(/\/+$/, "") || "/";
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
