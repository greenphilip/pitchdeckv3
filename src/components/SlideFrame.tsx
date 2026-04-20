import { ReactNode } from "react";

type Variant = "minimal" | "technical" | "technical-light";

interface SlideFrameProps {
  children: ReactNode;
  variant: Variant;
  slideNumber: number;
  totalSlides: number;
}

const NAVY = "#143560";
const FOREGROUND = "#F1F1F1";
const MINT = "#A8E6CF";
const BLUE = "#539ADB";

export function SlideFrame({ children, variant, slideNumber, totalSlides }: SlideFrameProps) {
  const showGrid = variant === "technical" || variant === "technical-light";
  const gridOpacity = variant === "technical" ? 0.07 : 0.03;
  const showSlideNumber = showGrid;

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: NAVY,
        color: FOREGROUND,
        padding: "clamp(32px, 5vw, 80px)",
        boxSizing: "border-box",
      }}
    >
      {variant === "minimal" && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background: `radial-gradient(circle at 50% 45%, rgba(26, 63, 112, 0.25) 0%, ${NAVY} 70%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {showGrid && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `radial-gradient(circle, ${BLUE} 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            opacity: gridOpacity,
            pointerEvents: "none",
          }}
        />
      )}

      {showSlideNumber && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "clamp(16px, 2vw, 28px)",
            right: "clamp(16px, 2vw, 28px)",
            zIndex: 0,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(10px, 0.8vw, 12px)",
            color: MINT,
            opacity: 0.6,
            letterSpacing: "0.05em",
          }}
        >
          SLIDE {slideNumber} / {totalSlides}
        </div>
      )}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
