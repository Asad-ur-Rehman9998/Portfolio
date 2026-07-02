import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Lenis from 'lenis'
import App from "./App.tsx";
import { ThemeProvider } from "@/context/theme-provider";
import GridSmallBackgroundDemo from "./components/grid-small-background-demo.tsx";
import { DockDemo } from "./components/Dock.tsx";
import { Header } from "./components/header-2.tsx";
import { SmoothCursor } from "@/components/ui/smooth-cursor"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SmoothCursor />
      <Header />
      <GridSmallBackgroundDemo>
        <App />
        <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100vw-1rem)] -translate-x-1/2 sm:bottom-8 sm:w-auto">
          <div className="mx-auto w-max max-w-full scale-90 sm:scale-100">
            <DockDemo />
          </div>
        </div>
      </GridSmallBackgroundDemo>
    </ThemeProvider>
  </StrictMode>,
);


// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
