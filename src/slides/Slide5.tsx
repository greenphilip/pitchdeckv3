import { motion } from "framer-motion";
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";
import voeslauerLogo from "@/assets/logos/voeslauer.svg";
import lenzingLogo from "@/assets/logos/lenzing.svg";
import stihlLogo from "@/assets/logos/stihl.svg";
import wuerthLogo from "@/assets/logos/wuerth.svg";

import deutscheTelekomLogo from "@/assets/logos/deutsche-telekom.svg";
import fraportLogo from "@/assets/logos/fraport.svg";
import andritzLogo from "@/assets/logos/andritz.svg";
import evnLogo from "@/assets/logos/evn.svg";
import knaufLogo from "@/assets/logos/knauf.svg";
import rlbOoeLogo from "@/assets/logos/rlb-ooe.svg";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const TEAL = "#2D9D90";
const LIGHT = "#F1F1F1";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const chartData = [
  { year: "2024", arr: 70, burn: 52 },
  { year: "2025", arr: 526, burn: 27 },
];

interface Stat {
  number: string;
  label: string;
  emphasis?: boolean;
}

const stats: Stat[] = [
  { number: "26", label: "ENTERPRISE CLIENTS" },
  { number: "€526k", label: "ARR END-2025" },
  { number: "€20k", label: "AVERAGE ACV" },
  { number: "−48%", label: "CASH BURN YoY", emphasis: true },
];

const logos = [
  { src: deutscheTelekomLogo, alt: "Deutsche Telekom" },
  { src: evnLogo, alt: "EVN" },
  { src: stihlLogo, alt: "STIHL" },
  { src: wuerthLogo, alt: "Würth" },
  { src: fraportLogo, alt: "Fraport" },
  { src: knaufLogo, alt: "Knauf" },
  { src: andritzLogo, alt: "Andritz" },
  { src: lenzingLogo, alt: "Lenzing" },
  { src: voeslauerLogo, alt: "Vöslauer" },
  { src: rlbOoeLogo, alt: "RLB Oberösterreich" },
];

export default function Slide5() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="technical-light" slideNumber={5} totalSlides={8}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          gap: isMobile ? "48px" : "48px",
          overflowY: isMobile ? "auto" : undefined,
        }}
      >
        {/* HEADER */}
        <div
          style={{
            width: "100%",
            maxWidth: "1300px",
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
            TRACTION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EXPO_OUT, delay: 0.08 }}
            style={{
              margin: 0,
              marginTop: "14px",
              fontSize: "clamp(22px, 5.5vw, 44px)",
              fontWeight: 600,
              color: LIGHT,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            <span style={{ color: MINT, fontWeight: 700 }}>7.5×</span> ARR growth. Burn down{" "}
            <span style={{ color: BLUE, fontWeight: 700 }}>48%</span>.
            <br />
            Working with some of{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>hardest to close</span> companies.
          </motion.h1>
        </div>

        {/* BODY — 2-col on desktop: [chart + stats + impact] | [logo wall] */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.35fr) minmax(0, 0.9fr)",
            gap: isMobile ? "48px" : "96px",
            alignItems: "stretch",
          }}
        >
        {/* LEFT COLUMN — chart + stats + impact */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            minWidth: 0,
          }}
        >
          {/* CHART */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EXPO_OUT, delay: 0.2 }}
            style={{
              position: "relative",
              width: "100%",
              border: `1px solid ${BLUE}33`,
              borderRadius: 6,
              padding: "20px",
              background: "rgba(255, 255, 255, 0.02)",
            }}
          >
            {/* Legend + annotation */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "24px",
                flexWrap: "wrap",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "18px",
                  color: `${LIGHT}B3`,
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      background: MINT,
                      borderRadius: 2,
                      display: "inline-block",
                    }}
                  />
                  ARR (bars)
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 14,
                      height: 2,
                      background: BLUE,
                      display: "inline-block",
                    }}
                  />
                  Avg monthly burn (line)
                </span>
              </div>
              <div
                style={{
                  border: `1px solid ${MINT}`,
                  padding: "14px",
                  borderRadius: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "18px",
                  color: MINT,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                ARR ↑ 7.5×&nbsp;&nbsp;|&nbsp;&nbsp;<span style={{ color: BLUE }}>BURN ↓ 48%</span>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: isMobile ? "240px" : "230px",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 24, right: 16, bottom: 8, left: 8 }}>
                  <CartesianGrid stroke={`${BLUE}1A`} vertical={false} />
                  <XAxis
                    dataKey="year"
                    stroke={`${LIGHT}99`}
                    tick={{
                      fill: `${LIGHT}99`,
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 12,
                    }}
                    axisLine={{ stroke: `${BLUE}33` }}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke={`${LIGHT}99`}
                    tick={{
                      fill: `${LIGHT}99`,
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 11,
                    }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `€${v}k`}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke={`${LIGHT}99`}
                    tick={{
                      fill: `${LIGHT}99`,
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 11,
                    }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `€${v}k`}
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="arr"
                    radius={[4, 4, 0, 0]}
                    label={{
                      position: "top",
                      fill: LIGHT,
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 13,
                      fontWeight: 600,
                      formatter: (v: number) => `€${v}k`,
                    }}
                    isAnimationActive
                    animationDuration={700}
                    maxBarSize={80}
                  >
                    {chartData.map((d, i) => (
                      <Cell key={d.year} fill={i === 0 ? TEAL : MINT} />
                    ))}
                  </Bar>
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="burn"
                    stroke={BLUE}
                    strokeWidth={2.5}
                    dot={{ r: 5, fill: BLUE, strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                    label={{
                      position: "top",
                      fill: BLUE,
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 12,
                      fontWeight: 600,
                      formatter: (v: number) => `€${v}k`,
                    }}
                    isAnimationActive
                    animationDuration={900}
                    animationBegin={500}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* STATS — 2x2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              columnGap: "24px",
              rowGap: "20px",
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EXPO_OUT, delay: 0.5 + i * 0.08 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(36px, 9vw, 56px)",
                    color: s.emphasis ? BLUE : LIGHT,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {s.number}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "15px",
                    color: `${LIGHT}B3`,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CUSTOMER IMPACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EXPO_OUT, delay: 0.9 }}
            style={{
              maxWidth: "100%",
              width: "100%",
              border: `1px solid ${BLUE}4D`,
              padding: "16px",
              borderRadius: 6,
              background: "rgba(20, 53, 96, 0.6)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "15px",
                color: MINT,
                fontWeight: 600,
                letterSpacing: "0.1em",
              }}
            >
              CUSTOMER IMPACT — MID-MARKET BENCHMARK
            </div>
            <div
              style={{
                fontSize: "16px",
                color: `${LIGHT}D9`,
                lineHeight: 1.5,
              }}
            >
              2,250 hours → 1,137 hours. €100k → €68k. ~50% time, ~32% cost reduction — first
              reporting cycle.
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — TRUSTED BY + 5×2 logo grid (10 logos, vertically distributed) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch",
            gap: "20px",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "16px",
                color: MINT,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              TRUSTED BY
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.08 }}
              style={{
                fontSize: "15px",
                color: `${LIGHT}B3`,
              }}
            >
              Enterprise and mid-market customers across industries.
            </motion.div>
          </div>

          <div
            style={{
              width: "100%",
              flex: 1,
              minHeight: 0,
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(2, minmax(0, 1fr))",
              gridAutoRows: "1fr",
              columnGap: isMobile ? "28px" : "28px",
              rowGap: "18px",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {logos.map((logo, i) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EXPO_OUT, delay: 1.2 + i * 0.05 }}
                whileHover={{ scale: 1.04, opacity: 1 }}
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "default",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxHeight: isMobile ? "47px" : "50px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.75,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </SlideFrame>
  );
}
