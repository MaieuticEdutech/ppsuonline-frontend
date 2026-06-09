"use client";

import React, { useState, useEffect, useRef } from "react";

const CARDS = [
  "/images/placements/placement-1.png",
  "/images/placements/placement-2.png",
  "/images/placements/placement-3.png",
  "/images/placements/placement-4.png",
  "/images/placements/placement-5.png",
  "/images/placements/placement-6.png",
  "/images/placements/placement-7.png",
  "/images/placements/placement-8.png",
];

const STATS = [
  { num: "10,000+", label: "Placement Offers"              },
  { num: "1,000+",  label: "Companies Recruited"           },
  { num: "78 LPA",  label: "Highest National Package"      },
  { num: "1 CR",    label: "Highest International Package" },
];

const PKG = [
  { lpa: "20", by: "30+"  },
  { lpa: "15", by: "50+"  },
  { lpa: "10", by: "100+" },
  { lpa: "7",  by: "300+" },
  { lpa: "5",  by: "500+" },
];

export default function Placement() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setCurrent(p => (p + 1) % CARDS.length), 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (i: number) => { setCurrent(i); resetTimer(); };

  // visible strip: current card centered, 2 adjacent on each side
  const strip = [-2, -1, 0, 1, 2].map(offset => ({
    idx: (current + offset + CARDS.length) % CARDS.length,
    offset,
  }));

  return (
    <section id="placement" style={{
      background: "linear-gradient(180deg,#0d1117 0%,#111827 100%)",
      padding: "0",
      overflow: "hidden",
      position: "relative",
    }}>
      <style>{`
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(241,90,41,0.5); }
          70%  { box-shadow: 0 0 0 14px rgba(241,90,41,0); }
          100% { box-shadow: 0 0 0 0 rgba(241,90,41,0); }
        }
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .stat-item { animation: fadeSlideUp 0.5s ease both; }
      `}</style>

      {/* ── TOP HALF: headline + stat bar ── */}
      <div style={{
        background: "linear-gradient(135deg,#0d1117 60%,#1a1a2e 100%)",
        padding: "72px 60px 0",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Big faded BG number */}
        <div style={{
          position: "absolute", right: -20, top: -30,
          fontSize: 260, fontWeight: 900,
          color: "rgba(241,90,41,0.04)",
          lineHeight: 1, pointerEvents: "none",
          userSelect: "none", fontFamily: "Poppins,sans-serif",
        }}>PPSU</div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Label */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: 20,
          }}>
            <div style={{ width: 32, height: 3, background: "#F15A29", borderRadius: 99 }}/>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#F15A29", letterSpacing: 3, textTransform: "uppercase" }}>
              Placements
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: "clamp(32px,4vw,58px)", fontWeight: 900,
            color: "#fff", lineHeight: 1.1, margin: "0 0 52px",
            maxWidth: 700,
          }}>
            PPSU <em style={{ color: "#F15A29", fontStyle: "italic" }}>Exceptional</em><br />
            Placement Achievements
          </h2>

          {/* ── 4-stat strip ── */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4,1fr)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                className="stat-item"
                style={{
                  animationDelay: `${i * 80}ms`,
                  padding: "28px 0 28px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  paddingLeft: i === 0 ? 0 : 32,
                  paddingRight: 24,
                }}
              >
                <div style={{
                  fontSize: "clamp(28px,3vw,44px)", fontWeight: 900,
                  color: i === 0 ? "#F15A29" : "#fff",
                  lineHeight: 1, letterSpacing: -1,
                  fontFamily: "Poppins, sans-serif",
                }}>{s.num}</div>
                <div style={{
                  fontSize: 12, color: "rgba(255,255,255,0.4)",
                  marginTop: 8, lineHeight: 1.4, fontWeight: 500,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM HALF: cinematic card carousel ── */}
      <div style={{
        background: "#08080a",
        padding: "64px 0 0",
        position: "relative",
      }}>

        {/* Ambient glow behind active card */}
        <div style={{
          position: "absolute",
          top: "30%", left: "50%", transform: "translateX(-50%)",
          width: 500, height: 400,
          background: "radial-gradient(ellipse, rgba(241,90,41,0.18) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
          transition: "opacity 0.6s",
        }}/>

        {/* Fan/carousel strip */}
        <div style={{
          position: "relative",
          height: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}>
          {strip.map(({ idx, offset }) => {
            const isCenter = offset === 0;
            const abs = Math.abs(offset);
            const scale = isCenter ? 1 : 1 - abs * 0.12;
            const translateX = offset * 210;
            const opacity = isCenter ? 1 : 1 - abs * 0.28;
            const blur = isCenter ? 0 : abs * 2;
            const zIndex = 10 - abs;

            return (
              <button
                key={`${idx}-${offset}`}
                onClick={() => go(idx)}
                style={{
                  position: "absolute",
                  width: isCenter ? 260 : 210,
                  height: isCenter ? 400 : 320,
                  borderRadius: isCenter ? 20 : 16,
                  overflow: "hidden",
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  filter: blur > 0 ? `blur(${blur}px)` : "none",
                  zIndex,
                  cursor: isCenter ? "default" : "pointer",
                  border: "none", padding: 0, background: "#1a1a2e",
                  transition: "all 0.5s cubic-bezier(.4,0,.2,1)",
                  boxShadow: isCenter
                    ? "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1.5px rgba(241,90,41,0.5)"
                    : "0 16px 40px rgba(0,0,0,0.5)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CARDS[idx]}
                  alt={`Placement ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center center",
                    display: "block",
                  }}
                />
                {/* center card — orange bottom glow bar */}
                {isCenter && (
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 4,
                    background: "linear-gradient(90deg,#F15A29,#e03030)",
                    animation: "pulseRing 2s ease infinite",
                  }}/>
                )}
              </button>
            );
          })}
        </div>

        {/* Package row */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          margin: "40px auto 0",
          maxWidth: 700,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          overflow: "hidden",
        }}>
          {PKG.map((p, i) => (
            <div key={i} style={{
              flex: 1, padding: "18px 0", textAlign: "center",
              borderRight: i < 4 ? "1px solid rgba(255,255,255,0.08)" : "none",
              background: i === 0 ? "rgba(241,90,41,0.12)" : "transparent",
              transition: "background 0.2s",
            }}>
              <div style={{
                fontSize: 18, fontWeight: 900,
                color: i === 0 ? "#F15A29" : "#fff",
                lineHeight: 1,
              }}>{p.lpa}<span style={{ fontSize: 10, marginLeft: 2, opacity: 0.6 }}>LPA</span></div>
              <div style={{
                fontSize: 10, color: "rgba(255,255,255,0.3)",
                marginTop: 6, lineHeight: 1.5,
              }}>by {p.by}<br/>cos.</div>
            </div>
          ))}
        </div>

        {/* Dot nav */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 8, padding: "32px 0 56px",
        }}>
          {CARDS.map((_, i) => (
            <button key={i} onClick={() => go(i)} style={{
              width: i === current ? 28 : 8, height: 8, borderRadius: 99,
              background: i === current ? "#F15A29" : "rgba(255,255,255,0.2)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "width 0.3s, background 0.3s",
            }}/>
          ))}
        </div>
      </div>

    </section>
  );
}
