import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import SplitType from 'split-type'
import { AmbientGlow } from "@/components/ui/floating-shapes";
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const splitTypeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = splitTypeRef.current;
    if (!el) return;
    const text = new SplitType(el, { types: 'chars' });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        markers: false
      },
      opacity: 0.2,
      stagger: 0.02,
    });
  }, []);
  return (
    <section
      id="About"
      className="relative flex w-full flex-col items-start px-4 pt-6 pb-12 sm:px-8 sm:pt-12 lg:px-14 lg:pt-16 xl:px-16 xl:pt-20 2xl:px-20 2xl:pt-24 2xl:pb-20"
    >
      <AmbientGlow />
      <div
        className={cn(
          "badge-glow mb-6 w-fit",
          "animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both",
        )}
      >
        <span className="relative flex   h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
        About
      </div>
        <h1 className={cn(
              "heading-glow text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
              "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:75ms] mb-5" ,
            )}> Architect & Builder</h1>
      <p
        className="glass-card max-w-6xl rounded-2xl p-6 text-left text-base font-bold leading-relaxed text-muted-foreground sm:p-8 sm:text-lg md:text-lg xl:text-lg 2xl:text-xl md:text-justify lg:text-lg 2xl:leading-relaxed"
        ref={splitTypeRef}
      >
        I am a passionate MERN Stack Developer with a strong interest in building modern, scalable, and user-friendly web applications. I specialize in MongoDB, Express.js, React.js, and Node.js, and I enjoy creating full-stack projects that solve real-world problems. Along with the MERN stack, I also explore AI integration in web applications to build smarter and more interactive systems. I continuously improve my skills by working on practical projects, learning new technologies, and focusing on writing clean, efficient, and maintainable code. My goal is to grow as a professional full-stack developer and build innovative digital solutions that make a real impact.
      </p>
    </section>
  );
};
