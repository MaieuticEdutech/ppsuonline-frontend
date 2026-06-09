"use client";

import React from "react";

export default function SidebarApply() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999]">
      <button
        onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
        className="flex items-center justify-center text-white font-bold tracking-[2.5px] transition-all"
        style={{
          background: "linear-gradient(180deg,#B71C1C,#D32F2F)",
          width: 38,
          height: 136,
          border: "none",
          writingMode: "vertical-lr",
          transform: "rotate(180deg)",
          fontSize: 12,
          letterSpacing: "2.5px",
          borderTopRightRadius: 14,
          borderBottomRightRadius: 14,
          boxShadow: "0 8px 20px rgba(183,28,28,.25)",
          cursor: "pointer",
        }}
      >
        APPLY NOW
      </button>
    </div>
  );
}
