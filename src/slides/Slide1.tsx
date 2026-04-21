import { motion } from "framer-motion";
import { SlideFrame } from "@/components/SlideFrame";
import { GlacierMark } from "@/components/GlacierMark";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Slide1() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="minimal" slideNumber={1} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        {/* Top anchor: wordmark + glyph + tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EXPO_OUT }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(6px, 0.8vh, 10px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 0.9vw, 12px)",
            }}
          >
            <GlacierMark size={Math.round(isMobile ? 22 : 28)} color={MINT} strokeWidth={1.5} />
            <span
              style={{
                fontSize: "clamp(20px, 2.2vw, 32px)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: MINT,
              }}
            >
              Glacier
            </span>
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(13px, 0.95vw, 17px)",
              color: LIGHT,
              opacity: 0.55,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            ESG Reporting — Fast, Defensible
          </div>
        </motion.div>

        {/* Spacer above headline — explicit, not auto, to avoid big-screen voids */}
        <div style={{ height: "clamp(48px, 10vh, 140px)", flexShrink: 0 }} />

        {/* Center: headline block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(20px, 3.5vh, 44px)",
            maxWidth: "min(1500px, 92vw)",
            width: "100%",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EXPO_OUT }}
            style={{
              fontSize: "clamp(34px, 5.2vw, 104px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: LIGHT,
              margin: 0,
            }}
          >
            Between regulatory{" "}
            <span style={{ color: BLUE }}>chaos</span> and relentless{" "}
            <span style={{ color: MINT, position: "relative", display: "inline-block" }}>
              pressure
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: EXPO_OUT }}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "-0.08em",
                  height: 1,
                  background: MINT,
                  transformOrigin: "left",
                  display: "block",
                }}
              />
            </span>
            .
          </motion.h1>

          {/* Vertical accent line — signature motion */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.85, ease: EXPO_OUT }}
            style={{
              width: 1,
              height: "clamp(28px, 4vh, 44px)",
              background: MINT,
              opacity: 0.35,
              transformOrigin: "top",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: EXPO_OUT }}
            style={{
              fontSize: "clamp(16px, 1.5vw, 28px)",
              fontWeight: 400,
              lineHeight: 1.55,
              color: LIGHT,
              opacity: 0.75,
              margin: 0,
              maxWidth: "min(1000px, 85vw)",
            }}
          >
            Glacier helps companies get ESG reporting done —{" "}
            <span style={{ color: MINT, fontWeight: 600, opacity: 1 / 0.75 }}>faster</span>, with{" "}
            <span style={{ color: MINT, fontWeight: 700, opacity: 1 / 0.75 }}>
              quality they can defend
            </span>
            .
          </motion.p>
        </div>

        {/* Spacer below headline — explicit, not auto */}
        <div style={{ height: "clamp(48px, 8vh, 120px)", flexShrink: 0 }} />

        {/* Bottom anchor: meta with status dot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5, ease: EXPO_OUT }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(13px, 1vw, 18px)",
            color: LIGHT,
            opacity: 0.6,
            letterSpacing: "0.02em",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? "6px" : "10px",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                position: "relative",
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: MINT,
              }}
            >
              <motion.span
                aria-hidden
                animate={{ scale: [1, 2.4, 2.4], opacity: [0.6, 0, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: MINT,
                }}
              />
            </span>
            <span>
              <span style={{ color: MINT, fontWeight: 600, opacity: 1 / 0.6 }}>Glacier</span>
              {" • April 2026"}
            </span>
          </div>
          {!isMobile && <span style={{ opacity: 0.5 }}>•</span>}
          <span>Bridge round • €250k → unlocks €425k</span>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
