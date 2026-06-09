"use client";

import React from "react";

const ACCREDITATIONS = [
  { name: "University Grants Commission",               short: "UGC",   color: "#1a2e5a" },
  { name: "All India Council for Technical Education",  short: "AICTE", color: "#e03030" },
  { name: "National Assessment & Accreditation Council",short: "NAAC",  color: "#F15A29" },
  { name: "Council of Architecture",                    short: "CA",    color: "#1a2e5a" },
  { name: "Indian Nursing Council",                     short: "INC",   color: "#e03030" },
  { name: "Gujarat Nursing Council",                    short: "GNC",   color: "#F15A29" },
  { name: "Pharmacy Council of India",                  short: "PCI",   color: "#1a2e5a" },
  { name: "National Commission for Homoeopathy",        short: "NCH",   color: "#e03030" },
  { name: "Gujarat State Council for Physiotherapy",    short: "GSCP",  color: "#F15A29" },
];

const TRACK = [...ACCREDITATIONS, ...ACCREDITATIONS];

export default function WhyPPSU() {
  return (
    <section style={{ background: "#0d1f3c", padding: "80px 0 0", overflow: "hidden", position: "relative" }}>
      <style>{`
        @keyframes marqueeAcc {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .acc-track {
          display: flex;
          width: max-content;
          animation: marqueeAcc 28s linear infinite;
          gap: 32px;
          align-items: center;
        }
        .acc-track:hover { animation-play-state: paused; }
      `}</style>

      {/* Large faded BG text */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "clamp(80px,14vw,180px)",
        fontWeight: 900, color: "rgba(255,255,255,0.03)",
        letterSpacing: 10, whiteSpace: "nowrap", pointerEvents: "none",
        userSelect: "none", zIndex: 0,
      }}>ACCREDITED</div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 40px 0" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(241,90,41,0.15)",
            border: "1px solid rgba(241,90,41,0.3)",
            color: "#F15A29", fontSize: 11, fontWeight: 700,
            letterSpacing: 2, textTransform: "uppercase",
            padding: "5px 16px", borderRadius: 50, marginBottom: 18,
          }}>Recognised By</span>
          <h2 style={{
            fontSize: "clamp(24px,3vw,42px)", fontWeight: 900,
            color: "#fff", letterSpacing: 3, textTransform: "uppercase", margin: 0,
          }}>
            ACCREDITATIONS &amp;{" "}
            <span style={{ color: "#F15A29" }}>AFFILIATIONS</span>
          </h2>
          <div style={{ width: 70, height: 4, background: "#e03030", borderRadius: 99, margin: "16px auto 0" }} />
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginTop: 14 }}>
            Recognised by leading national and international governing bodies
          </p>
        </div>
      </div>

      {/* Full-width marquee — no max-width constraint */}
      <div style={{ overflow: "hidden", paddingBottom: 80 }}>
        {/* Fade edges */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
            background: "linear-gradient(to right, #0d1f3c, transparent)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
            background: "linear-gradient(to left, #0d1f3c, transparent)", pointerEvents: "none",
          }} />
          <div className="acc-track">
            {TRACK.map((a, i) => (
              <div key={i} style={{
                flexShrink: 0,
                display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
                width: 160,
              }}>
                {/* Circle logo */}
                <div style={{
                  width: 100, height: 100, borderRadius: "50%",
                  border: `2.5px solid ${a.color}44`,
                  background: `${a.color}18`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.2s",
                  cursor: "default",
                  boxShadow: `0 0 24px ${a.color}22`,
                }}>
                  <span style={{
                    fontSize: 13, fontWeight: 800, color: a.color,
                    letterSpacing: 1, textAlign: "center",
                  }}>{a.short}</span>
                </div>
                <p style={{
                  fontSize: 11.5, color: "rgba(255,255,255,0.6)",
                  textAlign: "center", lineHeight: 1.5, fontWeight: 500,
                }}>{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{ height: 5, background: "linear-gradient(90deg, #1a2e5a, #e03030, #F15A29, #e03030, #1a2e5a)" }} />
    </section>
  );
}
