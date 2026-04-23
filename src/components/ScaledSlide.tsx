import { ReactNode, useEffect, useRef } from "react";

/**
 * Locks slide content to a fixed PowerPoint canvas (1920×1080) and uniformly
 * scales it to fit any viewport — like PowerPoint slideshow mode.
 * Letterboxes (black bars) when aspect ratios differ.
 */
export function ScaledSlide({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const stage = stageRef.current;
    if (!outer || !stage) return;

    const apply = () => {
      const w = outer.clientWidth;
      const h = outer.clientHeight;
      const scale = Math.min(w / 1920, h / 1080);
      stage.style.setProperty("--slide-scale", String(scale));
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(outer);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={outerRef}
      style={{
        position: "absolute",
        inset: 0,
        background: "#000",
        overflow: "hidden",
      }}
    >
      <div
        ref={stageRef}
        style={{
          position: "absolute",
          width: 1920,
          height: 1080,
          left: "50%",
          top: "50%",
          marginLeft: -960,
          marginTop: -540,
          transform: "scale(var(--slide-scale, 1))",
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
