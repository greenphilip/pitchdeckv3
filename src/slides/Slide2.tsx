import { motion } from "framer-motion";
import {
  HelpCircle,
  Repeat,
  Globe,
  Handshake,
  Landmark,
  ShieldAlert,
} from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const uncertaintyItems = [
  { Icon: HelpCircle, text: "ESG is a new, complex subject for most" },
  { Icon: Repeat, text: "Regulation keeps moving" },
  { Icon: Globe, text: "Internal data is fragmented, missing" },
];

const pressureItems = [
  { Icon: Handshake, text: "Customers and suppliers asking" },
  { Icon: Landmark, text: "Banks and investors demanding transparency" },
  { Icon: ShieldAlert, text: "Regulators not waiting, ready to fine" },
];

// Unified stagger order: L0, R0, L1, R1, L2, R2 — one coordinated sequence.
const ITEM_BASE_DELAY = 0.7;
const ITEM_STEP = 0.06;

export default function Slide2() {
  const isMobile = useIsMobile();

  const itemTextStyle: React.CSSProperties = {
    fontSize: "22px",
    fontWeight: 500,
    color: LIGHT,
    lineHeight: 1.3,
  };

  const columnLabelStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "20px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  };

  const iconSize = "20px";

  // Row with bottom divider, full width
  const rowStyle = (align: "left" | "right"): React.CSSProperties => ({
    display: "flex",
    flexDirection: align === "right" && !isMobile ? "row-reverse" : "row",
    alignItems: "center",
    gap: "12px",
    textAlign: align === "right" && !isMobile ? "right" : "left",
    width: "100%",
    paddingBottom: "12px",
    borderBottom: `1px solid ${BLUE}26`,
  });

  return (
    <SlideFrame variant="minimal" slideNumber={2} totalSlides={10}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* TOP: eyebrow + headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EXPO_OUT }}
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
          THE CUSTOMER'S SITUATION
        </motion.div>

        <div style={{ height: "16px" }} />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EXPO_OUT }}
          style={{
            fontSize: "64px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: LIGHT,
            margin: 0,
            maxWidth: "1400px",
            textAlign: "center",
          }}
        >
          <span style={{ display: "block" }}>EU companies are caught between what</span>
          <span style={{ display: "block" }}>
            they <span style={{ color: BLUE }}>don't know</span> and what{" "}
          <span style={{ color: MINT, position: "relative", display: "inline-block" }}>
            can't wait
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.95, ease: EXPO_OUT }}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "-0.08em",
                height: 1,
                background: MINT,
                transformOrigin: "left",
                display: "block",
              }}
            />
            </span>
            .
          </span>
        </motion.h1>

        {/* CENTER: vice diagram */}
        <div
          style={{
            marginTop: "64px",
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "1fr minmax(260px, 360px) 1fr",
            gap: isMobile ? "32px" : "72px",
            alignItems: "center",
          }}
        >
          {/* LEFT — UNCERTAINTY */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "stretch" : "flex-end",
              gap: "16px",
              position: "relative",
            }}
          >
            <div
              style={{
                ...columnLabelStyle,
                color: BLUE,
                textAlign: isMobile ? "left" : "right",
                display: "flex",
                gap: 8,
                justifyContent: isMobile ? "flex-start" : "flex-end",
              }}
            >
              <span style={{ opacity: 0.5 }}>01</span>
              <span style={{ opacity: 0.4 }}>—</span>
              <span>UNCERTAINTY</span>
            </div>
            {uncertaintyItems.map(({ Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: ITEM_BASE_DELAY + i * 2 * ITEM_STEP,
                  ease: EXPO_OUT,
                }}
                style={rowStyle("right")}
              >
                <Icon
                  style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
                  color={BLUE}
                  strokeWidth={1.5}
                />
                <span style={itemTextStyle}>{text}</span>
              </motion.div>
            ))}

            {/* Inward arrow — desktop only */}
            {!isMobile && (
              <motion.svg
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1, ease: EXPO_OUT }}
                width="100%"
                height="22"
                viewBox="0 0 200 22"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  right: "-22%",
                  top: "50%",
                  width: "30%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <linearGradient id="arrL" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={BLUE} stopOpacity="0" />
                    <stop offset="100%" stopColor={BLUE} stopOpacity="1" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="11" x2="188" y2="11" stroke="url(#arrL)" strokeWidth="2.5" />
                <polyline
                  points="178,3 196,11 178,19"
                  fill="none"
                  stroke={BLUE}
                  strokeOpacity="1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            )}
          </div>

          {/* CENTER — pressure point */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1, x: [0, -2, 0, 2, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 1.15, ease: EXPO_OUT },
              scale: { duration: 0.6, delay: 1.15, ease: EXPO_OUT },
              x: { duration: 1.4, delay: 1.4, ease: "easeInOut" },
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              position: "relative",
            }}
          >
            {/* Concentric pulse rings */}
            <div
              style={{
                position: "relative",
                width: "120px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  aria-hidden
                  animate={{ scale: [0.6, 1.6], opacity: [0.45, 0] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: 1.4 + i * 0.65,
                    ease: "easeOut",
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: `1px solid ${MINT}`,
                  }}
                />
              ))}
              {/* Soft halo */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "-30%",
                  background:
                    "radial-gradient(circle, rgba(109,212,173,0.18), transparent 65%)",
                  pointerEvents: "none",
                }}
              />
              {/* Core dot */}
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: MINT,
                  boxShadow: `0 0 24px ${MINT}AA`,
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "18px",
                fontWeight: 600,
                color: MINT,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                textAlign: "center",
                whiteSpace: "pre-line",
              }}
            >
              COMPANIES<br />OF ALL SIZES
            </div>
          </motion.div>

          {/* RIGHT — PRESSURE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              gap: "16px",
              position: "relative",
            }}
          >
            <div
              style={{
                ...columnLabelStyle,
                color: MINT,
                textAlign: "left",
                display: "flex",
                gap: 8,
              }}
            >
              <span style={{ opacity: 0.5 }}>02</span>
              <span style={{ opacity: 0.4 }}>—</span>
              <span>PRESSURE</span>
            </div>
            {pressureItems.map(({ Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: ITEM_BASE_DELAY + (i * 2 + 1) * ITEM_STEP,
                  ease: EXPO_OUT,
                }}
                style={rowStyle("left")}
              >
                <Icon
                  style={{ width: iconSize, height: iconSize, flexShrink: 0 }}
                  color={MINT}
                  strokeWidth={1.5}
                />
                <span style={itemTextStyle}>{text}</span>
              </motion.div>
            ))}

            {/* Inward arrow — desktop only */}
            {!isMobile && (
              <motion.svg
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1, ease: EXPO_OUT }}
                width="100%"
                height="22"
                viewBox="0 0 200 22"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  left: "-22%",
                  top: "50%",
                  width: "30%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <linearGradient id="arrR" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor={MINT} stopOpacity="0" />
                    <stop offset="100%" stopColor={MINT} stopOpacity="1" />
                  </linearGradient>
                </defs>
                <line x1="12" y1="11" x2="200" y2="11" stroke="url(#arrR)" strokeWidth="2.5" />
                <polyline
                  points="22,3 4,11 22,19"
                  fill="none"
                  stroke={MINT}
                  strokeOpacity="1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            )}
          </div>
        </div>

        {/* BOTTOM: thesis line — serif italic, the slide's typographic moment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.85, ease: EXPO_OUT }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: 2,
              background: MINT,
            }}
          />
          <div
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "36px",
              fontWeight: 400,
              fontStyle: "italic",
              color: LIGHT,
              opacity: 0.9,
              textAlign: "center",
              lineHeight: 1.35,
              letterSpacing: "-0.005em",
            }}
          >
            The pressure is building on companies
            <br />
            to turn ESG into strategic advantage
            <br />
            and reduce compliance cost
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
