"use client";

import React, { useState } from "react";

/*
  Images placed in public/images/campus/
  l1 (tall portrait) → campus-1.jpg   — Band / March
  l2 (tall portrait) → campus-6.jpg   — Dance performer
  s1 (landscape sm)  → campus-5.jpg   — Group cultural
  s2 (landscape sm)  → campus-2.jpg   — Parade / march
  s3 (landscape sm)  → campus-3.jpg   — Aerobics / sports
  s4 (landscape sm)  → campus-4.jpg   — Sports aerobics
  campus-7.jpg        — Wide panorama (Garba / cultural)
*/

const MOSAIC = [
  /* left tall portrait */
  { src: "/images/campus/campus-1.jpg", label: "Cultural Parade",   cat: "Culture",  style: { gridColumn: "1/2", gridRow: "1/3" } },
  /* top-middle landscape */
  { src: "/images/campus/campus-2.jpg", label: "Annual March",      cat: "Events",   style: { gridColumn: "2/3", gridRow: "1/2" } },
  /* top-right landscape */
  { src: "/images/campus/campus-3.jpg", label: "Sports & Fitness",  cat: "Sports",   style: { gridColumn: "3/4", gridRow: "1/2" } },
  /* mid-right landscape */
  { src: "/images/campus/campus-4.jpg", label: "Aerobics Day",      cat: "Sports",   style: { gridColumn: "2/3", gridRow: "2/3" } },
  /* right tall portrait */
  { src: "/images/campus/campus-6.jpg", label: "Dance & Arts",      cat: "Arts",     style: { gridColumn: "4/5", gridRow: "1/3" } },
  /* bottom-right landscape */
  { src: "/images/campus/campus-5.jpg", label: "Campus Celebrations",cat: "Culture", style: { gridColumn: "3/4", gridRow: "2/3" } },
];

const TAGS = ["All", "Culture", "Sports", "Arts", "Events"];

export default function CampusGallery() {
  const [activeTag, setActiveTag] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" style={{ background: "#fff", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "0 40px" }}>

        {/* ── Header row ── */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 36,
          flexWrap: "wrap",
          gap: 20,
        }}>
          <div>
            <span style={{
              display: "inline-block",
              background: "rgba(224,48,48,.08)", color: "#e03030",
              fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
              padding: "5px 14px", borderRadius: 50, marginBottom: 14,
            }}>
              Campus Experience
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <h2 style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 300, lineHeight: 0.95, margin: 0, color: "#1a2e5a", fontStyle: "italic" }}>
                Life At{" "}
              </h2>
              <span style={{ fontSize: "clamp(40px,5.5vw,76px)", fontWeight: 900, lineHeight: 0.95, color: "#e03030" }}>
                PPSU
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 14 }}>
            <p style={{ fontSize: 14, color: "#6b7280", maxWidth: 320, lineHeight: 1.7, textAlign: "right", margin: 0 }}>
              Vibrant campus life — from cultural fests and sports to labs, events and unforgettable memories.
            </p>
            {/* filter pills */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
              {TAGS.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  style={{
                    padding: "6px 16px", borderRadius: 50, border: "none",
                    cursor: "pointer", fontSize: 12, fontWeight: 600,
                    fontFamily: "Poppins,sans-serif",
                    background: activeTag === tag ? "#e03030" : "#f0f4f8",
                    color: activeTag === tag ? "#fff" : "#6b7280",
                    transition: "all .2s",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main 4-column mosaic grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr 1.4fr 1fr",
          gridTemplateRows: "280px 280px",
          gap: 10,
        }}>
          {MOSAIC.map((item, i) => {
            const visible = activeTag === "All" || item.cat === activeTag;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  ...item.style,
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform .25s, opacity .3s, box-shadow .25s",
                  transform: hovered === i ? "scale(0.985)" : "scale(1)",
                  opacity: visible ? 1 : 0.28,
                  boxShadow: hovered === i
                    ? "0 16px 48px rgba(0,0,0,.22)"
                    : "0 4px 14px rgba(0,0,0,.08)",
                  background: "#1a2e5a",
                }}
              >
                {/* photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", display: "block",
                    transition: "transform .4s",
                    transform: hovered === i ? "scale(1.04)" : "scale(1)",
                  }}
                />

                {/* gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: hovered === i
                    ? "linear-gradient(to top, rgba(0,0,0,.70) 0%, rgba(0,0,0,.10) 60%)"
                    : "linear-gradient(to top, rgba(0,0,0,.52) 0%, rgba(0,0,0,.05) 55%)",
                  transition: "background .3s",
                }} />

                {/* category badge */}
                <div style={{
                  position: "absolute", top: 14, left: 14,
                  background: "rgba(255,255,255,.18)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,.3)",
                  color: "#fff", fontSize: 10, fontWeight: 700,
                  letterSpacing: 1, textTransform: "uppercase",
                  padding: "4px 10px", borderRadius: 50,
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? "translateY(0)" : "translateY(-6px)",
                  transition: "opacity .25s, transform .25s",
                }}>
                  {item.cat}
                </div>

                {/* label */}
                <div style={{ position: "absolute", bottom: 18, left: 18, right: 18 }}>
                  <div style={{
                    fontSize: hovered === i ? 16 : 14,
                    fontWeight: 800, color: "#fff",
                    lineHeight: 1.3,
                    transition: "font-size .2s",
                    textShadow: "0 2px 8px rgba(0,0,0,.4)",
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 6, marginTop: 6,
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? "translateY(0)" : "translateY(6px)",
                    transition: "opacity .25s, transform .25s",
                  }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: "#e03030", display: "flex",
                      alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="10" height="10" fill="white" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <span style={{ color: "rgba(255,255,255,.85)", fontSize: 11, fontWeight: 600 }}>
                      View More
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom panoramic strip — wide cultural image ── */}
        <div style={{
          marginTop: 10,
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
          height: 220,
          background: "#1a2e5a",
          cursor: "pointer",
        }}
          onMouseEnter={e => {
            (e.currentTarget.querySelector(".pano-img") as HTMLImageElement).style.transform = "scale(1.03)";
          }}
          onMouseLeave={e => {
            (e.currentTarget.querySelector(".pano-img") as HTMLImageElement).style.transform = "scale(1)";
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="pano-img"
            src="/images/campus/campus-7.jpg"
            alt="Garba Cultural Festival"
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              objectPosition: "center 35%",
              display: "block",
              transition: "transform .4s",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,.55) 0%, rgba(0,0,0,.18) 50%, rgba(0,0,0,.0) 80%)",
          }} />
          <div style={{ position: "absolute", left: 40, top: "50%", transform: "translateY(-50%)" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.7)", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>
              Featured Event
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,.4)" }}>
              Garba & Cultural<br />Celebrations
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
              <span style={{
                background: "#e03030", color: "#fff", fontSize: 11,
                fontWeight: 700, padding: "5px 14px", borderRadius: 50,
              }}>PPSU Fest</span>
              <span style={{
                background: "rgba(255,255,255,.15)", backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,.3)",
                color: "#fff", fontSize: 11,
                fontWeight: 600, padding: "5px 14px", borderRadius: 50,
              }}>Cultural Heritage</span>
            </div>
          </div>
          {/* right stat pill */}
          <div style={{
            position: "absolute", right: 40, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,.12)", backdropFilter: "blur(12px)",
            border: "1.5px solid rgba(255,255,255,.25)",
            borderRadius: 16, padding: "18px 28px", textAlign: "center",
          }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#F15A29", lineHeight: 1 }}>360°</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginTop: 4, lineHeight: 1.4 }}>Campus<br/>Experience</div>
            <button
              onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                marginTop: 10, background: "#e03030", color: "#fff",
                border: "none", borderRadius: 8, padding: "7px 18px",
                fontFamily: "Poppins,sans-serif", fontWeight: 700,
                fontSize: 11, cursor: "pointer",
              }}
            >
              Apply Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
