import { motion } from "framer-motion";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const TEAL = "#2D9D90";
const LIGHT = "#F1F1F1";
const NAVY = "#143560";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface MarketBar {
  leftLabel: string;
  rightLabel: string;
  color: string;
  widthPct: number;
}

const marketBars: MarketBar[] = [
  { leftLabel: "TAM", rightLabel: "TAM €1.3bn → €7.8bn", color: TEAL, widthPct: 100 },
  { leftLabel: "SAM", rightLabel: "SAM €520m", color: BLUE, widthPct: 40 },
  {
    leftLabel: "SOM",
    rightLabel: "SOM €100m ≈ 5,000 customers @ €20k ACV",
    color: MINT,
    widthPct: 8,
  },
];

interface Phase {
  badge: string;
  title: string;
  detail: string;
  color: string;
  badgeText: string;
}

const phases: Phase[] = [
  {
    badge: "NOW",
    title: "EU enterprise, CSRD-grade",
    detail: "CSRD and EcoVadis live, paying customers. DACH first.",
    color: MINT,
    badgeText: NAVY,
  },
  {
    badge: "6-12 months",
    title: "Voluntary reporters + supply chain",
    detail:
      "VSME, ISSB, GRI, customer questionnaires. Expansion to Benelux + Scandinavia.",
    color: BLUE,
    badgeText: LIGHT,
  },
  {
    badge: "YEAR 2+",
    title: "Partner & channel scale",
    detail:
      "Consultancies and audit firms delivering on Glacier. Platform reach beyond direct sales.",
    color: TEAL,
    badgeText: LIGHT,
  },
];

export default function Slide8() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="technical" slideNumber={9} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: isMobile ? "clamp(28px, 4vh, 48px)" : "clamp(36px, 6vh, 80px)",
          overflowY: isMobile ? "auto" : undefined,
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
            MARKET & EXPANSION
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
            <span style={{ color: BLUE }}>€1.3bn</span> today.{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>€7.8bn</span> by 2034.
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
            CAGR <span style={{ color: MINT, fontWeight: 700 }}>21%</span>. Plus a €7bn adjacent regulatory reporting market.
          </motion.p>
        </div>

        {/* MAIN SPLIT */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 2fr) minmax(0, 3fr)",
            gap: isMobile ? "clamp(32px, 5vh, 56px)" : "clamp(32px, 4.5vw, 72px)",
            alignItems: "center",
          }}
        >
          {/* LEFT — MARKET SIZING */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px, 2.5vh, 24px)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 2vh, 20px)" }}>
              {marketBars.map((b, i) => (
                <div
                  key={b.leftLabel}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(6px, 0.8vh, 10px)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.18 }}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(13px, 1vw, 20px)",
                      color: LIGHT,
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {b.leftLabel}
                  </motion.div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(12px, 1.5vw, 20px)",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 0",
                        minWidth: 0,
                        height: "clamp(44px, 6vh, 64px)",
                        position: "relative",
                      }}
                    >
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: b.widthPct / 100 }}
                        transition={{
                          duration: 0.5,
                          ease: EXPO_OUT,
                          delay: 0.35 + i * 0.18,
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          background: b.color,
                          borderRadius: 4,
                          transformOrigin: "left",
                        }}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.85 + i * 0.18 }}
                      style={{
                        fontSize: "clamp(14px, 1.4vw, 24px)",
                        fontWeight: 500,
                        color: LIGHT,
                        flexShrink: 0,
                        maxWidth: "100%",
                      }}
                    >
                      {b.rightLabel}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                fontSize: "clamp(13px, 1vw, 18px)",
                color: `${LIGHT}A6`,
              }}
            >
              + €7bn adjacent regulatory reporting market.
            </div>
          </div>

          {/* RIGHT — EXPANSION ROADMAP */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(20px, 3vh, 36px)",
            }}
          >
            {phases.map((p, i) => {
              const isLast = i === phases.length - 1;
              return (
                <motion.div
                  key={p.badge}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: EXPO_OUT, delay: 0.4 + i * 0.08 }}
                  style={{
                    display: "flex",
                    gap: "clamp(14px, 1.8vw, 24px)",
                    alignItems: "stretch",
                  }}
                >
                  {/* Marker + connector line */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                      paddingTop: "clamp(4px, 0.6vh, 8px)",
                    }}
                  >
                    <div
                      style={{
                        width: "clamp(12px, 1.2vw, 16px)",
                        height: "clamp(12px, 1.2vw, 16px)",
                        borderRadius: "50%",
                        background: p.color,
                        flexShrink: 0,
                      }}
                    />
                    {!isLast && (
                      <div
                        style={{
                          flex: 1,
                          width: 1,
                          background: `${MINT}4D`,
                          marginTop: 4,
                          minHeight: "clamp(20px, 3vh, 40px)",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "clamp(8px, 1.2vh, 12px)",
                      paddingBottom: isLast ? 0 : "clamp(4px, 0.8vh, 10px)",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "clamp(13px, 1vw, 18px)",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          padding: "clamp(4px, 0.6vw, 6px) clamp(10px, 1.2vw, 14px)",
                          borderRadius: 3,
                          background: p.color,
                          color: p.badgeText,
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(20px, 2vw, 32px)",
                        color: LIGHT,
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(14px, 1.05vw, 19px)",
                        color: `${LIGHT}BF`,
                        lineHeight: 1.5,
                      }}
                    >
                      {p.detail}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          style={{
            width: "100%",
            maxWidth: "min(1200px, 100%)",
            margin: "0 auto",
            textAlign: "center",
            fontSize: "clamp(15px, 1.3vw, 24px)",
            color: LIGHT,
            lineHeight: 1.5,
          }}
        >
          <span style={{ color: MINT, fontWeight: 700 }}>DACH</span> today &nbsp;→&nbsp;{" "}
          <span style={{ color: MINT, fontWeight: 700 }}>Benelux + Scandinavia</span> next.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
