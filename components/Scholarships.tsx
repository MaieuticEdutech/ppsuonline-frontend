"use client";
import { useApplyModal } from "@/components/ApplyModal";

import React, { useState } from "react";

const GOV = [
  "Vidya Lakshmi Education Scholarship (VLES)",
  "Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
  "Central Sector Scheme of Scholarship (CSSS)",
  "Chief Ministers Scholarship (CMSS)",
  "Post Metric Scholarship (PMS)",
  "Pragati Scholarship (PS)",
  "Food Bill Assistance (FBA)",
  "Bihar Post Matric Scholarship",
  "Digital Gujarat Scholarships",
];

const PPSU_S = [
  "Merit Based Scholarship",
  "Financial Need-Based Scholarship",
  "Partner School Scholarship",
  "Presidential Scholarship",
  "Single Parent Scholarship",
  "Defence Scholarship",
  "Sports Quota Scholarship",
  "PPSU Employees Scholarship",
  "Earlybird Scholarship",
];

export default function Scholarships() {
  const { open: openModal } = useApplyModal();
  const [tab, setTab] = useState<"gov" | "ppsu">("gov");
  const items = tab === "gov" ? GOV : PPSU_S;

  return (
    <section id="scholarships" style={{
      background: "linear-gradient(160deg, #f0f4ff 0%, #fdf1ee 100%)",
      padding: "90px 0", overflow: "hidden", position: "relative",
    }}>
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: -120, left: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,90,41,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,46,90,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(224,48,48,0.08)", color: "#e03030",
            fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
            padding: "5px 16px", borderRadius: 50, marginBottom: 18,
          }}>Financial Support</span>
          <h2 style={{
            fontSize: "clamp(24px,3vw,44px)", fontWeight: 900,
            color: "#1a2e5a", letterSpacing: 2, textTransform: "uppercase", margin: 0,
          }}>
            UPTO 100% &#8212;{" "}
            <span style={{ color: "#F15A29" }}>SCHOLARSHIPS</span>
          </h2>
          <div style={{ width: 70, height: 4, background: "#e03030", borderRadius: 99, margin: "16px auto 0" }} />
        </div>

        {/* Main layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "stretch" }}>

          {/* LEFT — big hero stat card */}
          <div style={{
            background: "linear-gradient(145deg, #1a2e5a 0%, #0d1f3c 100%)",
            borderRadius: 28, overflow: "hidden", position: "relative",
            display: "flex", flexDirection: "column",
            boxShadow: "0 32px 80px rgba(13,31,60,0.3)",
          }}>
            {/* Top image area */}
            <div style={{ position: "relative", flex: 1, minHeight: 280 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/scholarships/scholarship.png"
                alt="PPSU Scholarship"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, rgba(13,31,60,0.2) 0%, rgba(13,31,60,0.85) 100%)",
              }} />
              {/* 100% badge */}
              <div style={{
                position: "absolute", bottom: 28, left: 32,
              }}>
                <div style={{ fontSize: "clamp(56px,6vw,80px)", fontWeight: 900, color: "#F15A29", lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>Scholarship Available</div>
              </div>
            </div>

            {/* Mini stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { n: "9+",   l: "Govt Schemes"   },
                { n: "9+",   l: "PPSU Schemes"   },
                { n: "100%", l: "Max Coverage"   },
                { n: "All",  l: "UG & PG Levels" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "18px 10px", textAlign: "center",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}>
                  <div style={{ fontWeight: 900, fontSize: 22, color: "#F15A29", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 4, letterSpacing: 0.5 }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Apply Now */}
            <button
              onClick={() => openModal()}
              style={{
                background: "linear-gradient(135deg,#e03030,#b71c1c)",
                color: "#fff", border: "none", padding: "16px 0",
                fontFamily: "Poppins,sans-serif",
                fontWeight: 700, fontSize: 14, cursor: "pointer",
                letterSpacing: 0.5,
              }}
            >Apply Now →</button>

          </div>

          {/* RIGHT — tabbed scholarship list */}
          <div style={{
            background: "#fff", borderRadius: 28,
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)",
            display: "flex", flexDirection: "column", overflow: "hidden",
          }}>
            {/* Tab switcher */}
            <div style={{ display: "flex", borderBottom: "1px solid #f0f0f0" }}>
              {([
                { key: "gov",  label: "Government Schemes", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
                { key: "ppsu", label: "PPSU Scholarships",  icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
              ] as const).map(t => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  style={{
                    flex: 1, padding: "18px 16px",
                    background: tab === t.key ? "#fff" : "#f8fafc",
                    border: "none", cursor: "pointer",
                    borderBottom: tab === t.key ? "3px solid #e03030" : "3px solid transparent",
                    fontFamily: "Poppins,sans-serif",
                    fontWeight: tab === t.key ? 700 : 500,
                    fontSize: 13,
                    color: tab === t.key ? "#1a2e5a" : "#9ca3af",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    transition: "all 0.2s",
                  }}
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={t.icon} />
                  </svg>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Scholarship list */}
            <div style={{ flex: 1, padding: "8px 24px 24px", overflowY: "auto" }}>
              {items.map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "13px 0",
                  borderBottom: i < items.length - 1 ? "1px solid #f5f5f5" : "none",
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                    background: i % 2 === 0 ? "rgba(224,48,48,0.08)" : "rgba(26,46,90,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke={i % 2 === 0 ? "#e03030" : "#1a2e5a"} strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 13.5, color: "#374151", fontWeight: 500, lineHeight: 1.4 }}>
                    {item}
                  </span>
                  <div style={{
                    marginLeft: "auto", flexShrink: 0,
                    fontSize: 9, fontWeight: 700, color: "#e03030",
                    background: "rgba(224,48,48,0.08)",
                    padding: "3px 8px", borderRadius: 50, letterSpacing: 0.5, textTransform: "uppercase",
                  }}>
                    {tab === "gov" ? "Govt" : "PPSU"}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
