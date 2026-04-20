import { motion } from "framer-motion";
import {
  HelpCircle,
  Repeat,
  Globe,
  Handshake,
  Landmark,
  ShieldAlert,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";

const uncertaintyItems = [
  { Icon: HelpCircle, text: "ESG is new, complex, changing" },
  { Icon: Repeat, text: "Regulation keeps moving" },
  { Icon: Globe, text: "Geopolitical volatility" },
];

const pressureItems = [
  { Icon: Handshake, text: "Customers and suppliers asking" },
  { Icon: Landmark, text: "Banks and investors demanding" },
  { Icon: ShieldAlert, text: "Regulators not waiting" },
];

export default function Slide2() {
  const isMobile = useIsMobile();

  const itemTextStyle: React.CSSProperties = {
    fontSize: "clamp(12px, 1.3vw, 18px)",
    fontWeight: 500,
    color: LIGHT,
    lineHeight: 1.3,
  };

  const columnLabelStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "clamp(11px, 1.2vw, 14px)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  };

  const iconSize = "clamp(16px, 1.6vw, 20px)";

  return (
    <SlideFrame variant="minimal" slideNumber={2} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* TOP: eyebrow + headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(10px, 1vw, 12px)",
            color: MINT,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textAlign: "center",
          }}
        >
          THE CUSTOMER'S SITUATION
        </motion.div>

        <div style={{ height: "clamp(8px, 1vh, 16px)" }} />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          style={{
            fontSize: "clamp(22px, 3.5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: LIGHT,
            margin: 0,
            maxWidth: "min(1200px, 92vw)",
            textAlign: "center",
          }}
        >
          Caught between what they{" "}
          <span style={{ color: BLUE }}>don't know</span> and what{" "}
          <span style={{ color: MINT }}>can't wait</span>.
        </motion.h1>

        {/* CENTER: vice diagram */}
        <div
          style={{
            marginTop: "clamp(24px, 5vh, 64px)",
            marginBottom: "auto",
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "1fr minmax(120px, 200px) 1fr",
            gap: isMobile ? "clamp(20px, 3vh, 32px)" : "clamp(16px, 3vw, 48px)",
            alignItems: "center",
          }}
        >
          {/* LEFT — UNCERTAINTY */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "flex-start" : "flex-end",
              gap: "clamp(10px, 1.5vh, 16px)",
            }}
          >
            <div
              style={{
                ...columnLabelStyle,
                color: BLUE,
                textAlign: isMobile ? "left" : "right",
              }}
            >
              UNCERTAINTY
            </div>
            {uncertaintyItems.map(({ Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.7 + i * 0.08,
                  ease: "easeOut",
                }}
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "row-reverse",
                  alignItems: "center",
                  gap: "clamp(8px, 1vw, 12px)",
                  textAlign: isMobile ? "left" : "right",
                }}
              >
                <Icon
                  style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
                  color={BLUE}
                  strokeWidth={1.5}
                />
                <span style={itemTextStyle}>{text}</span>
              </motion.div>
            ))}
          </div>

          {/* CENTER — THE REPORTING TEAM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.05, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(6px, 1vh, 10px)",
            }}
          >
            {!isMobile && (
              <ChevronDown
                size={16}
                color={LIGHT}
                style={{ opacity: 0.4 }}
                strokeWidth={1.5}
              />
            )}
            <div
              style={{
                border: `2px solid ${MINT}CC`,
                padding: "clamp(12px, 2vw, 20px)",
                borderRadius: 6,
                backgroundColor: "rgba(109, 212, 173, 0.04)",
                boxShadow: "0 0 32px rgba(109, 212, 173, 0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(4px, 0.5vh, 8px)",
                minWidth: "clamp(140px, 16vw, 200px)",
              }}
            >
              <Users
                style={{
                  width: "clamp(24px, 3vw, 40px)",
                  height: "clamp(24px, 3vw, 40px)",
                }}
                color={MINT}
                strokeWidth={1.5}
              />
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(10px, 1vw, 12px)",
                  fontWeight: 600,
                  color: MINT,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                THE REPORTING TEAM
              </div>
            </div>
            {!isMobile && (
              <ChevronUp
                size={16}
                color={LIGHT}
                style={{ opacity: 0.4 }}
                strokeWidth={1.5}
              />
            )}
          </motion.div>

          {/* RIGHT — PRESSURE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "clamp(10px, 1.5vh, 16px)",
            }}
          >
            <div style={{ ...columnLabelStyle, color: MINT, textAlign: "left" }}>
              PRESSURE
            </div>
            {pressureItems.map(({ Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.7 + i * 0.08,
                  ease: "easeOut",
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "clamp(8px, 1vw, 12px)",
                  textAlign: "left",
                }}
              >
                <Icon
                  style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
                  color={MINT}
                  strokeWidth={1.5}
                />
                <span style={itemTextStyle}>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM: thesis line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.75, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(12px, 1.5vh, 20px)",
            marginTop: "clamp(24px, 4vh, 48px)",
          }}
        >
          <div
            style={{
              width: "clamp(40px, 5vw, 60px)",
              height: 2,
              background: MINT,
            }}
          />
          <div
            style={{
              fontSize: "clamp(16px, 2vw, 28px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: LIGHT,
              opacity: 0.85,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            The work isn't going away. It's getting harder.
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
