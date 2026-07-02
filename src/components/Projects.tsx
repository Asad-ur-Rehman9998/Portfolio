import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Safari } from "@/components/ui/safari"
import { AmbientGlow } from "@/components/ui/floating-shapes"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

type ProjectShowcase = {
  badge: string
  title: string
  description: string
  url: string
  terminalHeading: string
  projects: {
    name: string
    stack: string
  }[]
}

const projectShowcases: ProjectShowcase[] = [ 
  {
  "badge": "Project 1",
  "title": "GenAI Interview Studio",
  "description": "GenAI Interview Studio is a full-stack AI web app that turns PDF resumes into personalized, day-by-day interview prep plans. It analyzes resumes vs job descriptions, identifies skill gaps, generates technical & behavioral questions, and delivers a structured prep roadmap. Built with React.js (frontend), Node.js/Express (backend), MongoDB, and Google Gemini AI. Frontend hosted on Vercel, backend on Render.",
  "url": "https://gen-ai-mauve.vercel.app/",
  "terminalHeading": "// Selected AI-powered projects",
  "projects": [
    { "name": "GenAI Interview Studio", "stack": "React.js, Node.js, Express, MongoDB, Google Gemini, Vercel, Render" },
    { "name": "Resume Analysis Engine", "stack": "PDF-Parse, Multer, AI JSON Schema, Zod" },
    { "name": "Daily Prep Planner", "stack": "React.js, Dynamic Forms, Glassmorphic UI, JWT Authentication" }
  ]
},
  {
    badge: "Project 2",
    title: "Report Analyzer",
    description:
      "AI Report Analyzer is a web application that allows users to upload reports and receive AI-powered insights and summaries in real time. It is built using React.js for the frontend and deployed on Vercel for fast performance. The app integrates AI APIs for intelligent document analysis and focuses on clean UI, responsiveness, and efficient API handling.",
    url: "https://ai-report-analyzer.vercel.app/",
    terminalHeading: "// Selected AI-powered projects",
    projects: [
      { name: "AI Report Analyzer", stack: "React.js, OpenAI, Vercel" },
      {
        name: "Report Summarizer",
        stack: "pdf-to-text, ",
      },
      { name: "Report Generator", stack: "Js pdf," },
    ],
  },
  {
    badge: "Project 3",
    title: "Image Enhancer ",
    description:
      "Enhance your images instantly with AI-powered upscaling, clarity, and vibrance. Upload JPG, PNG, or GIF files and get professional-quality results, perfect for photographers, designers, or anyone looking to improve their visuals.",
    url: "https://image-enhancer-sigma-ashy.vercel.app/",
    terminalHeading: "// Selected image processing projects",
    projects: [
      { name: "Image Enhancer", stack: "React.js, OpenAI, Vercel" },
      {
        name: "AI Art Generator",
        stack: "Picwish Api integration",
      },
      { name: "Photo Retoucher", stack: "Vercel Deployment" },
    ],
  },
  {
    badge: "Project 4",
    title: "Abstrakt Homes",
    description:
      "Designed and developed a modern, professional website for a custom home builder, showcasing luxury residential projects, renovations, and high-performance homes. The website features a clean user experience, project portfolio galleries, service pages, and lead-generation contact forms to help convert visitors into clients.",
    url: "https://abstrakthomes.com/",
    terminalHeading: "// UPVC Doors And Windows Company",
    projects: [
      { name: "Web & AI Solutions", stack: "Next.js, Swiper.js" },
      { name: "Content Management System", stack: "Contentful, Typescript" },
      { name: "SEO Optimization", stack: "Google Search Console, Analytics" },
    ],
  },
  // {
  //   badge: "Project 5",
  //   title: "Husky Wears",
  //   description:
  //     "Husky Wears is a premium apparel brand specializing in stylish and durable garments, including hoodies, jackets, T‑shirts, and activewear. They offer both regular and custom orders, focusing on quality, comfort, and customer satisfaction.",
  //   url: "https://huskywears.com/",
  //   terminalHeading: "// E-commerce Fashion Brand",
  //   projects: [
  //     { name: "Online Store", stack: "Wordpress, WooCommerce" },
  //     { name: "Plugins", stack: " Third-party, Elementor" },
  //     { name: "Hosting", stack: "Hostinger, Cloudflare" },
  //     { name: "Database", stack: "mysql" },
  //   ],
  // },
]

const Projects = () => {
  return (
    <section
      id="Projects"
      className="relative w-full px-4 pt-12 pb-12 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20 xl:px-16 xl:pt-24 2xl:px-20 2xl:pt-28 2xl:pb-20"
    >
      <AmbientGlow />

      <div className="mx-auto flex w-full max-w-6xl xl:max-w-7xl 2xl:max-w-full flex-col gap-12 sm:gap-14 lg:gap-16 xl:gap-16 2xl:gap-20">
        {projectShowcases.map((showcase, index) => {
          const isReversed = index % 2 === 1

          return (
            <div
              key={showcase.title}
              className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14 2xl:gap-16"
            >
              <div
                className={cn(
                  "flex flex-col text-left",
                  isReversed && "lg:order-2",
                )}
              >
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
                  {showcase.badge}
                </div>

            <h2
              className={cn(
                "heading-glow text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl",
                "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:75ms]",
              )}
            >
              {showcase.title}
            </h2>

            <p
              className={cn(
                "mt-5 max-w-xl text-base text-muted-foreground lg:text-lg xl:text-lg 2xl:text-xl",
                "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:150ms]",
              )}
            >
              {showcase.description}
            </p>
              </div>

              <div className={cn("card-3d w-full space-y-4", isReversed && "lg:order-1")}>
                <Safari url={showcase.url} className="w-full drop-shadow-[0_20px_40px_oklch(0.68_0.28_330_/_25%)]">
                  <div className="flex h-full w-full items-center justify-center p-1.5 sm:p-4">
                    <Terminal className="h-full min-h-0 max-h-none w-full max-w-none border-none bg-card/90 shadow-[0_0_60px_oklch(0.68_0.28_330_/_20%)] [&_pre]:p-2 sm:[&_pre]:p-4 [&_code]:gap-y-0.5 [&_code]:text-[11px] sm:[&_code]:text-sm">
                      <TypingAnimation className="text-emerald-600 dark:text-emerald-400 sm:hidden">
                        // Selected projects
                      </TypingAnimation>
                      <TypingAnimation className="hidden text-emerald-600 dark:text-emerald-400 sm:inline">
                        {showcase.terminalHeading}
                      </TypingAnimation>
                      <AnimatedSpan>
                        <span className="text-blue-600 dark:text-blue-400">
                          const
                        </span>{" "}
                        <span className="text-amber-500 dark:text-amber-400">
                          project_detail
                        </span>{" "}
                        <span className="text-muted-foreground">= [</span>
                      </AnimatedSpan>
                      {showcase.projects.map((project, projectIndex) => (
                        <AnimatedSpan
                          key={project.name}
                          className={cn(
                            "pl-2 sm:pl-4",
                            projectIndex > 1 && "hidden sm:block",
                          )}
                        >
                          <span className="text-emerald-500">
                            "{project.name}"
                          </span>
                          <span className="hidden text-muted-foreground sm:inline">
                            , // {project.stack}
                          </span>
                        </AnimatedSpan>
                      ))}
                      <AnimatedSpan>
                        <span className="text-muted-foreground">]</span>
                      </AnimatedSpan>
                    </Terminal>
                  </div>
                </Safari>
                <div
                  className={cn(
                    "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:225ms]",
                    isReversed ? "lg:text-left" : "lg:text-right",
                  )}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-fit gap-2"
                  >
                    <a href={showcase.url} target="_blank" rel="noreferrer">
                      Live Preview
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
