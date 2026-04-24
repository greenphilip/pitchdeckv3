import { ReactNode } from "react";
import { ScaledSlide } from "@/components/ScaledSlide";
import { useIsMobile } from "@/hooks/useIsMobile";

/**
 * Chooses how a slide renders:
 * - Desktop / tablet (>768px): the existing fixed 1920x1080 PowerPoint canvas,
 *   uniformly scaled to the viewport (preserves projector behaviour).
 * - Mobile (≤768px): the slide content renders directly into a fluid,
 *   vertically scrollable container at native size, so SlideFrame's mobile
 *   branch + per-slide useIsMobile branches actually pay off.
 */
export function ResponsiveSlideShell({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return <ScaledSlide>{children}</ScaledSlide>;
  }

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#143560",
        overflowY: "auto",
        overflowX: "hidden",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
    </div>
  );
}
