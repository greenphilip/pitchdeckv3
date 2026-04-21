import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
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

// 6 placeholder logo slots — founder swaps in real logos.
const logoSlots = Array.from({ length: 6 }, (_, i) => ({ id: i }));

export default function Slide6() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="technical-light" slideNumber={6} totalSlides={10}>
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
            maxWidth: "min(1300px, 92vw)",
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
              fontSize: "clamp(12px, 1.1vw, 16px)",
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
              marginTop: "clamp(10px, 1.5vh, 20px)",
              fontSize: "clamp(20px, 3vw, 44px)",
              fontWeight: 600,
              color: LIGHT,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            <span style={{ color: MINT }}>7.5×</span> ARR growth. Burn down{" "}
            <span style={{ color: MINT }}>48%</span>. Closed with the companies{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>hardest to close</span>.
          </motion.h1>
        </div>

        {/* TOP HALF — chart + stats + customer impact */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 3vh, 32px)",
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
              padding: "clamp(16px, 2vw, 28px)",
              background: "rgba(255, 255, 255, 0.02)",
            }}
          >
            {/* Legend + annotation */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "clamp(12px, 2vw, 24px)",
                flexWrap: "wrap",
                marginBottom: "clamp(8px, 1.5vh, 16px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "clamp(12px, 2vw, 24px)",
                  flexWrap: "wrap",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(12px, 1.1vw, 14px)",
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
                  padding: "clamp(8px, 1.2vw, 14px)",
                  borderRadius: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(12px, 1.1vw, 14px)",
                  color: MINT,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                ARR ↑ 7.5×&nbsp;&nbsp;|&nbsp;&nbsp;BURN ↓ 48%
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: isMobile ? "clamp(180px, 26vh, 240px)" : "clamp(200px, 30vh, 300px)",
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

          {/* STATS STRIP */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(4, minmax(0, 1fr))",
              gap: "clamp(20px, 2.4vw, 40px)",
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
                  gap: "clamp(6px, 0.8vh, 10px)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(28px, 4vw, 56px)",
                    color: s.emphasis ? MINT : LIGHT,
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
                    fontSize: "clamp(12px, 1.1vw, 16px)",
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
              maxWidth: "clamp(320px, 36vw, 480px)",
              width: "100%",
              margin: "0 auto",
              border: `1px solid ${BLUE}4D`,
              padding: "clamp(16px, 2vw, 22px)",
              borderRadius: 6,
              background: "rgba(20, 53, 96, 0.6)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(8px, 1.2vh, 12px)",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(12px, 1.1vw, 14px)",
                color: MINT,
                fontWeight: 600,
                letterSpacing: "0.1em",
              }}
            >
              CUSTOMER IMPACT — MID-MARKET BENCHMARK
            </div>
            <div
              style={{
                fontSize: "clamp(13px, 1.1vw, 16px)",
                color: `${LIGHT}D9`,
                lineHeight: 1.5,
              }}
            >
              2,250 hours → 1,137 hours. €100k → €68k. ~50% time, ~32% cost reduction — first
              reporting cycle.
            </div>
          </motion.div>
        </div>

        {/* BOTTOM HALF — LOGO WALL */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(20px, 3vh, 32px)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "clamp(8px, 1.2vh, 14px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(12px, 1.1vw, 16px)",
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
                fontSize: "clamp(13px, 1.2vw, 16px)",
                color: `${LIGHT}B3`,
              }}
            >
              Enterprise and mid-market customers across industries.
            </motion.div>
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: "min(1400px, 100%)",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(auto-fit, minmax(110px, 1fr))"
                : "repeat(auto-fit, minmax(160px, 1fr))",
              gap: isMobile ? "clamp(18px, 3vw, 28px)" : "clamp(24px, 3vw, 56px)",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {logoSlots.map((slot, i) => (
              <motion.div
                key={slot.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EXPO_OUT, delay: 1.2 + i * 0.06 }}
                whileHover={{ scale: 1.03 }}
                style={{
                  height: isMobile ? "clamp(44px, 5.5vh, 64px)" : "clamp(56px, 7vh, 84px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "default",
                }}
              >
                <Building2
                  style={{
                    width: "clamp(36px, 4.5vw, 60px)",
                    height: "clamp(36px, 4.5vw, 60px)",
                    color: `${LIGHT}B3`,
                  }}
                  strokeWidth={1.5}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(11px, 1vw, 13px)",
              color: `${LIGHT}66`,
              textAlign: "center",
              letterSpacing: "0.02em",
            }}
          >
            // LOGO SLOTS — Replace with 3-8 recognizable enterprise customer logos. Monochrome
            Light Gray preferred.
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
}
