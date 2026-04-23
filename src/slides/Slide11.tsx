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
}: {
  label: string;
  rows: Row[];
  baseDelay: number;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 2vh, 20px)" }}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: EXPO_OUT, delay: baseDelay }}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(13px, 1vw, 20px)",
          color: MINT,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 2vh, 20px)" }}>
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
              gap: "clamp(10px, 1.2vw, 14px)",
            }}
          >
            <r.Icon
              style={{
                width: "clamp(20px, 1.7vw, 28px)",
                height: "clamp(20px, 1.7vw, 28px)",
                color: MINT,
                flexShrink: 0,
                marginTop: "0.2em",
              }}
              strokeWidth={1.75}
            />
            <span
              style={{
                fontSize: "clamp(15px, 1.4vw, 24px)",
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
    <SlideFrame variant="minimal" slideNumber={10} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "clamp(20px, 3vh, 36px)",
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
            fontSize: "clamp(13px, 1vw, 20px)",
            color: MINT,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textAlign: "center",
          }}
        >
          THE ASK
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
            gap: "clamp(8px, 1.2vh, 14px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EXPO_OUT, delay: 0.2 }}
            style={{
              fontSize: "clamp(34px, 5.2vw, 104px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: LIGHT,
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: MINT, fontWeight: 700 }}>€300k</span> unlocks{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>€750k</span>.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EXPO_OUT, delay: 0.35 }}
            style={{
              fontSize: "clamp(28px, 4vw, 80px)",
              fontWeight: 700,
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
            maxWidth: "min(1100px, 100%)",
            margin: "0 auto",
            marginTop: "clamp(16px, 3vh, 44px)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
            gap: isMobile ? "clamp(28px, 4.5vh, 40px)" : "clamp(32px, 4.5vw, 80px)",
          }}
        >
          <Column label="USE OF FUNDS" rows={useOfFunds} baseDelay={0.78} />
          <Column label="MILESTONES — DEC 2026" rows={milestones} baseDelay={0.86} />
        </motion.div>

        {/* ITALIC CLOSE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EXPO_OUT, delay: 1.3 }}
          style={{
            width: "100%",
            maxWidth: "min(1200px, 100%)",
            margin: "0 auto",
            marginTop: "clamp(28px, 4.5vh, 56px)",
            fontSize: "clamp(15px, 1.6vw, 28px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: `${MINT}E6`,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          We're building for the customers who{" "}
          <span style={{ color: MINT, fontWeight: 700, fontStyle: "italic" }}>
            can't afford to be wrong
          </span>
          . Come underwrite the companies who close hardest.
        </motion.div>

        {/* Spacer above bottom placeholder — explicit, not auto */}
        <div style={{ height: "clamp(20px, 4vh, 60px)", flexShrink: 0 }} />

        {/* BOTTOM PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.7 }}
          style={{
            width: "100%",
            paddingTop: "clamp(8px, 1.5vh, 16px)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(12px, 0.9vw, 17px)",
            color: `${LIGHT}80`,
            textAlign: "center",
            letterSpacing: "0.02em",
          }}
        >
          [Existing investor participation: add here if applicable — critical signal]
        </motion.div>
      </div>
    </SlideFrame>
  );
}
