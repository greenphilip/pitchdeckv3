import { SlideFrame } from "@/components/SlideFrame";

export default function Slide10() {
  return (
    <SlideFrame variant="minimal" slideNumber={10} totalSlides={10}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "clamp(48px, 8vw, 144px)", color: "#A8E6CF", fontWeight: 600 }}>
          Slide 10
        </span>
      </div>
    </SlideFrame>
  );
}
