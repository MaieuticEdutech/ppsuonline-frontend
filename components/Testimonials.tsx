"use client";
import { useApplyModal } from "@/components/ApplyModal";

import React, { useState } from "react";

/*
  DROP YOUR VIDEOS INTO: public/images/testimonials/
  Name them: t1.mp4, t2.mp4, t3.mp4, t4.mp4, t5.mp4
  Or use YouTube embed IDs below.
*/

const TESTIMONIALS = [
  { id: "8NSjxOR8yQM", name: "Student Testimonial", school: "School of Engineering"            },
  { id: "jNFBZRYmt0E", name: "Student Testimonial", school: "School of Nursing"                },
  { id: "Md0vpSEHkCg", name: "Student Testimonial", school: "School of Pharmacy"               },
  { id: "FVbbvgMbFC0", name: "Student Testimonial", school: "School of Management"             },
  { id: "63d3ySM28OM", name: "Student Testimonial", school: "School of Physiotherapy"          },
];

export default function Testimonials() {
  const { open: openModal } = useApplyModal();
  const [active, setActive] = useState(0);

  return (
    <>
    {/* ══ STUDENT TESTIMONIALS ══ */}
    <section id="testimonials" style={{ background: "#fff", padding: "80px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 40px" }}>

        {/* heading */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(224,48,48,.08)", color: "#e03030",
            fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
            padding: "5px 14px", borderRadius: 50, marginBottom: 14,
          }}>Student Stories</span>
          <h2 style={{
            fontWeight: 800, letterSpacing: 2, textTransform: "uppercase",
            fontSize: "clamp(18px,2.2vw,28px)", color: "#1a2e5a",
          }}>
            STUDENT <span style={{ color: "#F15A29" }}>TESTIMONIALS</span>
          </h2>
          <div style={{ width: 64, height: 4, background: "#e03030", borderRadius: 9999, margin: "12px auto 0" }} />
        </div>

        {/* layout: featured large + side list */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }}>

          {/* LEFT: featured video */}
          <div>
            <div style={{
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,.12)",
              border: "2px solid #f0f4f8",
              aspectRatio: "16/9",
              background: "#0f172a",
            }}>
              <iframe
                src={`https://www.youtube.com/embed/${TESTIMONIALS[active].id}?autoplay=0&rel=0`}
                title={TESTIMONIALS[active].name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", display: "block", border: "none" }}
              />
            </div>
            <div style={{ marginTop: 16, padding: "0 4px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#1a2e5a" }}>
                {TESTIMONIALS[active].name}
              </div>
              <div style={{ fontSize: 13, color: "#e03030", marginTop: 4, fontWeight: 600 }}>
                {TESTIMONIALS[active].school}
              </div>
            </div>
          </div>

          {/* RIGHT: stacked thumbnails */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 14px", border: "none", borderRadius: 12,
                  cursor: "pointer", textAlign: "left",
                  background: i === active
                    ? "linear-gradient(135deg,#1a2e5a,#2a4a8a)"
                    : "#f8fafc",
                  border: i === active ? "none" : "1.5px solid #e5e7eb",
                  transition: "all .2s",
                  boxShadow: i === active ? "0 8px 24px rgba(26,46,90,.2)" : "none",
                } as React.CSSProperties}
              >
                {/* thumbnail from YouTube */}
                <div style={{
                  width: 72, height: 48, borderRadius: 8, overflow: "hidden",
                  flexShrink: 0, background: "#0f172a", position: "relative",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${t.id}/mqdefault.jpg`}
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  {/* play icon */}
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(0,0,0,.3)",
                  }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: "rgba(255,255,255,.9)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <div style={{
                        width: 0, height: 0,
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "8px solid #e03030",
                        marginLeft: 2,
                      }} />
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: 13, fontWeight: 600,
                    color: i === active ? "#fff" : "#1a2e5a",
                  }}>{t.name}</div>
                  <div style={{
                    fontSize: 11, marginTop: 2, fontWeight: 500,
                    color: i === active ? "rgba(255,255,255,.7)" : "#e03030",
                  }}>{t.school}</div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>

    {/* ══ CTA SECTION ══ */}
    <section style={{ background: "#f0f4ff", padding: "56px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #0d1f3c 100%)",
          borderRadius: 24,
          padding: "52px 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
          flexWrap: "wrap",
          boxShadow: "0 20px 60px rgba(13,31,60,0.35)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative orange glow */}
          <div style={{
            position: "absolute", right: -60, top: -60,
            width: 300, height: 300, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(241,90,41,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}/>
          <div style={{
            position: "absolute", left: "40%", bottom: -40,
            width: 200, height: 200, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(241,90,41,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}/>

          {/* Left — text */}
          <div style={{ flex: "1 1 340px", position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 16,
            }}>
              <div style={{ width: 32, height: 3, background: "#F15A29", borderRadius: 99 }}/>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#F15A29", letterSpacing: 2, textTransform: "uppercase" }}>
                PPSU Online
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(26px,3vw,44px)", fontWeight: 800,
              color: "#fff", lineHeight: 1.2, margin: "0 0 14px",
            }}>
              Start Your Learning<br />Journey Today!
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
              Join thousands of learners building their future with PPSU Online.
            </p>
          </div>

          {/* Right — buttons */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 14,
            flex: "0 0 280px", position: "relative", zIndex: 1,
          }}>
            <a
              href="https://www.ppsu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(241,90,41,0.15)",
                border: "2px solid rgba(241,90,41,0.5)",
                color: "#F15A29", borderRadius: 50,
                padding: "14px 28px",
                fontFamily: "Poppins,sans-serif", fontWeight: 700, fontSize: 14,
                textDecoration: "none", letterSpacing: 0.3,
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(241,90,41,0.25)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(241,90,41,0.15)"; (e.currentTarget as HTMLAnchorElement).style.transform = "none"; }}
            >
           Get to know
            </a>
            <button
              onClick={() => openModal()}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "linear-gradient(135deg,#F15A29,#e03030)",
                border: "none",
                color: "#fff", borderRadius: 50,
                padding: "14px 28px",
                fontFamily: "Poppins,sans-serif", fontWeight: 700, fontSize: 14,
                cursor: "pointer", letterSpacing: 0.3,
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 6px 20px rgba(241,90,41,0.4)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 10px 28px rgba(241,90,41,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "none"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(241,90,41,0.4)"; }}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
