import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1 from "@/slides/Slide1";
import Slide2 from "@/slides/Slide2";
import Slide3 from "@/slides/Slide3";
import Slide4 from "@/slides/Slide4";
import Slide5 from "@/slides/Slide5";
import Slide6 from "@/slides/Slide6";
import Slide7 from "@/slides/Slide7";
import Slide8 from "@/slides/Slide8";
import { ResponsiveSlideShell } from "@/components/ResponsiveSlideShell";
import { useIsMobile } from "@/hooks/useIsMobile";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
const TOTAL = slides.length;

const MINT = "#6DD4AD";
const LIGHT_GRAY = "#F1F1F1";

export function Presentation() {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const [overview, setOverview] = useState(false);
  const [blackScreen, setBlackScreen] = useState(false);

  const goTo = useCallback((idx: number) => {
    setCurrent(Math.max(0, Math.min(TOTAL - 1, idx)));
  }, []);

  const next = useCallback(() => setCurrent((c) => Math.min(TOTAL - 1, c + 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Ignore when typing in inputs
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "Enter":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(TOTAL - 1);
          break;
        case "Escape":
          e.preventDefault();
          setOverview((o) => !o);
          break;
        case "o":
        case "O":
          setOverview((o) => !o);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "b":
        case "B":
          setBlackScreen((b) => !b);
          break;
        default:
          if (/^[1-9]$/.test(e.key)) {
            goTo(parseInt(e.key, 10) - 1);
          }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, toggleFullscreen]);

  // Touch / swipe handling — horizontal swipes navigate, vertical swipes scroll the slide
  const touchStart = useRef<{ x: number; y: number; t: number } | null>(null);
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  }, []);
  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStart.current;
      touchStart.current = null;
      if (!start) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      const dt = Date.now() - start.t;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      // Only treat as swipe if horizontal-dominant, ≥50px, and reasonably quick
      if (absX < 50) return;
      if (absX < absY * 1.2) return; // vertical-dominant: let scroll happen
      if (dt > 700) return;
      if (dx < 0) next();
      else prev();
    },
    [next, prev]
  );

  const ActiveSlide = slides[current];

  return (
    <div
      style={{ position: "relative", width: "100vw", height: "100dvh", overflow: "hidden" }}
      onTouchStart={isMobile ? onTouchStart : undefined}
      onTouchEnd={isMobile ? onTouchEnd : undefined}
    >
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <ResponsiveSlideShell>
          <ActiveSlide />
        </ResponsiveSlideShell>
      </motion.div>

      {/* Chevrons — desktop only (mobile uses swipe) */}
      {!isMobile && (
        <>
          <button
            aria-label="Previous slide"
            onClick={prev}
            disabled={current === 0}
            style={chevronStyle("left")}
            className="group"
          >
            <ChevronLeft size={32} color={LIGHT_GRAY} />
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            disabled={current === TOTAL - 1}
            style={chevronStyle("right")}
            className="group"
          >
            <ChevronRight size={32} color={LIGHT_GRAY} />
          </button>
        </>
      )}

      {/* Progress dots */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? 12 : 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: isMobile ? 14 : 10,
          alignItems: "center",
          zIndex: 50,
          paddingBottom: isMobile ? "env(safe-area-inset-bottom)" : 0,
          padding: isMobile ? "8px 14px" : 0,
          background: isMobile ? "rgba(20, 53, 96, 0.55)" : "transparent",
          borderRadius: isMobile ? 999 : 0,
          backdropFilter: isMobile ? "blur(6px)" : undefined,
        }}
      >
        {slides.map((_, i) => {
          const active = i === current;
          return (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: active ? 10 : 8,
                height: active ? 10 : 8,
                borderRadius: "50%",
                background: active ? MINT : `rgba(241, 241, 241, 0.3)`,
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}
            />
          );
        })}
      </div>

      {/* Overview grid */}
      {overview && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20, 53, 96, 0.97)",
            zIndex: 200,
            padding: "clamp(24px, 4vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
          onClick={() => setOverview(false)}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: MINT,
              opacity: 0.7,
              fontSize: 12,
              letterSpacing: "0.1em",
            }}
          >
            OVERVIEW — CLICK A SLIDE OR PRESS ESC
          </div>
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
              gridTemplateRows: isMobile ? "repeat(4, 1fr)" : "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                  setOverview(false);
                }}
                style={{
                  background: "#0e2548",
                  border: i === current ? `2px solid ${MINT}` : "2px solid rgba(241,241,241,0.15)",
                  borderRadius: 8,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: LIGHT_GRAY,
                  fontFamily: "'Inter', sans-serif",
                  gap: 8,
                  transition: "border-color 0.2s",
                }}
              >
                <span style={{ fontSize: "clamp(24px, 3vw, 48px)", color: MINT, fontWeight: 600 }}>
                  {i + 1}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "'JetBrains Mono', monospace",
                    opacity: 0.6,
                  }}
                >
                  SLIDE {i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Black screen overlay */}
      {blackScreen && (
        <div
          onClick={() => setBlackScreen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "#000",
            zIndex: 999,
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
}

function chevronStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: 16,
    transform: "translateY(-50%)",
    background: "transparent",
    border: "none",
    padding: 12,
    cursor: "pointer",
    opacity: 0.3,
    transition: "opacity 0.2s",
    zIndex: 50,
  } as React.CSSProperties;
}
