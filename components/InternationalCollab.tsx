"use client";

import React, { useState } from "react";

const PARTNERS = [
  { src: "/images/intl/nairobi.jpg", name: "The University of Nairobi",                       country: "KENYA"                },
  { src: "/images/intl/kca.png",    name: "KCA University",                                   country: "KENYA"                },
  { src: "/images/intl/tuzla.jpg",  name: "University of Tuzla",                              country: "BOSNIA & HERZEGOVINA" },
  { src: "/images/intl/upsa.jpg",   name: "UPSA, Spain",                                      country: "SPAIN"                },
  { src: "/images/intl/giti.jpg",   name: "GENEVA Information Technology Institute",          country: "SWITZERLAND"          },
  { src: "/images/intl/danish.jpg", name: "Danish Consortium for Academic Craftsmanship",     country: "DENMARK"              },
  { src: "/images/intl/iitu.jpg",   name: "International Information Technology University",  country: "KAZAKHSTAN"           },
  { src: "/images/intl/vuzf.jpg",   name: "VUZF University",                                  country: "BULGARIA"             },
  { src: "/images/intl/fpt.jpg",    name: "FPT University",                                   country: "VIETNAM"              },
];

const TRACK = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function InternationalCollab() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="intl" style={{ background: "#fff", padding: "72px 0", overflow: "hidden" }}>

      {/* heading ONLY — no extra content */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{
          display: "inline-block",
          background: "rgba(224,48,48,.08)", color: "#e03030",
          fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
          padding: "5px 14px", borderRadius: 50, marginBottom: 14,
        }}>150+ Global Partnerships</span>
        <h2 style={{
          fontWeight: 800, letterSpacing: 2, textTransform: "uppercase",
          fontSize: "clamp(18px,2.2vw,28px)", color: "#1a2e5a",
        }}>
          INTERNATIONAL{" "}
          <span style={{ color: "#F15A29" }}>COLLABORATION</span>
        </h2>
        <div style={{ width: 64, height: 4, background: "#e03030", borderRadius: 9999, margin: "12px auto 0" }} />
      </div>

      {/* marquee */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, zIndex: 3, background: "linear-gradient(to right,#fff,transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, zIndex: 3, background: "linear-gradient(to left,#fff,transparent)", pointerEvents: "none" }} />

        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track" style={{ gap: 24, alignItems: "stretch", animationDuration: "32s" }}>
            {TRACK.map((p, i) => {
              const isHov = hovered === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    flexShrink: 0, width: 210,
                    borderRadius: 16,
                    background: "#fff",
                    border: isHov ? "2px solid #e03030" : "1.5px solid #e5e7eb",
                    padding: "24px 16px 18px",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    transform: isHov ? "translateY(-6px)" : "none",
                    boxShadow: isHov
                      ? "0 16px 40px rgba(224,48,48,.12)"
                      : "0 2px 10px rgba(0,0,0,.06)",
                  }}
                >
                  {/* logo */}
                  <div style={{ width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.src} alt={p.name}
                      style={{
                        maxWidth: 90, maxHeight: 90,
                        objectFit: "contain", display: "block",
                        filter: isHov ? "none" : "grayscale(10%)",
                        transition: "filter 0.25s",
                      }}
                    />
                  </div>
                  {/* name + country */}
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#1a2e5a", lineHeight: 1.4 }}>
                      {p.name}
                    </div>
                    <div style={{
                      display: "inline-block", marginTop: 6,
                      background: isHov ? "rgba(224,48,48,.1)" : "#f0f4f8",
                      color: isHov ? "#e03030" : "#6b7280",
                      fontSize: 10, fontWeight: 700, letterSpacing: 0.5,
                      padding: "2px 10px", borderRadius: 50,
                      transition: "all 0.2s",
                    }}>
                      {p.country}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* bottom stats strip */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 64,
        marginTop: 48, flexWrap: "wrap",
      }}>
      </div>
    </section>
  );
}
