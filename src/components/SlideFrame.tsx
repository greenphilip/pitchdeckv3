import { ReactNode } from "react";

type Variant = "minimal" | "technical" | "technical-light";

interface SlideFrameProps {
  children: ReactNode;
  variant: Variant;
  slideNumber: number;
  totalSlides: number;
}

const NAVY = "#0F2A4D";
const FOREGROUND = "#F1F1F1";
const MINT = "#A8E6CF";
const BLUE = "#539ADB";

// Tiny inline SVG noise — kills banding on projectors, no asset round-trip.
const NOISE_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>`;

export function SlideFrame({ children, variant, slideNumber, totalSlides }: SlideFrameProps) {
  const showGrid = variant === "technical" || variant === "technical-light";
  const gridOpacity = variant === "technical" ? 0.07 : 0.03;
  const showSlideNumber = showGrid;
  const showHairline = showGrid;

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        background: NAVY,
        color: FOREGROUND,
        padding: 80,
        boxSizing: "border-box",
      }}
    >
      {/* Atmospheric glows — both variants */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 18% 0%, rgba(109,212,173,0.10), transparent 55%), radial-gradient(ellipse 65% 55% at 100% 100%, rgba(83,154,219,0.12), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Noise overlay — kills banding, adds tactile depth */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url("${NOISE_SVG}")`,
          backgroundSize: "160px 160px",
          opacity: 0.18,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {variant === "minimal" && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            // Soft inner vignette focuses the eye
            boxShadow: "inset 0 0 220px 40px rgba(0,0,0,0.35)",
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

      {showHairline && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 24,
            zIndex: 0,
            border: `1px solid ${BLUE}1A`,
            pointerEvents: "none",
          }}
        />
      )}

      {showSlideNumber && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 32,
            right: 32,
            zIndex: 2,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 16,
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
          maxWidth: 1760,
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
