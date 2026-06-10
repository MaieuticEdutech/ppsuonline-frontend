"use client";

import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { num: 40,  suffix: "+",  label: "Years of Excellence",          icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
  { num: 100, suffix: "%",  label: "Upto Scholarship",             icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { num: 100, suffix: "+",  label: "Acre Campus",                  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { num: 50,  suffix: "+",  label: "National Awards & Ranking",    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { num: 150, suffix: "+",  label: "International Collaborations", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { num: 2,   suffix: "K+", label: "Recruiting Companies",         icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { num: 1,   suffix: "K+", label: "International Students",       icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
  { num: 30,  suffix: "+",  label: "Countries Students",           icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
];

export default function StatsBar() {
  const ref   = useRef<HTMLDivElement>(null);
  const done  = useRef(false);
  const [counts,  setCounts]  = useState(STATS.map(() => 0));
  const [hovered, setHovered] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      setVisible(true);
      STATS.forEach((s, i) => {
        let cur = 0;
        const step = Math.ceil(s.num / 50);
        const t = setInterval(() => {
          cur = Math.min(cur + step, s.num);
          setCounts(p => p.map((v, j) => j === i ? cur : v));
          if (cur >= s.num) clearInterval(t);
        }, 25);
      });
    }, { threshold: 0.2 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section
      id="whyppsu"
      ref={ref}
      style={{ background: "#f8fafc", padding: "80px 0", borderTop: "1px solid #eef0f4" }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-card {
          animation: fadeUp 0.5s ease both;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(224,48,48,0.08)", color: "#e03030",
            fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
            padding: "5px 16px", borderRadius: 50, marginBottom: 16,
          }}></span>
          <h2 style={{
            fontSize: "clamp(24px,2.8vw,36px)",
            fontWeight: 900, color: "#1a2e5a",
            letterSpacing: 2, textTransform: "uppercase", margin: 0,
          }}>
            WHY CHOOSE{" "}
            <span style={{ color: "#F15A29" }}>PPSU</span>
          </h2>
          <div style={{ width: 60, height: 4, background: "#e03030", borderRadius: 99, margin: "14px auto 0" }} />
        </div>

        {/* Stats grid — 4 columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}>
          {STATS.map((s, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={i}
                className="stat-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
                style={{
                  animationDelay: `${i * 60}ms`,
                  background: isHovered
                    ? "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)"
                    : "#fff",
                  borderRadius: 16,
                  padding: "28px 20px 24px",
                  textAlign: "center",
                  border: isHovered ? "1.5px solid transparent" : "1.5px solid #eef0f4",
                  boxShadow: isHovered
                    ? "0 16px 40px rgba(192,57,43,0.28)"
                    : "0 2px 12px rgba(0,0,0,0.05)",
                  transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* subtle bg pattern on hover */}
                {isHovered && (
                  <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12) 0%, transparent 60%)",
                  }} />
                )}

                {/* Icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                  background: isHovered ? "rgba(255,255,255,0.18)" : "rgba(192,57,43,0.08)",
                  transition: "background 0.25s",
                }}>
                  <svg width="26" height="26" fill="none"
                    stroke={isHovered ? "#fff" : "#c0392b"}
                    strokeWidth="1.7" viewBox="0 0 24 24"
                    style={{ transition: "stroke 0.25s" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>

                {/* Number */}
                <div style={{
                  fontSize: "clamp(28px,2.4vw,38px)",
                  fontWeight: 900,
                  color: isHovered ? "#fff" : "#1a2e5a",
                  lineHeight: 1,
                  fontFamily: "Poppins, sans-serif",
                  transition: "color 0.25s",
                }}>
                  {visible ? counts[i] : 0}{s.suffix}
                </div>

                {/* Divider */}
                <div style={{
                  width: 32, height: 3, borderRadius: 99,
                  background: isHovered ? "rgba(255,255,255,0.5)" : "#e03030",
                  margin: "10px auto",
                  transition: "background 0.25s",
                }} />

                {/* Label */}
                <div style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: isHovered ? "rgba(255,255,255,0.9)" : "#6b7280",
                  letterSpacing: 0.3,
                  lineHeight: 1.4,
                  transition: "color 0.25s",
                }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
