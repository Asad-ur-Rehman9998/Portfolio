import { cn } from "@/lib/utils"
import { MagicCard } from "./ui/magic-card"
import { AmbientGlow } from "./ui/floating-shapes"
import {
  Code2,
  Server,
  Database,
  Brain,
  Wrench,
  Layers,
} from "lucide-react"

const expertiseItems = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, Next.js, TypeScript — building responsive, performant interfaces.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Express — scalable APIs and server-side logic.",
    tags: ["Node.js", "Express", "REST"],
  },
  {
    icon: Database,
    title: "Database",
    description: "MongoDB, PostgreSQL — data modeling and optimization.",
    tags: ["MongoDB", "PostgreSQL"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "OpenAI, LangChain — intelligent features and automation.",
    tags: ["OpenAI", "LangChain", "RAG"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    description: "Git, CI/CD, Docker — reliable deployment pipelines.",
    tags: ["Git", "Docker", "CI/CD"],
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "End-to-end solutions from idea to production.",
    tags: ["MERN", "Architecture"],
  },
]

const Expertise = () => {
  return (
    <section
      id="Expertise"
      className="relative flex w-full flex-col items-start px-4 pt-12 pb-12 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20 xl:px-16 xl:pt-24 2xl:px-20 2xl:pt-28 2xl:pb-20"
    >
      <AmbientGlow variant="alt" />
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
        Expertise
      </div>
      <h1
        className={cn(
          "heading-glow text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl",
          "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:75ms] mb-8",
        )}
      >
        Core Expertise
      </h1>

      <div className="grid w-full max-w-6xl xl:max-w-7xl 2xl:max-w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-5 2xl:gap-6">
        {expertiseItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className={cn(
                "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both",
              )}
              style={{ animationDelay: `${150 + index * 50}ms` }}
            >
              <MagicCard className="card-3d h-full rounded-2xl border border-primary/20 p-0 transition-shadow duration-300 hover:shadow-[0_20px_40px_oklch(0.68_0.28_330_/_20%)]">
              <div className="relative flex flex-col gap-3 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-[0_4px_12px_oklch(0.68_0.28_330_/_15%)]">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-primary/20 bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary/80 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MagicCard>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Expertise
