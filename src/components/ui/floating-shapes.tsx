import { cn } from "@/lib/utils"

export function FloatingShapes({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="shape-float shape-cube absolute top-[12%] left-[8%] h-10 w-10 opacity-40" />
      <div className="shape-float-delayed shape-sphere absolute top-[22%] right-[12%] h-14 w-14 opacity-30" />
      <div className="shape-float-slow shape-ring absolute bottom-[30%] left-[15%] h-16 w-16 opacity-25" />
      <div className="shape-float shape-cube absolute bottom-[18%] right-[20%] h-8 w-8 opacity-35" />
      <div className="shape-float-delayed shape-sphere absolute top-[55%] left-[45%] h-6 w-6 opacity-20" />
      <div className="shape-float-slow shape-ring absolute top-[8%] right-[35%] h-12 w-12 opacity-20" />
    </div>
  )
}

export function AmbientGlow({
  className,
  variant = "default",
}: {
  className?: string
  variant?: "default" | "alt"
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/15 xl:h-[40rem] xl:w-[40rem] 2xl:h-[48rem] 2xl:w-[48rem]" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/25 blur-3xl dark:bg-accent/15 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96" />
      {variant === "alt" && (
        <div className="absolute top-1/4 left-1/4 h-48 w-48 rounded-full bg-chart-4/20 blur-3xl xl:h-64 xl:w-64" />
      )}
    </div>
  )
}
