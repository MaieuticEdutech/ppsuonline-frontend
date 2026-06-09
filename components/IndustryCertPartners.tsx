"use client";

import React, { useState } from "react";

const LOGOS = [
  { src: "/images/icp/icp-1.png", name: "AWS Academy" },
  { src: "/images/icp/icp-2.png", name: "Cisco"       },
  { src: "/images/icp/icp-3.png", name: "Fortinet"    },
  { src: "/images/icp/icp-4.png", name: "Intel"       },
  { src: "/images/icp/icp-5.png", name: "Dell"        },
  { src: "/images/icp/icp-6.png", name: "SAS"         },
  { src: "/images/icp/icp-7.png", name: "Coursera"    },
  { src: "/images/icp/icp-8.png", name: "IBM"         },
];

const TRACK = [...LOGOS, ...LOGOS, ...LOGOS];

export default function IndustryCertPartners() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{
      background: "#f5f5f0", padding: "72px 0",
      position: "relative", overflow: "hidden",
    }}>
      {/* dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "28px 28px", opacity: 0.4,
      }} />

      {/* heading */}
      <div style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 2 }}>
        <span style={{
          display: "inline-block",
          background: "rgba(224,48,48,.08)", color: "#e03030",
          fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
          padding: "5px 14px", borderRadius: 50, marginBottom: 14,
        }}></span>
        <h2 style={{
          fontWeight: 800, letterSpacing: 2, textTransform: "uppercase",
          fontSize: "clamp(18px,2.2vw,28px)", color: "#1a2e5a",
        }}>
          INDUSTRY CERTIFICATION{" "}
          <span style={{ color: "#F15A29" }}>PARTNERS</span>
        </h2>
        <div style={{ width: 64, height: 4, background: "#e03030", borderRadius: 9999, margin: "12px auto 0" }} />
        <p style={{ fontSize: 14, color: "#6b7280", marginTop: 10 }}>
        </p>
      </div>

      {/* marquee */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* edge fades */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, zIndex: 3, background: "linear-gradient(to right, #f5f5f0, transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, zIndex: 3, background: "linear-gradient(to left, #f5f5f0, transparent)", pointerEvents: "none" }} />

        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track" style={{ gap: 32, alignItems: "center", animationDuration: "28s" }}>
            {TRACK.map((logo, i) => {
              const isHov = hovered === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    flexShrink: 0,
                    width: 190,
                    height: 100,
                    /* NO background, NO card — just logo on transparent */
                    background: isHov ? "rgba(255,255,255,0.85)" : "transparent",
                    border: "none",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px 12px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    transform: isHov ? "translateY(-5px) scale(1.06)" : "none",
                    boxShadow: isHov ? "0 12px 32px rgba(0,0,0,.12)" : "none",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{
                      maxWidth: 150,   /* bigger logos */
                      maxHeight: 70,
                      width: "100%",
                      objectFit: "contain",
                      display: "block",
                      filter: isHov ? "none" : "grayscale(10%) opacity(0.82)",
                      transition: "filter 0.25s",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
