import { motion } from "framer-motion";
import { Repeat, Sparkles, Users, type LucideIcon } from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Force {
  label: string;
  Icon: LucideIcon;
  title: string;
  body: string;
}

const forces: Force[] = [
  {
    label: "FORCE 01 / REGULATION",
    Icon: Repeat,
    title: "Rules keep changing. Our ingestion keeps up.",
    body: "Omnibus I in force. Simplified ESRS coming. VSME in draft. Transposition through 2027. Static tools break on moving targets — Glacier updates faster than legislative cycles.",
  },
  {
    label: "FORCE 02 / AI",
    Icon: Sparkles,
    title: "General AI is table stakes. Quality isn't.",
    body: "Every ESG tool claims AI. But generic models hallucinate, lack traceability, and fail regulatory edge cases. Our custom regulatory knowledge is the moat — widening, not narrowing.",
  },
  {
    label: "FORCE 03 / DEMAND",
    Icon: Users,
    title: "One company. N stakeholders. All asking.",
    body: "Customers, suppliers, banks, investors, regulators — each wants sustainability evidence in a different format. Framework-agnostic ingestion is the only shape that scales across every request.",
  },
];

export default function Slide7() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="technical" slideNumber={7} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          gap: "clamp(36px, 6vh, 80px)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1200px, 100%)",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EXPO_OUT }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(12px, 1.1vw, 16px)",
              color: MINT,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            WHY NOW
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EXPO_OUT, delay: 0.08 }}
            style={{
              margin: 0,
              marginTop: "clamp(10px, 1.5vh, 20px)",
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: 700,
              color: LIGHT,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Volatility is <span style={{ color: MINT }}>our friend</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EXPO_OUT, delay: 0.16 }}
            style={{
              margin: "clamp(12px, 2vh, 20px) auto 0",
              maxWidth: "1000px",
              fontSize: "clamp(14px, 1.4vw, 20px)",
              color: `${LIGHT}B3`,
              lineHeight: 1.5,
              textAlign: "center",
            }}
          >
            Three forces in motion. Each one makes the case for what we're building.
          </motion.p>
        </div>

        {/* CONVERGENCE GRID */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? "clamp(24px, 4vh, 40px)" : "clamp(24px, 3vw, 56px)",
            maxHeight: isMobile ? "55vh" : undefined,
            overflowY: isMobile ? "auto" : undefined,
          }}
        >
          {forces.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: EXPO_OUT, delay: 0.25 + i * 0.08 }}
              style={{
                borderLeft: `2px solid ${MINT}B3`,
                paddingLeft: "clamp(20px, 2.4vw, 32px)",
                paddingRight: "clamp(4px, 0.6vw, 8px)",
                paddingTop: "clamp(2px, 0.4vh, 6px)",
                paddingBottom: "clamp(2px, 0.4vh, 6px)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(14px, 2vh, 20px)",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.08 + 0.05 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(12px, 1.1vw, 16px)",
                  color: MINT,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {f.label}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.08 + 0.13 }}
              >
                <f.Icon
                  style={{
                    width: "clamp(32px, 3.8vw, 44px)",
                    height: "clamp(32px, 3.8vw, 44px)",
                    color: MINT,
                  }}
                  strokeWidth={1.5}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.08 + 0.21 }}
                style={{
                  fontSize: "clamp(20px, 2.2vw, 28px)",
                  color: LIGHT,
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.08 + 0.29 }}
                style={{
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  color: `${LIGHT}CC`,
                  lineHeight: 1.5,
                }}
              >
                {f.body}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* PULL QUOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EXPO_OUT, delay: 0.25 + forces.length * 0.08 + 0.3 }}
          style={{
            width: "100%",
            maxWidth: "min(1100px, 100%)",
            margin: "0 auto",
            display: "flex",
            alignItems: "stretch",
            gap: "clamp(16px, 2.2vw, 28px)",
          }}
        >
          <div
            style={{
              width: 3,
              flexShrink: 0,
              background: MINT,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(10px, 1.5vh, 14px)",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontSize: "clamp(20px, 2.8vw, 40px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: LIGHT,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              The more chaotic the ground, the stronger our foundation.
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(12px, 1.1vw, 14px)",
                color: `${MINT}CC`,
                letterSpacing: "0.08em",
              }}
            >
              // GLACIER POSITIONING
            </div>
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
