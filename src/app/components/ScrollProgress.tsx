"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const currentRef = useRef(0); // 0..100
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateTarget = () => {
      const h = document.documentElement;
      const st = h.scrollTop || document.body.scrollTop;
      const sh = h.scrollHeight - h.clientHeight;
      targetRef.current = sh > 0 ? (st / sh) * 100 : 0;
      startAnim();
    };

    const startAnim = () => {
      if (rafRef.current != null) return; // already animating
      const tick = () => {
        // lerp towards target for smoothness
        const cur = currentRef.current;
        const tar = targetRef.current;
        const next = cur + (tar - cur) * 0.18; // smoothing factor
        currentRef.current = next;
        if (barRef.current) {
          const scale = Math.max(0, Math.min(1, next / 100));
          barRef.current.style.transform = `scaleX(${scale})`;
        }
        if (Math.abs(tar - next) > 0.2) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          currentRef.current = tar;
          if (barRef.current) barRef.current.style.transform = `scaleX(${Math.max(0, Math.min(1, tar / 100))})`;
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    updateTarget();
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);
    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div aria-hidden className="fixed left-0 right-0 top-14 z-[60] h-0.5 bg-slate-800/50 pointer-events-none">
      <div
        ref={barRef}
        className="h-full origin-left bg-[#64FFDA] will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}


