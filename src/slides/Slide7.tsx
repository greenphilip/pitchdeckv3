import { motion } from "framer-motion";
import { User } from "lucide-react";
import { SlideFrame } from "@/components/SlideFrame";
import { useIsMobile } from "@/hooks/useIsMobile";
import rainhardPhoto from "@/assets/team/rainhard-fuchs.png";
import alissaPhoto from "@/assets/team/alissa-kovarik.png";
import philipPhoto from "@/assets/team/philip.png";
import davidPhoto from "@/assets/team/david-anders.png";
import kishanPhoto from "@/assets/team/kishan.png";
import ninaPhoto from "@/assets/team/nina.png";
import pioneersLogo from "@/assets/logos/pioneers.png";
import wbcsdLogo from "@/assets/logos/wbcsd.png";
import inseadLogo from "@/assets/logos/insead-white.svg";
import osceLogo from "@/assets/logos/osce.svg";
import pwcLogo from "@/assets/logos/pwc.svg";
import oeamtcLogo from "@/assets/logos/oeamtc.svg";
import smartCounselLogo from "@/assets/logos/smart-counsel.png";
import bitpandaLogo from "@/assets/logos/bitpanda.svg";
import shpockLogo from "@/assets/logos/shpock.svg";
import bmdwLogo from "@/assets/logos/bmdw.png";
import jaAustriaLogo from "@/assets/logos/ja-austria.png";

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
  logos?: { src: string; invert?: boolean; boxed?: boolean; mono?: boolean; height?: number }[];
}

const team: Member[] = [
  {
    name: "Rainhard Fuchs",
    title: "CEO & Founder",
    background: "Ex-Head of Public Sector, Pioneers.io. 10+ years corporate and government sales.",
    photo: rainhardPhoto,
    logos: [{ src: pioneersLogo, invert: true }, { src: bmdwLogo, mono: true }],
  },
  {
    name: "Alissa Kovarik",
    title: "Head of Product",
    background: "Former President JA Austria. 5+ years building sustainability products.",
    photo: alissaPhoto,
    logos: [{ src: jaAustriaLogo, mono: true }],
  },
  {
    name: "Philip Reuchlin",
    title: "Senior Advisor, AI & ESG",
    background: "20+ years sustainability, already scaled ESG startup to Series A, INSEAD MBA",
    photo: philipPhoto,
    logos: [
      { src: osceLogo, mono: true },
      { src: wbcsdLogo, mono: true },
      { src: inseadLogo },
    ],
  },
  {
    name: "David Anders",
    title: "Head of ESG Delivery",
    background: "Previously PWC; Head of ESG at Burgenland Energie; ÖAMTC.",
    photo: davidPhoto,
    logos: [
      { src: pwcLogo },
      { src: oeamtcLogo },
    ],
  },
  {
    name: "Kishan Chimminiyan",
    title: "Head of Engineering",
    background: "full-stack, 10+years building with applied LLM products (GPT-3 era onward) ",
    photo: kishanPhoto,
    logos: [{ src: smartCounselLogo }],
  },
  {
    name: "Nina Aichinger",
    title: "Head of People",
    background: "10+ years at fast scaling startups, previously Head of HR at Bitpanda and Shpock.",
    photo: ninaPhoto,
    logos: [
      { src: bitpandaLogo, mono: true },
      { src: shpockLogo, invert: true },
    ],
  },
];

const MAX_LOGOS = Math.max(...team.map((m) => m.logos?.length ?? 0));

export default function Slide7() {
  const isMobile = useIsMobile();

  return (
    <SlideFrame variant="minimal" slideNumber={7} totalSlides={8}>
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
            marginTop: isMobile ? "16px" : "48px",
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
              fontSize: "clamp(26px, 6.5vw, 64px)",
              fontWeight: 600,
              color: LIGHT,
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              textAlign: "center",
            }}
          >
            <span style={{ color: BLUE }}>Regulatory depth.</span>{" "}
            <span style={{ color: LIGHT }}>Experience in scaling SaaS.</span>{" "}
            <span style={{ color: MINT, fontWeight: 700 }}>Applied AI.</span>
          </motion.h1>
        </div>

        {/* TEAM GRID */}
        <div
          style={{
            width: "100%",
            maxWidth: "min(1400px, 100%)",
            margin: "0 auto",
            marginTop: isMobile ? "24px" : "56px",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(6, minmax(0, 1fr))",
            gap: isMobile ? "32px" : "40px",
          }}
        >
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EXPO_OUT, delay: 0.35 + i * 0.08 }}
              style={{
                display: "grid",
                gridTemplateRows: "auto auto auto 1fr auto",
                justifyItems: "center",
                textAlign: "center",
                rowGap: "16px",
                height: "100%",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "clamp(120px, 32vw, 160px)",
                  height: "clamp(120px, 32vw, 160px)",
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

              {/* NAME slot — reserved for up to 2 lines so titles align across cards */}
              <div
                style={{
                  fontSize: "22px",
                  color: LIGHT,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  minHeight: "calc(22px * 1.2 * 2)",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "8px",
                }}
              >
                {m.name}
              </div>
              {/* TITLE slot — shared baseline across all cards */}
              <div
                style={{
                  fontSize: "17px",
                  color: MINT,
                  lineHeight: 1.3,
                }}
              >
                {m.title}
              </div>

              <div
                style={{
                  fontSize: "clamp(15px, 1.05vw, 19px)",
                  color: `${LIGHT}B3`,
                  lineHeight: 1.5,
                  alignSelf: "start",
                }}
              >
                {m.background}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateRows: `repeat(${MAX_LOGOS}, 1fr)`,
                  rowGap: "16px",
                  justifyItems: "center",
                  alignItems: "center",
                  alignSelf: "end",
                  width: "100%",
                  minHeight: isMobile ? "120px" : "180px",
                }}
              >
                {Array.from({ length: MAX_LOGOS }).map((_, idx) => {
                  const logo = m.logos?.[idx];
                  if (!logo) {
                    return <div key={idx} aria-hidden style={{ width: "100%" }} />;
                  }
                  const h = isMobile ? 36 : 52;
                  return (
                    <img
                      key={idx}
                      src={logo.src}
                      alt=""
                      style={{
                        height: `${h}px`,
                        width: "auto",
                        maxWidth: isMobile ? "150px" : "200px",
                        objectFit: "contain",
                        opacity: logo.invert || logo.mono ? 0.95 : 1,
                        filter:
                          logo.mono || logo.invert
                            ? "invert(1) brightness(1.15) contrast(1.05)"
                            : undefined,
                        display: "block",
                      }}
                    />
                  );
                })}
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
        <div style={{ height: isMobile ? "24px" : "80px", flexShrink: 0 }} />

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
