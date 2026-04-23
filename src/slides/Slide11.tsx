import { motion } from "framer-motion";
import { Code, TrendingUp, Server, CheckCircle, type LucideIcon } from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Row {
  Icon: LucideIcon;
  text: string;
}

const useOfFunds: Row[] = [
  { Icon: Code, text: "Ship the Client Knowledge Profile" },
  { Icon: TrendingUp, text: "Expand into Benelux + Scandinavia" },
  { Icon: Server, text: "Tech scalability" },
];

const milestones: Row[] = [
  { Icon: CheckCircle, text: "€2.4M ARR (€200k MRR)" },
  { Icon: CheckCircle, text: "CKP shipped with cross-framework time compression proven" },
  { Icon: CheckCircle, text: "Live in two new geographies" },
];

function Column({
  label,
  rows,
  baseDelay,
  iconColor,
}: {
  label: string;
  rows: Row[];
  baseDelay: number;
  iconColor: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: EXPO_OUT, delay: baseDelay }}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "20px",
          color: MINT,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {rows.map((r, i) => (
          <motion.div
            key={r.text}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: EXPO_OUT,
              delay: baseDelay + 0.08 + i * 0.08,
            }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <r.Icon
              style={{
                width: "28px",
                height: "28px",
                color: iconColor,
                flexShrink: 0,
                marginTop: "0.2em",
              }}
              strokeWidth={1.75}
            />
            <span
              style={{
                fontSize: "24px",
                color: LIGHT,
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              {r.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Slide10() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="minimal" slideNumber={11} totalSlides={11}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "36px",
          overflowY: isMobile ? "auto" : undefined,
        }}
      >
        {/* TOP ANCHOR — EYEBROW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
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
          BRIDGE ROUND: THE ASK
        </motion.div>

        {/* HEADLINE */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EXPO_OUT, delay: 0.2 }}
            style={{
              fontSize: "clamp(34px, 5.2vw, 88px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: LIGHT,
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: MINT, fontWeight: 700 }}>€250k</span> unlocks{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>€425k</span>.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EXPO_OUT, delay: 0.35 }}
            style={{
              fontSize: "clamp(22px, 3vw, 48px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: LIGHT,
              lineHeight: 1.1,
            }}
          >
            Twelve months to a Series A on{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>€2.4M ARR</span>.
          </motion.div>
        </div>

        {/* TWO-COLUMN BLOCK */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          style={{
            width: "100%",
            maxWidth: "min(1300px, 100%)",
            margin: "0 auto",
            marginTop: "clamp(24px, 4vh, 56px)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
            gap: isMobile ? "40px" : "80px",
          }}
        >
          <Column label="USE OF FUNDS" rows={useOfFunds} baseDelay={0.78} iconColor={MINT} />
          <Column
            label="MILESTONES — DEC 2026"
            rows={milestones}
            baseDelay={0.86}
            iconColor={`${LIGHT}B3`}
          />
        </motion.div>

        {/* EXISTING INVESTORS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EXPO_OUT, delay: 1.15 }}
          style={{
            width: "100%",
            maxWidth: "min(1100px, 100%)",
            margin: "0 auto",
            marginTop: "clamp(20px, 3vh, 40px)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "20px",
              fontWeight: 600,
              color: MINT,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            EXISTING INVESTORS PARTICIPATING
          </div>
          <div
            style={{
              fontSize: "clamp(14px, 1.5vw, 20px)",
              fontWeight: 500,
              color: LIGHT,
              marginTop: "10px",
            }}
          >
            2 existing investors — names on request
          </div>
        </motion.div>

        {/* ITALIC CLOSE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EXPO_OUT, delay: 1.45 }}
          style={{
            width: "100%",
            maxWidth: "min(1200px, 100%)",
            margin: "0 auto",
            marginTop: "clamp(20px, 3vh, 40px)",
            fontSize: "28px",
            fontWeight: 400,
            fontStyle: "italic",
            color: LIGHT,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Join us as we rapidly expand our offering, scale up and position ourselves for Series A.
        </motion.div>

        {/* Bottom spacer */}
        <div style={{ height: "clamp(16px, 2vh, 32px)", flexShrink: 0 }} />
      </div>
    </SlideFrame>
  );
}
