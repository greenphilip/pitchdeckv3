import { motion } from "framer-motion";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";
import glacierLogo from "@/assets/glacier-logo.svg";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Slide1() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="minimal" slideNumber={1} totalSlides={8} showLogo={false} showSlideNumber={false}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          boxSizing: "border-box",
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
            gap: "16px",
            flexShrink: 0,
          }}
        >
          <img
            src={glacierLogo}
            alt="Glacier"
            style={{
              height: isMobile ? 140 : 180,
              width: "auto",
              display: "block",
            }}
          />
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "16px",
              color: LIGHT,
              opacity: 0.55,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            ESG Reporting — Fast, Defensible
          </div>
        </motion.div>

        {/* Center: headline block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            maxWidth: "1500px",
            width: "100%",
            flexShrink: 0,
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EXPO_OUT }}
            style={{
              fontSize: "76px",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: LIGHT,
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {"Glacier helps companies\nget ESG reporting done\n— "}
            <span style={{ color: MINT }}>faster</span>
            {", with "}
            <span style={{ color: MINT }}>quality they can defend</span>
            {"."}
          </motion.h1>
        </div>

        {/* Bottom anchor: meta with status dot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5, ease: EXPO_OUT }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "17px",
            color: LIGHT,
            opacity: 0.6,
            letterSpacing: "0.02em",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? "6px" : "10px",
            textAlign: "center",
            lineHeight: 1.6,
            flexShrink: 0,
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
