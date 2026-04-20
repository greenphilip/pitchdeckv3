import { SlideFrame } from "@/components/SlideFrame";

export default function Slide3() {
  return (
    <SlideFrame variant="minimal" slideNumber={3} totalSlides={10}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "clamp(48px, 8vw, 144px)", color: "#A8E6CF", fontWeight: 600 }}>
          Slide 3
        </span>
      </div>
    </SlideFrame>
  );
}
