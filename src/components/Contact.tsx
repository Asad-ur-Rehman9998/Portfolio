import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AmbientGlow } from "@/components/ui/floating-shapes";

const Contact = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect dark mode via tailwind's 'dark' class on <html>
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);

    // Listen for theme changes dynamically
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Contact" className="relative w-full px-4 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-16 lg:px-14 lg:pt-20 lg:pb-10 xl:px-16 xl:pt-24 xl:pb-24 2xl:px-20 2xl:pt-28 2xl:pb-56">
      <AmbientGlow />
      <div
        className={cn(
          "badge-glow mb-6 w-fit",
          "animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both",
        )}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
        Contact
      </div>
      <h1
        className={cn(
          "heading-glow text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl",
          "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:75ms] mb-5",
        )}
      >
       Let's Connect
      </h1>
      <div className="mx-auto w-full max-w-6xl xl:max-w-7xl 2xl:max-w-full">
        <div
          className={cn(
            "card-3d glass-card relative overflow-hidden rounded-3xl px-4 py-10 text-center sm:px-10 sm:py-16 lg:px-12 lg:py-20 xl:px-14 xl:py-24 2xl:px-16 2xl:py-28",
            "border-primary/20",
          )}
        >
          {/* Flickering Grid */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 sm:h-48 xl:h-64 2xl:h-80">
            <FlickeringGrid
              squareSize={4}
              gridGap={2}
              flickerChance={0.18}
              maxOpacity={0.22}
              color={isDark ? "#e879f9" : "#a855f7"}
              className="[mask-image:linear-gradient(to_bottom,black_15%,transparent_85%)]"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="heading-glow text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mt-16 sm:mt-20 font-semibold tracking-tight text-foreground">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground 2xl:text-lg">
              Have a project in mind or a question about web development?{" "}
              <a
                href="https://www.linkedin.com/in/asad-ur-rahman-5754432b4"
                target="_blank"
                rel="noreferrer"
              >
               <b className="gradient-text">Send me a direct message on LinkedIn</b>
              </a>{" "}
              and I&apos;d love to connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
