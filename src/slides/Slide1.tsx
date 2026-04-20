import { motion } from "framer-motion";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";

export default function Slide1() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="minimal" slideNumber={1} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        {/* Top anchor: wordmark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            fontSize: "clamp(20px, 2.2vw, 32px)",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: MINT,
          }}
        >
          Glacier
        </motion.div>

        {/* Center: headline block */}
        <div
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(16px, 3vh, 36px)",
            maxWidth: "min(1300px, 92vw)",
            width: "100%",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            style={{
              fontSize: "clamp(28px, 4.5vw, 64px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: LIGHT,
              margin: 0,
            }}
          >
            Between regulatory{" "}
            <span style={{ color: BLUE }}>chaos</span> and relentless{" "}
            <span style={{ color: MINT }}>pressure</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            style={{
              fontSize: "clamp(16px, 2vw, 28px)",
              fontWeight: 400,
              lineHeight: 1.5,
              color: LIGHT,
              opacity: 0.85,
              margin: 0,
            }}
          >
            Glacier helps companies get ESG reporting done —{" "}
            <span style={{ color: MINT, fontWeight: 500 }}>faster</span>, with{" "}
            <span style={{ color: MINT, fontWeight: 500 }}>
              quality they can defend
            </span>
            .
          </motion.p>
        </div>

        {/* Bottom anchor: meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.4, ease: "easeOut" }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(11px, 1vw, 14px)",
            color: LIGHT,
            opacity: 0.55,
            letterSpacing: "0.02em",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "4px" : "0",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          {isMobile ? (
            <>
              <div>
                <span style={{ color: MINT, fontWeight: 600, opacity: 1 / 0.55 }}>
                  Glacier
                </span>{" "}
                • April 2026
              </div>
              <div>Bridge round • €250k → unlocks €425k</div>
            </>
          ) : (
            <div>
              <span style={{ color: MINT, fontWeight: 600, opacity: 1 / 0.55 }}>
                Glacier
              </span>
              {"  •  April 2026  •  Bridge round  •  €250k → unlocks €425k"}
            </div>
          )}
        </motion.div>
      </div>
    </SlideFrame>
  );
}
