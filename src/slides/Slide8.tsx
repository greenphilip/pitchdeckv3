import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const LIGHT = "#F1F1F1";
const BLUE = "#539ADB";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const useOfFunds: string[] = [
  "Ship the Client Knowledge Profile",
  "Expand into Benelux + Scandinavia",
  "Tech scalability",
];

const milestones: string[] = [
  "€2.4M ARR (€200k MRR)",
  "CKP shipped, cross-framework time compression proven",
  "Live in two new geographies",
];

function Divider({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: EXPO_OUT, delay }}
      style={{
        width: "100%",
        height: "1px",
        background: `${BLUE}33`,
        transformOrigin: "center",
      }}
    />
  );
}

export default function Slide8() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="minimal" slideNumber={8} totalSlides={8}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "clamp(28px, 4vh, 48px)",
          overflowY: isMobile ? "auto" : undefined,
        }}
      >
        {/* TOP EYEBROW — slide title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(13px, 1.1vw, 20px)",
            color: MINT,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textAlign: "center",
          }}
        >
          BRIDGE ROUND · THE ASK
        </motion.div>

        {/* HEADLINE EQUATION: €250k unlocks €425k */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1300px, 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(16px, 2.5vh, 28px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "auto auto auto",
              alignItems: "end",
              justifyItems: "center",
              gap: isMobile ? "clamp(12px, 2vh, 20px)" : "clamp(24px, 3.5vw, 56px)",
              width: "100%",
            }}
          >
            {/* €250k */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(6px, 0.9vh, 12px)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EXPO_OUT, delay: 0.15 }}
                style={{
                  fontSize: "clamp(48px, 6vw, 88px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: MINT,
                  lineHeight: 0.95,
                }}
              >
                €250k
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.55 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(11px, 0.95vw, 15px)",
                  color: `${LIGHT}99`,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                }}
              >
                EQUITY
              </motion.div>
            </div>

            {/* unlocks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(6px, 0.9vh, 12px)",
                paddingBottom: isMobile ? 0 : "clamp(8px, 1.2vh, 18px)",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(20px, 2.2vw, 36px)",
                  color: `${LIGHT}80`,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  fontStyle: "italic",
                }}
              >
                {isMobile ? "↓ unlocks ↓" : "unlocks"}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(11px, 0.95vw, 15px)",
                  color: "transparent",
                  letterSpacing: "0.14em",
                }}
              >
                {/* spacer to baseline-align with side captions */}
                ·
              </span>
            </motion.div>

            {/* €425k — dominant */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(6px, 0.9vh, 12px)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: [0.96, 1.04, 1] }}
                transition={{
                  opacity: { duration: 0.5, ease: EXPO_OUT, delay: 0.4 },
                  y: { duration: 0.5, ease: EXPO_OUT, delay: 0.4 },
                  scale: { duration: 0.7, times: [0, 0.6, 1], ease: EXPO_OUT, delay: 0.4 },
                }}
                style={{
                  fontSize: "clamp(64px, 9vw, 136px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: MINT,
                  lineHeight: 0.95,
                  textShadow: `0 0 40px ${MINT}26`,
                }}
              >
                €425k
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(11px, 0.95vw, 15px)",
                  color: `${MINT}B3`,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                }}
              >
                IN NEW CAPITAL
              </motion.div>
            </div>
          </div>

          {/* Subhead */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EXPO_OUT, delay: 0.7 }}
            style={{
              fontSize: "clamp(20px, 2.6vw, 40px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: LIGHT,
              lineHeight: 1.15,
              textAlign: "center",
              marginTop: "clamp(8px, 1.5vh, 16px)",
            }}
          >
            Twelve months to Series A on{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>€2.4M ARR</span>.
          </motion.div>
        </div>

        {/* TOP DIVIDER */}
        <div style={{ width: "100%", maxWidth: "min(1300px, 100%)" }}>
          <Divider delay={0.85} />
        </div>

        {/* USE OF FUNDS → MILESTONES */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1300px, 100%)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 56px 1fr",
            columnGap: "clamp(20px, 2vw, 32px)",
            rowGap: "clamp(14px, 2vh, 22px)",
            alignItems: "start",
          }}
        >
          {/* Row 1: column headers */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EXPO_OUT, delay: 0.95 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(13px, 1.1vw, 18px)",
              color: `${LIGHT}B3`,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            USE OF FUNDS
          </motion.div>

          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.95 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowRight
                style={{ width: "22px", height: "22px", color: `${MINT}80` }}
                strokeWidth={1.75}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EXPO_OUT, delay: 0.95 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(13px, 1.1vw, 18px)",
              color: `${LIGHT}B3`,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            BY DEC 2026
          </motion.div>

          {/* Three row pairs */}
          {[0, 1, 2].map((i) => (
            <RowPair
              key={i}
              left={useOfFunds[i]}
              right={milestones[i]}
              delay={1.05 + i * 0.08}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* BOTTOM DIVIDER */}
        <div style={{ width: "100%", maxWidth: "min(1300px, 100%)" }}>
          <Divider delay={1.35} />
        </div>

        {/* INVESTOR FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EXPO_OUT, delay: 1.45 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(13px, 1.05vw, 17px)",
            color: `${LIGHT}8C`,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            textAlign: "center",
          }}
        >
          2 Existing Investors Participating · Names on Request
        </motion.div>

        <div style={{ height: "clamp(8px, 1vh, 16px)", flexShrink: 0 }} />
      </div>
    </SlideFrame>
  );
}

function RowPair({
  left,
  right,
  delay,
  isMobile,
}: {
  left: string;
  right: string;
  delay: number;
  isMobile: boolean;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: EXPO_OUT, delay }}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <span
          style={{
            width: "10px",
            height: "10px",
            background: MINT,
            transform: "rotate(45deg)",
            flexShrink: 0,
            marginTop: "0.55em",
          }}
        />
        <span
          style={{
            fontSize: "clamp(17px, 1.5vw, 24px)",
            color: LIGHT,
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {left}
        </span>
      </motion.div>

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.04 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "0.55em",
          }}
        >
          <ArrowRight
            style={{ width: "18px", height: "18px", color: `${MINT}4D` }}
            strokeWidth={1.5}
          />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: EXPO_OUT, delay: delay + 0.04 }}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "14px",
        }}
      >
        <CheckCircle
          style={{
            width: "24px",
            height: "24px",
            color: MINT,
            flexShrink: 0,
            marginTop: "0.2em",
          }}
          strokeWidth={1.75}
        />
        <span
          style={{
            fontSize: "clamp(17px, 1.5vw, 24px)",
            color: LIGHT,
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {right}
        </span>
      </motion.div>
    </>
  );
}
