import { motion } from "framer-motion";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const TEAL = "#2D9D90";
const LIGHT = "#F1F1F1";
const NAVY = "#143560";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Emphasis = "muted" | "medium" | "primary";

interface MarketBar {
  key: "TAM" | "SAM" | "SOM";
  leftLabel: string;
  color: string;
  widthPct: number;
  height: number;
  emphasis: Emphasis;
}

const marketBars: MarketBar[] = [
  { key: "TAM", leftLabel: "TAM", color: TEAL, widthPct: 100, height: 40, emphasis: "muted" },
  { key: "SAM", leftLabel: "SAM", color: BLUE, widthPct: 40, height: 48, emphasis: "medium" },
  { key: "SOM", leftLabel: "SOM", color: MINT, widthPct: 8, height: 88, emphasis: "primary" },
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
    <SlideFrame variant="technical" slideNumber={9} totalSlides={11}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: isMobile ? "48px" : "80px",
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
              fontSize: "20px",
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
              marginTop: "20px",
              fontSize: "64px",
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
              margin: "20px auto 0",
              maxWidth: "1100px",
              fontSize: "24px",
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
            gap: isMobile ? "56px" : "72px",
            alignItems: "center",
          }}
        >
          {/* LEFT — MARKET SIZING */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {marketBars.map((b, i) => {
                const isPrimary = b.emphasis === "primary";
                const isMuted = b.emphasis === "muted";
                const leftLabelStyle = isPrimary
                  ? { fontSize: "22px", fontWeight: 700, color: MINT }
                  : isMuted
                  ? { fontSize: "16px", fontWeight: 400, color: `${LIGHT}80` }
                  : { fontSize: "16px", fontWeight: 400, color: `${LIGHT}A6` };

                const rightLabelNode = isPrimary ? (
                  <>
                    SOM <span style={{ color: MINT }}>€100m</span> ≈{" "}
                    <span style={{ color: MINT }}>5,000 customers</span> @ €20k ACV
                  </>
                ) : b.key === "TAM" ? (
                  "TAM €1.3bn → €7.8bn"
                ) : (
                  "SAM €520m"
                );
                const rightLabelStyle = isPrimary
                  ? { fontSize: "28px", fontWeight: 700 as const, color: LIGHT }
                  : isMuted
                  ? { fontSize: "18px", fontWeight: 400 as const, color: `${LIGHT}80` }
                  : { fontSize: "18px", fontWeight: 400 as const, color: `${LIGHT}A6` };

                return (
                  <div
                    key={b.key}
                    style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.25 + i * 0.18 }}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "0.05em",
                        ...leftLabelStyle,
                      }}
                    >
                      {b.leftLabel}
                    </motion.div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* Accent marker (SOM only) */}
                      {isPrimary && (
                        <motion.div
                          initial={{ opacity: 0, scale: 1 }}
                          animate={{
                            opacity: 1,
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            opacity: { duration: 0.3, delay: 0.35 + i * 0.18 },
                            scale: { duration: 0.6, delay: 1.4, times: [0, 0.5, 1] },
                          }}
                          style={{
                            width: 4,
                            height: b.height,
                            background: MINT,
                            borderRadius: 2,
                            flexShrink: 0,
                          }}
                        />
                      )}

                      <div
                        style={{
                          flex: "1 1 0",
                          minWidth: 0,
                          height: `${b.height}px`,
                          position: "relative",
                        }}
                      >
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: b.widthPct / 100 }}
                          transition={{
                            duration: isPrimary ? 0.7 : 0.5,
                            ease: EXPO_OUT,
                            delay: 0.35 + i * 0.18,
                          }}
                          style={{
                            width: "100%",
                            height: "100%",
                            background: b.color,
                            borderRadius: isPrimary ? 6 : 4,
                            transformOrigin: "left",
                            boxShadow: isPrimary
                              ? `0 0 0 1px ${MINT}, 0 8px 32px ${MINT}40`
                              : undefined,
                          }}
                        />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.85 + i * 0.18 }}
                        style={{
                          flexShrink: 0,
                          maxWidth: "100%",
                          lineHeight: 1.3,
                          ...rightLabelStyle,
                        }}
                      >
                        {rightLabelNode}
                        {isPrimary && (
                          <div
                            style={{
                              fontSize: "13px",
                              fontStyle: "italic",
                              color: `${LIGHT}99`,
                              fontWeight: 400,
                              marginTop: 6,
                            }}
                          >
                            Our 5-year target — credible, bottom-up
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                fontSize: "15px",
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
              gap: "36px",
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
                    gap: "24px",
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
                      paddingTop: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
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
                          minHeight: "40px",
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
                      gap: "12px",
                      paddingBottom: isLast ? 0 : "10px",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "18px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          padding: "6px 14px",
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
                        fontSize: "32px",
                        color: LIGHT,
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: "19px",
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
            fontSize: "24px",
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
