import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TypewriterProps {
  children: string;
  className?: string;
  cursorClassName?: string;
  speedMs?: number;
  cursorBlinkMs?: number;
  startAfterMs?: number;
  highlightRange?: { start: number; end: number; className: string };
}

export function Typewriter({
  children,
  className,
  cursorClassName,
  speedMs = 80,
  cursorBlinkMs = 530,
  startAfterMs = 0,
  highlightRange,
}: TypewriterProps) {
  const text = String(children);
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startAfterMs);
    return () => clearTimeout(t);
  }, [startAfterMs]);

  useEffect(() => {
    if (!started || index >= text.length) return;
    const t = setTimeout(() => setIndex((i) => i + 1), speedMs);
    return () => clearTimeout(t);
  }, [started, index, text.length, speedMs]);

  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), cursorBlinkMs);
    return () => clearInterval(id);
  }, [cursorBlinkMs]);

  const typed = text.slice(0, index);
  const isComplete = index >= text.length;

  const beforeHighlight = highlightRange
    ? typed.slice(0, Math.min(highlightRange.start, typed.length))
    : typed;
  const highlightPart =
    highlightRange && typed.length > highlightRange.start
      ? typed.slice(
          highlightRange.start,
          Math.min(highlightRange.end, typed.length)
        )
      : "";
  const afterHighlight =
    highlightRange && typed.length > highlightRange.end
      ? typed.slice(highlightRange.end)
      : "";

  return (
    <span className={cn("inline", className)}>
      {!highlightRange ? (
        typed
      ) : (
        <>
          {beforeHighlight}
          {highlightPart && (
            <span className={highlightRange.className}>{highlightPart}</span>
          )}
          {afterHighlight}
        </>
      )}
      <span
        className={cn(
          "ml-0.5 inline-block h-[1em] w-0.5 shrink-0 align-middle bg-current transition-opacity duration-75 md:w-1",
          cursorVisible && !isComplete ? "opacity-100" : "opacity-0",
          cursorClassName
        )}
        aria-hidden
      />
    </span>
  );
}
