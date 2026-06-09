"use client";

import React from "react";

export default function StickyPhone() {
  return (
    <a
      href="tel:7778879189"
      className="fixed bottom-7 left-7 z-[999] flex items-center gap-2 text-white font-semibold text-[13px] rounded-full px-5 py-2.5 transition-transform hover:scale-105"
      style={{
        background: "#F15A29",
        boxShadow: "0 6px 20px rgba(241,90,41,.35)",
      }}
    >
      📞 &nbsp;7778879189
    </a>
  );
}
