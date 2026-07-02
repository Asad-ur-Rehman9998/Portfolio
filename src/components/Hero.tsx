import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "@/components/Typewriter";
import { AmbientGlow } from "@/components/ui/floating-shapes";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/ui/terminal"
export default function Hero() {
  return (
    <section
      id="Home"
      className="relative flex w-full items-start px-4 pt-12 pb-6 sm:px-8 sm:pt-16 sm:pb-10 lg:px-14 lg:pb-6 xl:px-16 2xl:px-20 xl:pt-24 2xl:pt-28 xl:pb-10 2xl:pb-12"
    >
      <AmbientGlow variant="alt" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:max-w-7xl xl:gap-14 2xl:gap-16">
        <div className="flex flex-col text-left">
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
            Available for work
          </div>

          <h1
            className={cn(
              "heading-glow text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
              "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:75ms]",
            )}
          >
            Full Stack{" "}
            <Typewriter
              startAfterMs={400}
              highlightRange={{
                start: 0,
                end: 2,
                className:
                  "gradient-text",
              }}
            >
              AI Web Developer
            </Typewriter>
          </h1>

          <p
            className={cn(
              "mt-5 max-w-lg text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl",
              "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:150ms]",
            )}
          >
            I build fast, intelligent web applications that scale. From idea to
            production—clean code, modern stack, and a focus on what users need.
          </p>

          <div
            className={cn(
              "mt-10 flex flex-wrap items-center gap-3",
              "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:225ms]",
            )}
          >
            <Button asChild size="lg" className="gap-2">
              <a
                href="About"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("About");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
                <ArrowRight className="size-4" />
              </a>
            </Button>
<Button asChild variant="outline" size="lg" className="gap-2">
  <a
    href="/Asad-ur-Rahman-Resume.pdf"
    download="Asad-ur-Rahman-Resume.pdf"
  >
    Download Resume
  </a>
</Button>
          </div>
        </div>
        
        <div className="card-3d w-full max-w-lg lg:max-w-md xl:max-w-lg">
          <Terminal>
            <TypingAnimation className="text-green-600 dark:text-green-400">
              // Full Stack AI Web Developer
            </TypingAnimation>
            <AnimatedSpan>
              <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
              <span className="text-amber-500 dark:text-amber-400">dev</span>{" "}
              <span className="text-muted-foreground">= {"{"}</span>
            </AnimatedSpan>
            <AnimatedSpan>
              <span className="text-muted-foreground">  expertise:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">"5+ years"</span>
              <span className="text-muted-foreground">,</span>
            </AnimatedSpan>
            <AnimatedSpan>
              <span className="text-muted-foreground">  focus:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">"AI-Powered Web & Mobile"</span>
              <span className="text-muted-foreground">,</span>
            </AnimatedSpan>
            <AnimatedSpan>
              <span className="text-muted-foreground">  stack:</span>{" "}
              <span className="text-amber-500 dark:text-amber-400">["React", "Next.js", "Node.js", "OpenAI"]</span>
              <span className="text-muted-foreground">,</span>
            </AnimatedSpan>
            <AnimatedSpan>
              <span className="text-muted-foreground">  impact:</span>{" "}
              <span className="text-muted-foreground">() {"=>"} {"{"}</span>
            </AnimatedSpan>
            <AnimatedSpan>
              <span className="text-muted-foreground">    </span>
              <span className="text-blue-600 dark:text-blue-400">return</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">"Scalable AI solutions"</span>
              <span className="text-muted-foreground">;</span>
            </AnimatedSpan>
            <AnimatedSpan className="text-muted-foreground">  {"}"}</AnimatedSpan>
            <AnimatedSpan className="text-muted-foreground">{"}"};</AnimatedSpan>
          </Terminal>
        </div>
      </div>
    </section>
  );
}
