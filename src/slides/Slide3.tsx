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
    body: "\n\nGeneric LLMs hallucinate\nNo source traceability\nNo specialist knowledge\n\n",
    tag: "GAP: quality and traceability",
  },
  {
    header: "CONSULTANCIES",
    Icon: Briefcase,
    shortHeadline: "Expert, but expensive and slow.",
    body: "\n\nDeep expertise, billed by the hour. \nEvery year starts over. (Some of our best partners are in this category — different problem, different fit.)",
    tag: "GAP: leverage and retention",
  },
];

export default function Slide3() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="technical" slideNumber={3} totalSlides={11}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* HEADER */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "min(1400px, 100%)", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EXPO_OUT }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "20px",
              color: MINT,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              textAlign: "center",
            }}
          >
            THE MARKET TODAY
          </motion.div>

          <div style={{ height: "24px" }} />

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EXPO_OUT }}
            style={{
              fontSize: "64px",
              fontWeight: 600,
              color: LIGHT,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: 0,
              textAlign: "center",
              whiteSpace: "pre-line",
            }}
          >
            Tools currently on the market{"\n"}don't really solve this.
          </motion.h1>

          <div style={{ height: "32px" }} />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: EXPO_OUT }}
            style={{
              fontSize: "24px",
              color: LIGHT,
              opacity: 0.7,
              lineHeight: 1.5,
              maxWidth: 1000,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {"\n"}
          </motion.p>
        </div>

        {/* GRID */}
        <div style={{ height: "80px" }} />

        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? "20px" : "48px",
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
                  padding: "28px",
                  borderRadius: 6,
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: cardDelay + 0.08, ease: EXPO_OUT }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: BLUE,
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
                    fontSize: "28px",
                    color: LIGHT,
                    fontWeight: 600,
                    lineHeight: 1.2,
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
                    fontSize: "19px",
                    color: LIGHT,
                    opacity: 0.8,
                    lineHeight: 1.5,
                  }}
                >
                  {cat.body}
                </motion.div>

                <div style={{ flex: 1, minHeight: "8px" }} />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: cardDelay + 0.4, ease: EXPO_OUT }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "17px",
                    color: BLUE,
                    opacity: 0.75,
                    letterSpacing: "0.04em",
                    paddingTop: "22px",
                    borderTop: `1px solid ${BLUE}26`,
                  }}
                >
                  {cat.tag}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SlideFrame>
  );
}
