import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import { AmbientGlow } from "./ui/floating-shapes"

const reviews = [
  {
    name: "Ahsan",
    username: "@product-manager",
    body: "The AI Report Analyzer turned raw PDFs into clear summaries quickly. Clean UI, fast responses, and reliable output.",
    img: "https://avatar.vercel.sh/ahsan",
  },
  {
    name: "Sara",
    username: "@content-lead",
    body: "Image Enhancer made low-quality visuals usable for campaigns in seconds. The quality boost was obvious and consistent.",
    img: "https://avatar.vercel.sh/sara",
  },
  {
    name: "Hamza",
    username: "@founder-bytewise",
    body: "Our company site reflects our AI services clearly. Strong structure, smooth interactions, and great performance across devices.",
    img: "https://avatar.vercel.sh/hamza",
  },
  {
    name: "Mina",
    username: "@seo-specialist",
    body: "The Bytewise build was SEO-conscious from the start. Better discoverability, cleaner metadata, and improved page speed.",
    img: "https://avatar.vercel.sh/mina",
  },
  {
    name: "Danish",
    username: "@huskywears-team",
    body: "Husky Wears now has a solid storefront with smoother shopping flow, plugin integrations, and stable hosting setup.",
    img: "https://avatar.vercel.sh/danish",
  },
  {
    name: "Zoya",
    username: "@ops-support",
    body: "From deployment to maintenance, everything was handled professionally. The projects are practical and production-ready.",
    img: "https://avatar.vercel.sh/zoya",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  // img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "card-3d relative h-full w-64 cursor-pointer overflow-hidden rounded-2xl border border-primary/20 p-4",
        "glass-card hover:border-primary/40",
      )}
    >
      <div className="flex flex-row items-center gap-2"> 
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-primary/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-muted-foreground">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full max-w-6xl xl:max-w-7xl 2xl:max-w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}



const Testimonials = () => {
  return (
   <section
      id="Testimonials"
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
        Testimonials
      </div>
      <h1
        className={cn(
          "heading-glow text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl",
          "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both [animation-delay:75ms] mb-8",
        )}
      >
        Client & Team Feedback
      </h1>
      <MarqueeDemo />
    </section>
  )
}

export default Testimonials
