import { motion } from "framer-motion";
import { User } from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";
const NAVY = "#143560";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Member {
  name: string;
  title: string;
  background: string;
}

const team: Member[] = [
  {
    name: "[Founder Name]",
    title: "[Title]",
    background: "[Background — e.g., ex-Workiva PM + ESG regulation specialist]",
  },
  {
    name: "[Founder Name]",
    title: "[Title]",
    background: "[Background — e.g., ex-Big 4 sustainability lead, CSRD practitioner]",
  },
  {
    name: "[Founder Name]",
    title: "[Title]",
    background: "[Background — e.g., applied AI engineer, ex-research lab, NLP at scale]",
  },
  {
    name: "[Founder Name]",
    title: "[Title]",
    background: "[Background — e.g., enterprise GTM, scaled SaaS from seed to Series B]",
  },
];

export default function Slide9() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="minimal" slideNumber={9} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          gap: "clamp(20px, 3vh, 32px)",
        }}
      >
        {/* PLACEHOLDER BANNER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            width: "100%",
            background: `${MINT}99`,
            padding: "clamp(4px, 0.6vh, 8px) clamp(12px, 2vw, 24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(11px, 1vw, 13px)",
              color: NAVY,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textAlign: "center",
            }}
          >
            // PLACEHOLDER — REPLACE WITH REAL TEAM BEFORE SHARING
          </span>
        </motion.div>

        {/* HEADER */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1200px, 92vw)",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginTop: "clamp(16px, 3vh, 48px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EXPO_OUT, delay: 0.1 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(12px, 1.1vw, 16px)",
              color: MINT,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            TEAM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EXPO_OUT, delay: 0.18 }}
            style={{
              margin: 0,
              marginTop: "clamp(10px, 1.5vh, 20px)",
              fontSize: "clamp(20px, 3.2vw, 48px)",
              fontWeight: 600,
              color: LIGHT,
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              textAlign: "center",
            }}
          >
            Regulatory depth. Product discipline. Applied AI.
          </motion.h1>
        </div>

        {/* TEAM GRID */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1200px, 100%)",
            margin: "0 auto",
            marginTop: "clamp(36px, 6vh, 80px)",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(4, minmax(0, 1fr))",
            gap: isMobile ? "clamp(20px, 3vw, 32px)" : "clamp(28px, 3.5vw, 56px)",
            maxHeight: isMobile ? "55vh" : undefined,
            overflowY: isMobile ? "auto" : undefined,
          }}
        >
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EXPO_OUT, delay: 0.35 + i * 0.08 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "clamp(14px, 2vh, 20px)",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "clamp(88px, 10.5vw, 148px)",
                  height: "clamp(88px, 10.5vw, 148px)",
                  borderRadius: "50%",
                  background: `${BLUE}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <User
                  style={{
                    width: "50%",
                    height: "50%",
                    color: `${LIGHT}99`,
                  }}
                  strokeWidth={1.5}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "clamp(6px, 0.8vh, 10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(16px, 1.7vw, 22px)",
                    color: LIGHT,
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {m.name}
                </div>
                <div
                  style={{
                    fontSize: "clamp(13px, 1.3vw, 18px)",
                    color: MINT,
                    lineHeight: 1.3,
                  }}
                >
                  {m.title}
                </div>
              </div>

              <div
                style={{
                  fontSize: "clamp(12px, 1.1vw, 15px)",
                  color: `${LIGHT}B3`,
                  lineHeight: 1.45,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {m.background}
              </div>
            </motion.div>
          ))}
        </div>

        {/* THESIS LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 + team.length * 0.08 + 0.2 }}
          style={{
            width: "100%",
            maxWidth: "min(900px, 100%)",
            margin: "0 auto",
            marginTop: "clamp(28px, 4.5vh, 56px)",
            fontSize: "clamp(14px, 1.5vw, 22px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: `${LIGHT}CC`,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          The combination is rare. The product is how it shows up.
        </motion.div>

        {/* ADVISORS LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.35 + team.length * 0.08 + 0.3 }}
          style={{
            width: "100%",
            maxWidth: "min(1000px, 100%)",
            margin: "0 auto",
            marginTop: "clamp(14px, 2vh, 22px)",
            fontSize: "clamp(12px, 1.1vw, 15px)",
            fontStyle: "italic",
            color: `${LIGHT}8C`,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          [Advisors: Big 4 sustainability partner, ex-CFO of a CSRD-mandatory company, etc.]
        </motion.div>

        {/* BOTTOM ANCHOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.35 + team.length * 0.08 + 0.4 }}
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "clamp(13px, 1.2vw, 17px)",
            color: `${LIGHT}B3`,
            marginTop: "auto",
            paddingTop: "clamp(24px, 4vh, 48px)",
          }}
        >
          Headcount: <span style={{ color: MINT, fontWeight: 600 }}>[X]</span> today. Hiring{" "}
          <span style={{ color: MINT, fontWeight: 600 }}>[Y]</span> with this round.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
