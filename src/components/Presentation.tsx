import { useCallback, useEffect, useState } from "react";
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
import Slide9 from "@/slides/Slide9";
import Slide10 from "@/slides/Slide10";
import Slide11 from "@/slides/Slide11";
import { ScaledSlide } from "@/components/ScaledSlide";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11];
const TOTAL = slides.length;

const MINT = "#A8E6CF";
const LIGHT_GRAY = "#F1F1F1";

export function Presentation() {
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

  const ActiveSlide = slides[current];

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <ScaledSlide>
          <ActiveSlide />
        </ScaledSlide>
      </motion.div>

      {/* Chevrons */}
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

      {/* Progress dots */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          alignItems: "center",
          zIndex: 50,
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
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
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
