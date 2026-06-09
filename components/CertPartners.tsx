"use client";

import React, { useState } from "react";

const LOGOS = [
  { src: "/certpartners/icp-1.png", name: "AWS Academy"  },
  { src: "/certpartners/icp-2.png", name: "Cisco"        },
  { src: "/certpartners/icp-3.png", name: "Fortinet"     },
  { src: "/certpartners/icp-4.png", name: "Intel"        },
  { src: "/certpartners/icp-5.png", name: "Dell"         },
  { src: "/certpartners/icp-6.png", name: "SAS"          },
  { src: "/certpartners/icp-7.png", name: "Coursera"     },
  { src: "/certpartners/icp-8.png", name: "IBM"          },
];

/* triple for seamless loop */
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS];

export default function CertPartners() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#f3f4f6",
        padding: "72px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* subtle grid bg pattern */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: 0.5,
      }} />

      {/* heading */}
      <div style={{ textAlign: "center", marginBottom: 48, position: "relative" }}>
        <h2 style={{
          fontWeight: 800, letterSpacing: 2,
          textTransform: "uppercase",
          fontSize: "clamp(18px,2.2vw,28px)",
          color: "#1a2e5a",
        }}>
          INDUSTRY CERTIFICATION{" "}
          <span style={{ color: "#F15A29" }}>PARTNERS</span>
        </h2>
        <div style={{
          width: 64, height: 4, background: "#e03030",
          borderRadius: 9999, margin: "12px auto 0",
        }} />
        <p style={{
          fontSize: 14, color: "#6b7280",
          marginTop: 10, fontWeight: 400,
        }}>
          Industry-backed certifications that power your career from day one
        </p>
      </div>

      {/* ── marquee with glow effect ── */}
      <div style={{ overflow: "hidden", position: "relative" }}>

        {/* left fade mask */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: "linear-gradient(to right, #f3f4f6, transparent)",
          pointerEvents: "none",
        }} />
        {/* right fade mask */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: "linear-gradient(to left, #f3f4f6, transparent)",
          pointerEvents: "none",
        }} />

        <div
          className="marquee-track"
          style={{
            gap: 28,
            alignItems: "center",
            animationDuration: "30s",
            animationPlayState: hovered !== null ? "paused" : "running",
          }}
        >
          {TRACK.map((logo, i) => {
            const isHov = hovered === i % LOGOS.length;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i % LOGOS.length)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  flexShrink: 0,
                  width: 160,
                  height: 90,
                  borderRadius: 16,
                  background: isHov ? "#fff" : "#fff",
                  border: isHov
                    ? "2px solid #F15A29"
                    : "2px solid #e5e7eb",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "10px 16px",
                  cursor: "default",
                  transition: "all 0.25s ease",
                  transform: isHov ? "translateY(-8px) scale(1.06)" : "none",
                  boxShadow: isHov
                    ? "0 16px 40px rgba(241,90,41,.25), 0 0 0 1px rgba(241,90,41,.15)"
                    : "0 2px 8px rgba(0,0,0,.06)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{
                    maxWidth: 120,
                    maxHeight: 52,
                    objectFit: "contain",
                    display: "block",
                    filter: isHov ? "none" : "grayscale(30%) opacity(0.85)",
                    transition: "filter 0.25s ease",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* bottom badge row */}
      <div style={{
        display: "flex", justifyContent: "center",
        gap: 12, marginTop: 40, flexWrap: "wrap",
        position: "relative",
      }}>
        {LOGOS.map((l, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#fff", borderRadius: 50,
              padding: "6px 14px",
              border: "1px solid #e5e7eb",
              fontSize: 12, fontWeight: 600, color: "#374151",
              boxShadow: "0 1px 4px rgba(0,0,0,.06)",
            }}
          >
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#F15A29",
            }} />
            {l.name}
          </div>
        ))}
      </div>
    </section>
  );
}
