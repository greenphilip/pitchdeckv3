import { motion } from "framer-motion";
import { UploadCloud, Link2, ShieldCheck, Database, ArrowRight, ArrowDown, FileText } from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const NAVY = "#143560";
const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const TEAL = "#2D9D90";
const LIGHT_GRAY = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface CompoundingBar {
  leftLabel: string;
  rightLabel: string;
  color: string;
  widthPct: number;
  emphasis?: boolean;
}

const compoundingBars: CompoundingBar[] = [
  { leftLabel: "1st framework — CSRD", rightLabel: "2 months", color: TEAL, widthPct: 100 },
  { leftLabel: "2nd framework — EcoVadis", rightLabel: "1 month", color: BLUE, widthPct: 50 },
  { leftLabel: "3rd framework onward", rightLabel: "1 week", color: MINT, widthPct: 20, emphasis: true },
];

function CompoundingChart({ baseDelay }: { baseDelay: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EXPO_OUT, delay: baseDelay }}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          color: MINT,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
        }}
      >
        THE COMPOUNDING EFFECT
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {compoundingBars.map((b, i) => (
          <div
            key={b.leftLabel}
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: baseDelay + 0.1 + i * 0.15 }}
              style={{
                fontSize: "13px",
                color: `${LIGHT_GRAY}CC`,
                fontWeight: 500,
              }}
            >
              {b.leftLabel}
            </motion.div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  minWidth: 0,
                  height: "22px",
                  position: "relative",
                }}
              >
                <motion.div
                  initial={{ scaleX: 0, opacity: 0.8 }}
                  animate={{ scaleX: b.widthPct / 100, opacity: 1 }}
                  transition={{
                    duration: 0.5 - i * 0.1,
                    ease: EXPO_OUT,
                    delay: baseDelay + 0.18 + i * 0.15,
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: b.color,
                    borderRadius: 3,
                    transformOrigin: "left",
                    boxShadow: b.emphasis ? `0 0 16px ${b.color}55` : undefined,
                  }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: baseDelay + 0.18 + i * 0.15 + (0.5 - i * 0.1),
                }}
                style={{
                  fontSize: "16px",
                  fontWeight: b.emphasis ? 700 : 600,
                  color: b.color,
                  whiteSpace: "nowrap",
                  minWidth: "78px",
                  textAlign: "right",
                }}
              >
                {b.rightLabel}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type BoxProps = {
  number: string;
  Icon: typeof UploadCloud;
  headline: string;
  body: string;
  delay: number;
};

function WorkflowBox({ number, Icon, headline, body, delay }: BoxProps) {
  return (
    <motion.div
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      style={{
        background: NAVY,
        border: `1px solid ${MINT}4D`,
        borderRadius: 12,
        padding: "20px 22px",
        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "10px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "14px",
          color: MINT,
          fontWeight: 600,
          letterSpacing: "0.1em",
        }}
      >
        {number}
      </div>
      <Icon size={36} color={MINT} strokeWidth={1.5} style={{ width: "36px", height: "auto" }} />
      <div
        style={{
          fontSize: "20px",
          color: LIGHT_GRAY,
          fontWeight: 600,
        }}
      >
        {headline}
      </div>
      <div
        style={{
          fontSize: "15px",
          color: `${LIGHT_GRAY}CC`,
          lineHeight: 1.45,
          whiteSpace: "pre-line",
        }}
      >
        {body}
      </div>
    </motion.div>
  );
}

function ArrowCell({ delay, vertical }: { delay: number; vertical: boolean }) {
  const Icon = vertical ? ArrowDown : ArrowRight;
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: vertical ? "100%" : "48px",
        height: vertical ? "auto" : "100%",
        transformOrigin: "left",
      }}
    >
      <Icon
        size={32}
        color={MINT}
        strokeWidth={2}
        style={{ width: "32px", height: "auto", opacity: 0.7 }}
      />
    </motion.div>
  );
}

export default function Slide4() {
  const isMobile = useIsMobile();

  // Animation timing
  const tBox1 = 0.24;
  const tArrow1 = tBox1 + 0.4;
  const tBox2 = tArrow1 + 0.3;
  const tArrow2 = tBox2 + 0.4;
  const tBox3 = tArrow2 + 0.3;
  const tArrow3 = tBox3 + 0.4;
  const tBox4 = tArrow3 + 0.3;
  const tArrowCKP = tBox4 + 0.4;
  const tChart = tArrowCKP + 0.3;
  const tStrip = tChart + 0.6;

  return (
    <SlideFrame variant="technical" slideNumber={4} totalSlides={8}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "16px",
              color: MINT,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            THE PRODUCT
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            style={{
              fontSize: "64px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: LIGHT_GRAY,
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Meet <span style={{ color: MINT }}>Glacier.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: "easeOut" }}
            style={{
              marginTop: "4px",
              fontSize: "20px",
              color: `${LIGHT_GRAY}B3`,
              maxWidth: 900,
              lineHeight: 1.5,
            }}
          >
            One evidence graph. Every ESG framework reads from it.
          </motion.div>
        </div>

        {/* GAP */}
        <div style={{ height: "40px", flexShrink: 0 }} />

        {/* WORKFLOW — top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 48px 1fr 48px 1fr",
            gap: "24px",
            maxWidth: "min(1400px, 100%)",
            width: "100%",
            margin: "0 auto",
            alignItems: "stretch",
          }}
        >
          <WorkflowBox
            number="01"
            Icon={UploadCloud}
            headline="Documents"
            body={"Upload any format: PDF/PPT/DOC/XLS\nQuantity doesn't matter\n\nUnstructured data reflects company reality"}
            delay={tBox1}
          />
          <ArrowCell delay={tArrow1} vertical={isMobile} />
          <WorkflowBox
            number="02"
            Icon={Link2}
            headline="Glacier AI"
            body={"Matches evidence to requirements\nEvaluates quality\nProvides citations and improvements\n\n\nUser can draft, delegate, review, approve, export"}
            delay={tBox2}
          />
          <ArrowCell delay={tArrow2} vertical={isMobile} />
          <WorkflowBox
            number="03"
            Icon={ShieldCheck}
            headline="Report / Gap / Policy"
            body={"CSRD-grade reports, Ecovadis questionnaires, gap analysis, policy builders\n\n\n+ more ESG standards soon"}
            delay={tBox3}
          />
        </div>

        {/* DOWNWARD ARROW from Glacier AI to box 04 */}
        {!isMobile && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 48px 1fr 48px 1fr",
              gap: "24px",
              maxWidth: "min(1400px, 100%)",
              width: "100%",
              margin: "0 auto",
              marginTop: "12px",
              alignItems: "center",
            }}
          >
            <div />
            <div />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: tArrow3, ease: "easeOut" }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowDown
                size={40}
                color={MINT}
                strokeWidth={2}
                style={{ opacity: 0.8 }}
              />
            </motion.div>
            <div />
            <div />
          </div>
        )}

        {/* WORKFLOW — bottom row: box 04 anchored under Glacier AI */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 48px 1fr 48px 1fr",
            gap: "24px",
            maxWidth: "min(1400px, 100%)",
            width: "100%",
            margin: "0 auto",
            marginTop: isMobile ? "20px" : "8px",
            alignItems: "stretch",
          }}
        >
          {!isMobile && <div />}
          {!isMobile && <div />}
          {isMobile && <ArrowCell delay={tArrow3} vertical />}
          <WorkflowBox
            number="04"
            Icon={Database}
            headline="Client Knowledge Profile"
            body={"A compounding knowledge base to accelerate each future reporting questionnaire.\n\nProvides defensible moat and increases accuracy at scale."}
            delay={tBox4}
          />
          {!isMobile && <ArrowCell delay={tArrowCKP} vertical={false} />}
          {!isMobile && (
            <div
              style={{
                alignSelf: "center",
                width: "100%",
                paddingLeft: "22px",
                paddingRight: "22px",
                boxSizing: "border-box",
              }}
            >
              <CompoundingChart baseDelay={tChart} />
            </div>
          )}
          {isMobile && (
            <div style={{ marginTop: "20px" }}>
              <CompoundingChart baseDelay={tChart} />
            </div>
          )}
        </div>

        {/* GAP */}
        <div style={{ height: "20px", flexShrink: 0 }} />

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: tStrip, ease: "easeOut" }}
          style={{
            fontSize: "22px",
            fontWeight: 700,
            textAlign: "center",
            letterSpacing: "0.04em",
            width: "100%",
          }}
        >
          <span style={{ color: MINT }}>Deterministic</span>
          <span style={{ color: `${LIGHT_GRAY}66`, margin: "0 0.6em" }}>·</span>
          <span style={{ color: MINT }}>Auditable</span>
          <span style={{ color: `${LIGHT_GRAY}66`, margin: "0 0.6em" }}>·</span>
          <span style={{ color: MINT }}>Multi-framework</span>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
