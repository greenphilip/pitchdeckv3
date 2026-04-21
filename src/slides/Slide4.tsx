import { motion } from "framer-motion";
import { BookOpen, UserCheck, Link2, Handshake, ShieldCheck, type LucideIcon } from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Pillar {
  number: string;
  Icon: LucideIcon;
  title: string;
  body: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    Icon: BookOpen,
    title: "Custom-built regulatory knowledge.",
    body: "Not a general LLM with ESG prompts. Our models are trained on the regulatory texts, interpretations, and edge cases that decide audits.",
  },
  {
    number: "02",
    Icon: UserCheck,
    title: "Human-in-the-loop by design.",
    body: "AI accelerates every step. The customer owns every output. Traceability and judgment stay with people.",
  },
  {
    number: "03",
    Icon: Link2,
    title: "Every output linked to its evidence.",
    body: "Auditor-grade traceability from the first draft. Click back to source document and page.",
  },
  {
    number: "04",
    Icon: Handshake,
    title: "Partnered with the experts.",
    body: "Consulting firms bring deep regulatory depth. They deliver faster on Glacier; we're stronger with their expertise behind the product.",
  },
  {
    number: "05",
    Icon: ShieldCheck,
    title: "Trusted where trust is hardest to earn.",
    body: "Conservative enterprises — not usually known for trusting AI or innovative products — have closed with us.",
  },
];

export default function Slide4() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="technical" slideNumber={4} totalSlides={10}>
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
              fontSize: "clamp(13px, 1vw, 20px)",
              color: MINT,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            THE DIFFERENTIATION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EXPO_OUT, delay: 0.08 }}
            style={{
              margin: 0,
              marginTop: "clamp(10px, 1.5vh, 20px)",
              fontSize: "clamp(26px, 3.8vw, 64px)",
              fontWeight: 600,
              color: LIGHT,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Quality is the moat.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EXPO_OUT, delay: 0.16 }}
            style={{
              margin: "clamp(12px, 2vh, 20px) auto 0",
              maxWidth: "1100px",
              fontSize: "clamp(15px, 1.3vw, 24px)",
              color: `${LIGHT}B3`,
              lineHeight: 1.5,
              textAlign: "center",
            }}
          >
            In an age of AI hallucination,{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>can't afford to be wrong</span>{" "}
            customers choose us. Here's why.
          </motion.p>
        </div>

        {/* FIVE-PILLAR GRID */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1500px, 100%)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(5, minmax(0, 1fr))",
            gap: isMobile ? "clamp(12px, 2vw, 16px)" : "clamp(14px, 1.8vw, 24px)",
            maxHeight: isMobile ? "58vh" : undefined,
            overflowY: isMobile ? "auto" : undefined,
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EXPO_OUT, delay: 0.25 + i * 0.08 }}
              style={{
                gridColumn: isMobile && i === 4 ? "1 / -1" : undefined,
                border: `1px solid ${BLUE}40`,
                background: "rgba(255, 255, 255, 0.03)",
                padding: "clamp(18px, 2vw, 26px)",
                borderRadius: 6,
                display: "flex",
                flexDirection: "column",
                gap: "clamp(14px, 2vh, 18px)",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.08 + 0.05 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(13px, 1vw, 20px)",
                  color: MINT,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                {p.number}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.08 + 0.13 }}
              >
                <p.Icon
                  style={{
                    width: "clamp(32px, 3.5vw, 44px)",
                    height: "clamp(32px, 3.5vw, 44px)",
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
                {p.title}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.08 + 0.29 }}
                style={{
                  fontSize: "clamp(14px, 1.05vw, 19px)",
                  color: `${LIGHT}CC`,
                  lineHeight: 1.5,
                }}
              >
                {p.body}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CALL-FORWARD */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 + pillars.length * 0.08 + 0.2 }}
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(13px, 1.1vw, 20px)",
            fontWeight: 600,
            color: `${MINT}CC`,
            letterSpacing: "0.08em",
          }}
        >
          The next slide is what that trust looks like →
        </motion.div>
      </div>
    </SlideFrame>
  );
}
