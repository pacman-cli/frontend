"use client";

import { useEffect, useState } from "react";
// import Logo from "./Logo";

export default function Splash() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Show only on the first visit within the session
    const seen = typeof window !== "undefined" && sessionStorage.getItem("splashSeen");
    if (!seen) {
      setVisible(true);
      const t = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("splashSeen", "1");
      }, 1400); // total duration ~1.4s
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A1930]">
      <div className="splash-anim flex items-center justify-center rounded-2xl border border-slate-800 p-8">
        <AnimatedCircleP />
      </div>
      <style>{`
        .splash-anim { 
          animation: splashScale 900ms ease-out forwards; 
          box-shadow: 0 8px 40px rgba(100,255,218,0.12);
          background: radial-gradient(120px 120px at center, rgba(100,255,218,0.06), transparent 60%);
        }
        @keyframes splashScale {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function AnimatedCircleP() {
  const cyan = "#64FFDA";

  return (
    <svg width={96} height={96} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Loading">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={cyan} stopOpacity="1" />
          <stop offset="100%" stopColor={cyan} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0B1D36" />
      <circle cx="32" cy="32" r="20" fill="none" stroke="url(#g)" strokeWidth="3" className="ring" strokeLinecap="round" strokeDasharray="60 100" />
      <text x="32" y="38" textAnchor="middle" fontSize="20" fontWeight="800" fill={cyan} fontFamily="Dank Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace">
        P
      </text>
      <style>{`
        .ring{ transform-origin: 32px 32px; animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg);} to{ transform: rotate(360deg);} }
      `}</style>
    </svg>
  );
}


