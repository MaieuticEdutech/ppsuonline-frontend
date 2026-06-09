"use client";

import React from "react";

const LOGOS = [
  { src: "/images/companies/r1.jpg",  alt: "Microsoft"    },
  { src: "/images/companies/r2.jpg",  alt: "Amazon"       },
  { src: "/images/companies/r3.jpg",  alt: "Dell"         },
  { src: "/images/companies/r4.jpg",  alt: "Accenture"    },
  { src: "/images/companies/r5.jpg",  alt: "Bosch"        },
  { src: "/images/companies/r6.jpg",  alt: "EY"           },
  { src: "/images/companies/r7.jpg",  alt: "KPMG"         },
  { src: "/images/companies/r8.jpg",  alt: "ZS"           },
  { src: "/images/companies/r9.jpg",  alt: "PwC"          },
  { src: "/images/companies/r10.jpg", alt: "JP Morgan"    },
  { src: "/images/companies/r11.jpg", alt: "Oracle"       },
  { src: "/images/companies/r12.jpg", alt: "Shell"        },
  { src: "/images/companies/r13.jpg", alt: "Aditya Birla" },
  { src: "/images/companies/r14.jpg", alt: "Siemens"      },
  { src: "/images/companies/r15.jpg", alt: "Cisco"        },
  { src: "/images/companies/r16.jpg", alt: "Amul"         },
];

// Exactly 2 copies — the CSS animates translateX(-50%) so it loops perfectly
const TRACK = [...LOGOS, ...LOGOS];

export default function PlacementCompanies() {
  return (
    <section style={{ background: "#fff", padding: "64px 0", borderBottom: "1px solid #f0f0f0", overflow: "hidden" }}>

      {/* heading */}
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <h2 style={{
          fontWeight: 800, letterSpacing: 2, textTransform: "uppercase",
          fontSize: "clamp(16px,2vw,22px)", color: "#1a2e5a",
        }}>
          TOP-TIER COMPANIES IN
        </h2>
        <h3 style={{
          fontWeight: 800, letterSpacing: 2, textTransform: "uppercase",
          fontSize: "clamp(18px,2.5vw,30px)", color: "#F15A29", marginTop: 4,
        }}>
          PPSU PLACEMENT NETWORK
        </h3>
        <div style={{ width: 64, height: 4, background: "#e03030", borderRadius: 9999, margin: "12px auto 0" }} />
      </div>

      {/* marquee — logos significantly larger */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, zIndex: 3, background: "linear-gradient(to right,#fff,transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, zIndex: 3, background: "linear-gradient(to left,#fff,transparent)", pointerEvents: "none" }} />

        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track marquee-fast" style={{ gap: 72, alignItems: "center" }}>
            {TRACK.map((logo, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: 200,
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: 200,
                    maxHeight: 96,
                    width: "100%",
                    objectFit: "contain",
                    display: "block",
                    filter: "grayscale(10%) opacity(0.88)",
                    transition: "filter 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLImageElement).style.filter = "none";
                    (e.target as HTMLImageElement).style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLImageElement).style.filter = "grayscale(10%) opacity(0.88)";
                    (e.target as HTMLImageElement).style.transform = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
