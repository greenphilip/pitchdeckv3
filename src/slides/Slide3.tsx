import { motion } from "framer-motion";
import { FileText, Sparkles, Briefcase, type LucideIcon } from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Category {
  header: string;
  Icon: LucideIcon;
  shortHeadline: string;
  body: string;
  tag: string;
}

const categories: Category[] = [
  {
    header: "WORKFLOW & COMPLIANCE TOOLS",
    Icon: FileText,
    shortHeadline: "Built for documents, not decisions.",
    body: "Help you file the report. Don't help you understand the regulation. You still need consultants to tell you what goes in the boxes.",
    tag: "GAP: the regulatory knowledge",
  },
  {
    header: "GENERAL AI",
    Icon: Sparkles,
    shortHeadline: "Fast, but can't be trusted at audit.",
    body: "Generic LLMs hallucinate on regulatory detail. No source traceability. No specialist knowledge. An auditor will reject outputs nobody can defend.",
    tag: "GAP: quality and traceability",
  },
  {
    header: "CONSULTANCIES",
    Icon: Briefcase,
    shortHeadline: "Expert, but expensive and slow.",
    body: "Deep expertise, billed by the hour. The job gets done, but the knowledge leaves with them. Every year starts over. (Some of our best partners are in this category — different problem, different fit.)",
    tag: "GAP: leverage and retention",
  },
];

export default function Slide3() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="technical" slideNumber={3} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* HEADER */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "min(1400px, 100%)" }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EXPO_OUT }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(10px, 1vw, 12px)",
              color: MINT,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            THE MARKET TODAY
          </motion.div>

          <div style={{ height: "clamp(8px, 1vh, 16px)" }} />

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EXPO_OUT }}
            style={{
              fontSize: "clamp(24px, 4vw, 52px)",
              fontWeight: 600,
              color: LIGHT,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: 0,
              textAlign: "left",
            }}
          >
            The tools they have don't solve this.
          </motion.h1>

          <div style={{ height: "clamp(12px, 2vh, 24px)" }} />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: EXPO_OUT }}
            style={{
              fontSize: "clamp(13px, 1.4vw, 18px)",
              color: LIGHT,
              opacity: 0.7,
              lineHeight: 1.5,
              maxWidth: 900,
              margin: 0,
            }}
          >
            Three categories. None were built for a customer in a squeeze.
          </motion.p>
        </div>

        {/* GRID */}
        <div style={{ height: "clamp(24px, 4vh, 56px)" }} />

        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? "clamp(12px, 2vh, 20px)" : "clamp(16px, 2vw, 32px)",
            ...(isMobile
              ? { maxHeight: "50vh", overflowY: "auto", paddingRight: 4 }
              : {}),
          }}
        >
          {categories.map((cat, i) => {
            const cardDelay = 0.35 + i * 0.08;
            return (
              <motion.div
                key={cat.header}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: cardDelay, ease: EXPO_OUT }}
                style={{
                  border: `1px solid ${BLUE}40`,
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "clamp(18px, 2vw, 28px)",
                  borderRadius: 6,
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(10px, 1.5vh, 16px)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: cardDelay + 0.08, ease: EXPO_OUT }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "clamp(10px, 0.9vw, 11px)",
                    color: MINT,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {cat.header}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: cardDelay + 0.16, ease: EXPO_OUT }}
                >
                  <cat.Icon size={32} color={LIGHT} strokeWidth={1.5} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: cardDelay + 0.24, ease: EXPO_OUT }}
                  style={{
                    fontSize: "clamp(14px, 1.6vw, 20px)",
                    color: LIGHT,
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cat.shortHeadline}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: cardDelay + 0.32, ease: EXPO_OUT }}
                  style={{
                    fontSize: "clamp(12px, 1.1vw, 14px)",
                    color: LIGHT,
                    opacity: 0.8,
                    lineHeight: 1.5,
                  }}
                >
                  {cat.body}
                </motion.div>

                <div style={{ flex: 1, minHeight: "clamp(4px, 1vh, 8px)" }} />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: cardDelay + 0.4, ease: EXPO_OUT }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "clamp(10px, 0.9vw, 11px)",
                    color: BLUE,
                    opacity: 0.7,
                    letterSpacing: "0.04em",
                    paddingTop: "clamp(6px, 1vh, 10px)",
                    borderTop: `1px solid ${BLUE}26`,
                  }}
                >
                  {cat.tag}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* THESIS STAMP */}
        <div style={{ height: "clamp(24px, 4vh, 56px)" }} />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.85, ease: EXPO_OUT }}
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "clamp(16px, 2vw, 24px)",
            maxWidth: "min(1400px, 100%)",
          }}
        >
          <div
            style={{
              width: 4,
              background: MINT,
              flexShrink: 0,
              borderRadius: 2,
              boxShadow: `0 0 16px ${MINT}55`,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(6px, 1vh, 10px)",
              paddingTop: "clamp(2px, 0.5vh, 6px)",
              paddingBottom: "clamp(2px, 0.5vh, 6px)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(16px, 2.2vw, 26px)",
                color: LIGHT,
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
                maxWidth: "min(1200px, 100%)",
              }}
            >
              Customers don't need more tools. They need their work done —{" "}
              <span style={{ color: MINT, fontWeight: 600 }}>faster</span>, without losing{" "}
              <span style={{ color: MINT, fontWeight: 600 }}>quality</span>.
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(10px, 0.9vw, 11px)",
                color: MINT,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Glacier: Speed + Quality, Delivered Together
            </div>
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
