import { motion } from "framer-motion";
import { User } from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";
import rainhardPhoto from "@/assets/team/rainhard-fuchs.png";
import philipPhoto from "@/assets/team/philip.png";
import davidPhoto from "@/assets/team/david-anders.png";
import kishanPhoto from "@/assets/team/kishan.png";

const MINT = "#6DD4AD";
const BLUE = "#539ADB";
const LIGHT = "#F1F1F1";
const NAVY = "#143560";
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Member {
  name: string;
  title: string;
  background: string;
  photo?: string;
}

const team: Member[] = [
  {
    name: "Rainhard Fuchs",
    title: "CEO & Founder",
    background: "Ex-Head of Public Sector, Pioneers.io. 10+ years corporate and government sales.",
    photo: rainhardPhoto,
  },
  {
    name: "Philip",
    title: "VP of AI & ESG",
    background: "20+ years sustainability and strategy: OSCE, WBCSD, INSEAD MBA",
    photo: philipPhoto,
  },
  {
    name: "David Anders",
    title: "Head of ESG Delivery",
    background: "Previously PWC; Head of ESG at Burgenland Energie; ÖAMTC.",
    photo: davidPhoto,
  },
  {
    name: "Kishan Chimminiyan",
    title: "CTO & Head of Engineering",
    background: "full-stack, 10+years building with applied LLM products (GPT-3 era onward) ",
  },
  {
    name: "Nina Aichinger",
    title: "Head of People",
    background: "Previously Head of HR at Bitpanda and Shpock.",
  },
];

export default function Slide9() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="minimal" slideNumber={10} totalSlides={11}>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          gap: "32px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginTop: "48px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EXPO_OUT, delay: 0.1 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "20px",
              color: MINT,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            TEAM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EXPO_OUT, delay: 0.18 }}
            style={{
              margin: 0,
              marginTop: "20px",
              fontSize: "64px",
              fontWeight: 600,
              color: LIGHT,
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              textAlign: "center",
            }}
          >
            <span style={{ color: BLUE }}>Regulatory depth.</span>{" "}
            <span style={{ color: LIGHT }}>Product discipline.</span>{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>Applied AI.</span>
          </motion.h1>
        </div>

        {/* TEAM GRID */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            margin: "0 auto",
            marginTop: "56px",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(5, minmax(0, 1fr))",
            gap: isMobile ? "32px" : "40px",
            maxHeight: isMobile ? "55vh" : undefined,
            overflowY: isMobile ? "auto" : undefined,
          }}
        >
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EXPO_OUT, delay: 0.35 + i * 0.08 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "24px",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: `${BLUE}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                ) : (
                  <User
                    style={{
                      width: "50%",
                      height: "50%",
                      color: `${LIGHT}99`,
                    }}
                    strokeWidth={1.5}
                  />
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "22px",
                    color: LIGHT,
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {m.name}
                </div>
                <div
                  style={{
                    fontSize: "17px",
                    color: MINT,
                    lineHeight: 1.3,
                  }}
                >
                  {m.title}
                </div>
              </div>

              <div
                style={{
                  fontSize: "18px",
                  color: `${LIGHT}B3`,
                  lineHeight: 1.45,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {m.background}
              </div>
            </motion.div>
          ))}
        </div>

        {/* THESIS LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 + team.length * 0.08 + 0.2 }}
          style={{
            width: "100%",
            maxWidth: "min(1000px, 100%)",
            margin: "0 auto",
            marginTop: "56px",
            fontSize: "26px",
            fontWeight: 400,
            fontStyle: "italic",
            color: `${LIGHT}CC`,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          {" "}
        </motion.div>

        {/* Spacer above bottom anchor — explicit, not auto */}
        <div style={{ height: "80px", flexShrink: 0 }} />

        {/* BOTTOM ANCHOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.35 + team.length * 0.08 + 0.4 }}
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "20px",
            color: `${LIGHT}B3`,
            paddingTop: "16px",
          }}
        >
          Headcount: <span style={{ color: MINT, fontWeight: 700 }}>15</span> today. Hiring{" "}
          <span style={{ color: MINT, fontWeight: 700 }}>4-5</span> with this round.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
