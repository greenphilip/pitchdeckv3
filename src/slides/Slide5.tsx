import { motion } from "framer-motion";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const TEAL = "#2D9D90";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Bar {
  leftLabel: string;
  rightLabel: string;
  color: string;
  widthPct: number;
  emphasis?: boolean;
}

const bars: Bar[] = [
  { leftLabel: "1st framework — CSRD", rightLabel: "2 months", color: TEAL, widthPct: 100 },
  { leftLabel: "2nd framework — EcoVadis", rightLabel: "1 month", color: BLUE, widthPct: 50 },
  { leftLabel: "3rd framework onward", rightLabel: "1 week", color: MINT, widthPct: 20, emphasis: true },
];

export default function Slide5() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="technical" slideNumber={5} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
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
            THE COMPOUNDING EFFECT
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
            The product gets <span style={{ color: MINT }}>better</span> the more you use it.
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
            We started with the <span style={{ color: MINT, fontWeight: 700 }}>hardest standard</span>. Every framework after is faster.
          </motion.p>
        </div>

        {/* MAIN SPLIT */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 3fr) minmax(0, 2fr)",
            gap: isMobile ? "clamp(32px, 5vh, 56px)" : "clamp(32px, 4.5vw, 72px)",
            alignItems: "center",
          }}
        >
          {/* LEFT — TIME COMPRESSION CHART */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2.5vh, 24px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 2vh, 20px)" }}>
              {bars.map((b, i) => (
                <div
                  key={b.leftLabel}
                  style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 0.8vh, 10px)" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.18 }}
                    style={{
                      fontSize: "clamp(14px, 1.25vw, 22px)",
                      color: `${LIGHT}CC`,
                      fontWeight: 500,
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
                        height: "clamp(48px, 6vh, 72px)",
                        position: "relative",
                      }}
                    >
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0.8 }}
                        animate={{ scaleX: b.widthPct / 100, opacity: 1 }}
                        transition={{
                          duration: 0.5 - i * 0.1,
                          ease: EXPO_OUT,
                          delay: 0.35 + i * 0.18,
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          background: b.color,
                          borderRadius: 4,
                          transformOrigin: "left",
                          boxShadow: b.emphasis ? `0 0 24px ${b.color}55` : undefined,
                        }}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.35 + i * 0.18 + (0.5 - i * 0.1),
                      }}
                      style={{
                        fontSize: "clamp(20px, 2.2vw, 36px)",
                        fontWeight: b.emphasis ? 700 : 600,
                        color: b.color,
                        whiteSpace: "nowrap",
                        minWidth: "clamp(80px, 10vw, 160px)",
                      }}
                    >
                      {b.rightLabel}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 1vh, 10px)" }}>
              <div
                style={{
                  fontSize: "clamp(13px, 1.05vw, 18px)",
                  color: `${LIGHT}99`,
                }}
              >
                Measured across customers using multiple frameworks on Glacier.
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(12px, 0.85vw, 17px)",
                  color: `${LIGHT}80`,
                  letterSpacing: "0.02em",
                }}
              >
                {/* placeholder for named customer example */}
                // ADD: named customer example if available
              </div>
            </div>
          </div>

          {/* RIGHT — WHY CSRD FIRST CALLOUT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EXPO_OUT, delay: 0.55 }}
            style={{
              border: `1px solid ${MINT}80`,
              background: `linear-gradient(135deg, rgba(109, 212, 173, 0.04), rgba(109, 212, 173, 0.02))`,
              padding: "clamp(22px, 2.6vw, 36px)",
              borderRadius: 6,
              display: "flex",
              flexDirection: "column",
              gap: "clamp(14px, 2vh, 20px)",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(13px, 1vw, 20px)",
                color: MINT,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              WHY CSRD FIRST
            </div>

            <div
              style={{
                fontSize: "clamp(20px, 2vw, 32px)",
                color: LIGHT,
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              We cracked the hardest nut first — on purpose.
            </div>

            <div
              style={{
                fontSize: "clamp(14px, 1.05vw, 19px)",
                color: `${LIGHT}D9`,
                lineHeight: 1.5,
              }}
            >
              CSRD is the most comprehensive reporting framework in the world. The evidence we
              extract, the entities we map, the concepts we link — they cover the union of what
              nearly every other framework requires. Each new standard is a mapping exercise
              against a knowledge base that's already 80% complete.
            </div>

            <div
              style={{
                paddingTop: "clamp(10px, 1.5vh, 16px)",
                borderTop: `1px solid ${MINT}33`,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(12px, 0.85vw, 17px)",
                color: `${MINT}CC`,
                letterSpacing: "0.08em",
              }}
            >
              RESULT: LOWER MARGINAL COST PER FRAMEWORK, HIGHER STICKINESS PER CUSTOMER
            </div>
          </motion.div>
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
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
          <span style={{ color: MINT, fontWeight: 700 }}>Client Knowledge Profile (CKP)</span>{" "}
          — each report makes the next one faster. Customers who use us more get more value.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
