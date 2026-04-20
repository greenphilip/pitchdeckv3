import { SlideFrame } from "@/components/SlideFrame";

export default function Slide9() {
  return (
    <SlideFrame variant="minimal" slideNumber={9} totalSlides={10}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "clamp(48px, 8vw, 144px)", color: "#A8E6CF", fontWeight: 600 }}>
          Slide 9
        </span>
      </div>
    </SlideFrame>
  );
}
