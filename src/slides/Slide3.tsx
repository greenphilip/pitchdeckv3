import { motion } from "framer-motion";
import {
  FileText,
  Sparkles,
  Briefcase,
  Repeat,
  Cpu,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Force {
  label: string;
  Icon: LucideIcon;
  title: string;
  body: string;
}

interface Category {
  header: string;
  Icon: LucideIcon;
  shortHeadline: string;
  body: string;
  tag: string;
}

const forces: Force[] = [
  {
    label: "REGULATION",
    Icon: Repeat,
    title: "ESG rules keep changing.",
    body: "Omnibus I in force, ESRS simplified, VSME drafting through 2027. Static tools break on moving targets.",
  },
  {
    label: "AI",
    Icon: Cpu,
    title: "General AI is table stakes.",
    body: "Generic LLMs hallucinate and lack traceability. Quality is the moat.",
  },
  {
    label: "DEMAND",
    Icon: Users,
    title: "One company, N stakeholders.",
    body: "Customers, banks, investors, regulators — each wants evidence in a different format. All asking at once.",
  },
];

const categories: Category[] = [
  {
    header: "WORKFLOW & COMPLIANCE",
    Icon: FileText,
    shortHeadline: "Built for documents, not decisions.",
    body: "Help you file the report. Don't help you understand the regulation. You still need consultants to tell you what data is missing.",
    tag: "GAP: regulatory knowledge",
  },
  {
    header: "GENERAL AI",
    Icon: Sparkles,
    shortHeadline: "Fast, but can't be trusted at audit.",
    body: "No source traceability. No specialist regulatory knowledge. No structured memory. No review and delegation/audit roles.",
    tag: "GAP: quality & traceability",
  },
  {
    header: "CONSULTANCIES",
    Icon: Briefcase,
    shortHeadline: "Expert, but expensive and slow.",
    body: "Deep expertise, billed by the hour. Every year starts over. (Some of our best partners sit here — different problem, different fit.)",
    tag: "GAP: leverage & retention",
  },
];

export default function Slide3() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="technical" slideNumber={3} totalSlides={8}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          gap: "clamp(16px, 2.6vh, 32px)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EXPO_OUT }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(13px, 1vw, 18px)",
              color: MINT,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            WHY NOW — AND WHY NOBODY'S SOLVED IT
          </motion.div>

          <div style={{ height: "clamp(10px, 1.4vh, 18px)" }} />

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EXPO_OUT }}
            style={{
              fontSize: "clamp(28px, 3.6vw, 56px)",
              fontWeight: 700,
              color: LIGHT,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            3 forces <span style={{ color: MINT }}>pushing the market.</span>
          </motion.h1>
        </div>

        {/* FORCES BAND */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(10px, 1.4vh, 18px)",
          }}
        >

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(3, minmax(0, 1fr))",
              gap: isMobile ? "16px" : "32px",
            }}
          >
            {forces.map((f, i) => {
              const delay = 0.22 + i * 0.07;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay, ease: EXPO_OUT }}
                  style={{
                    borderLeft: `2px solid ${MINT}B3`,
                    paddingLeft: "20px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <f.Icon
                      style={{
                        width: "22px",
                        height: "22px",
                        color: MINT,
                      }}
                      strokeWidth={1.5}
                    />
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "clamp(11px, 0.85vw, 14px)",
                        color: MINT,
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      {f.label}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: "clamp(16px, 1.4vw, 22px)",
                      color: LIGHT,
                      fontWeight: 600,
                      lineHeight: 1.25,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {f.title}
                  </div>

                  <div
                    style={{
                      fontSize: "clamp(13px, 1vw, 16px)",
                      color: LIGHT,
                      opacity: 0.75,
                      lineHeight: 1.45,
                    }}
                  >
                    {f.body}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.45, ease: EXPO_OUT }}
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            height: "1px",
            background: `${BLUE}40`,
            transformOrigin: "left",
          }}
        />

        {/* TOOLS BAND */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(10px, 1.4vh, 18px)",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: EXPO_OUT }}
            style={{
              fontSize: "clamp(28px, 3.6vw, 56px)",
              fontWeight: 700,
              color: LIGHT,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: 0,
              textAlign: "center",
            }}
          >
            3 alternatives <span style={{ color: MINT }}>failing to meet it.</span>
          </motion.h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(3, minmax(0, 1fr))",
              gap: isMobile ? "16px" : "32px",
              ...(isMobile
                ? { maxHeight: "45vh", overflowY: "auto", paddingRight: 4 }
                : {}),
            }}
          >
            {categories.map((cat, i) => {
              const cardDelay = 0.55 + i * 0.07;
              return (
                <motion.div
                  key={cat.header}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: cardDelay, ease: EXPO_OUT }}
                  style={{
                    border: `1px solid ${BLUE}40`,
                    background: "rgba(255, 255, 255, 0.03)",
                    padding: "18px 20px",
                    borderRadius: 6,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    minHeight: "clamp(180px, 24vh, 260px)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <cat.Icon size={20} color={LIGHT} strokeWidth={1.5} />
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "clamp(11px, 0.85vw, 14px)",
                        fontWeight: 600,
                        color: BLUE,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {cat.header}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: "clamp(16px, 1.4vw, 22px)",
                      color: LIGHT,
                      fontWeight: 600,
                      lineHeight: 1.22,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cat.shortHeadline}
                  </div>

                  <div
                    style={{
                      fontSize: "clamp(13px, 1vw, 16px)",
                      color: LIGHT,
                      opacity: 0.78,
                      lineHeight: 1.45,
                    }}
                  >
                    {cat.body}
                  </div>

                  <div style={{ flex: 1, minHeight: "6px" }} />

                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(11px, 0.85vw, 13px)",
                      color: BLUE,
                      opacity: 0.8,
                      letterSpacing: "0.04em",
                      paddingTop: "12px",
                      borderTop: `1px solid ${BLUE}26`,
                    }}
                  >
                    {cat.tag}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
