"use client";

import React, { useState } from "react";
import { useApplyModal } from "@/components/ApplyModal";

const SCHOOLS = [
  {
    abbr: "ENG", name: "School of Engineering",
    color: "#2563eb", bg: "linear-gradient(135deg,#1e3a8a,#2563eb)", count: 11,
    courses: [
      "B.Tech. Civil Engineering","B.Tech. Mechanical Engineering",
      "B.Tech. Chemical Engineering","B.Tech. Computer Engineering",
      "B.Tech. Information Technology","B.Tech. CS Engineering – ML & AI",
      "B.Tech. Computer Science & Engineering","B.Tech. IT & Engineering",
      "B.Tech. CS Engineering – Cyber Security",
      "B.Tech. CS Engineering (Data Science)",
      "B.Tech. Electronics & Communication",
    ],
  },
  {
    abbr: "CS", name: "Computer Science & Application",
    color: "#7c3aed", bg: "linear-gradient(135deg,#4c1d95,#7c3aed)", count: 4,
    courses: [
      "B.Sc. Information Technology","Bachelor of Computer Application (BCA)",
      "M.Sc. Computer Science","Master of Computer Application (MCA)",
    ],
  },
  {
    abbr: "DIP", name: "Institute of Diploma Studies",
    color: "#0891b2", bg: "linear-gradient(135deg,#164e63,#0891b2)", count: 9,
    courses: [
      "Diploma in Civil Engineering","Diploma in Mechanical Engineering",
      "Diploma in Chemical Engineering","Diploma in Computer Engineering",
      "Diploma in Information Technology","C2D – Mech, Civil, CE, IT, Chemical",
      "Diploma in Civil Technology","Diploma in Electrical Engineering",
      "Diploma in Mech. Engg. (Industry Integrated)",
    ],
  },
  {
    abbr: "NUR", name: "School of Nursing",
    color: "#be185d", bg: "linear-gradient(135deg,#831843,#be185d)", count: 5,
    courses: [
      "General Nursing And Midwifery","Bachelor Of Science In Nursing",
      "Post Basic B.Sc. In Nursing","Master Of Science In Nursing","Ph.D. Nursing",
    ],
  },
  {
    abbr: "PHR", name: "School of Pharmacy",
    color: "#059669", bg: "linear-gradient(135deg,#064e3b,#059669)", count: 1,
    courses: ["Bachelor Of Pharmacy"],
  },
  {
    abbr: "SCI", name: "School of Sciences",
    color: "#d97706", bg: "linear-gradient(135deg,#78350f,#d97706)", count: 8,
    courses: [
      "B.Sc. Biotechnology","B.Sc. Microbiology",
      "B.Sc. Environment Science","B.Sc. Chemistry",
      "PG Diploma – Medical Laboratory Technology",
      "M.Sc. Biotechnology","M.Sc. Microbiology","M.Sc. Chemistry",
    ],
  },
  {
    abbr: "ARC", name: "School of Architecture & Planning",
    color: "#dc2626", bg: "linear-gradient(135deg,#7f1d1d,#dc2626)", count: 2,
    courses: ["Bachelor of Architecture","Masters of Urban Planning"],
  },
  {
    abbr: "DES", name: "School of Universal Design",
    color: "#db2777", bg: "linear-gradient(135deg,#831843,#db2777)", count: 4,
    courses: [
      "Bachelor of Interior Design","B.Design – Fashion & Textile",
      "B.Design – Product Design","B.Design – Visual & Communication",
    ],
  },
  {
    abbr: "MGT", name: "Liberal Arts & Management Studies",
    color: "#0284c7", bg: "linear-gradient(135deg,#0c4a6e,#0284c7)", count: 6,
    courses: [
      "Bachelor of Business Administration","Bachelor of Commerce",
      "Bachelor of Arts","B.Sc (Hons.) Aviation Hospitality & Tourism",
      "Master of Business Administration","MBA – Business Analytics (with SAS)",
    ],
  },
  {
    abbr: "AGR", name: "School of Agriculture",
    color: "#16a34a", bg: "linear-gradient(135deg,#14532d,#16a34a)", count: 1,
    courses: ["B.Sc. (Honours) Agriculture"],
  },
  {
    abbr: "AYU", name: "Ayurvedic College & Hospital",
    color: "#ca8a04", bg: "linear-gradient(135deg,#713f12,#ca8a04)", count: 1,
    courses: ["Bachelor of Ayurvedic Medicine and Surgery (BAMS)"],
  },
  {
    abbr: "HOM", name: "Homoeopathic Medical College",
    color: "#9333ea", bg: "linear-gradient(135deg,#581c87,#9333ea)", count: 1,
    courses: ["Bachelor of Homoeopathic Medicine and Surgery"],
  },
  {
    abbr: "CE", name: "School of Continuing Education",
    color: "#0f766e", bg: "linear-gradient(135deg,#134e4a,#0f766e)", count: 7,
    courses: [
      "Masters In Public Health","Diploma – Medical Radiology & Imaging",
      "Diploma – Front Desk & Medical Billing","Diploma – Operation Theatre Technician",
      "PG Diploma – Medical Laboratory Technology",
      "Fellowship in Post-Doctoral Nursing Research",
      "Professional Certification – Scientific Garbhsanskar",
    ],
  },
  {
    abbr: "PHY", name: "School of Physiotherapy",
    color: "#e11d48", bg: "linear-gradient(135deg,#881337,#e11d48)", count: 1,
    courses: ["Bachelor of Physiotherapy (BPT)"],
  },
];

const CDOE_UG = [
  { prog: "Bachelor of Business Administration (General)", years: 3 },
  { prog: "Bachelor of Computer Applications (BCA)",       years: 3 },
];

const CDOE_PG = [
  { prog: "Master of Arts (English)",                                    years: 2 },
  { prog: "Master of Arts (French)",                                     years: 2 },
  { prog: "Master of Commerce (General)",                                years: 2 },
  { prog: "Master of Business Administration (MBA)",                     years: 2 },
  { prog: "Master of Business Administration (Hospital Administration)", years: 2 },
  { prog: "Master of Business Administration (International Business)",  years: 2 },
  { prog: "Master of Business Administration (Logistics & Supply Chain)",years: 2 },
  { prog: "Master of Science (Data Science)",                            years: 2 },
];

export default function Courses() {
  const [active,  setActive]  = useState(0);
  const [mainTab, setMainTab] = useState<"regular" | "cdoe">("regular");
  const school = SCHOOLS[active];
  const { open: openModal } = useApplyModal();

  return (
    <section id="courses" style={{ background: "#f8fafc", padding: "80px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 40px" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{
            display: "inline-block", background: "rgba(224,48,48,.1)", color: "#e03030",
            fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
            padding: "5px 14px", borderRadius: 50, marginBottom: 14,
          }}></span>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#1a2e5a", lineHeight: 1.2 }}>
            COURSES <span style={{ color: "#F15A29" }}>OFFERED</span>
          </h2>
          <div style={{ width: 60, height: 4, background: "#e03030", borderRadius: 9999, margin: "12px auto 0" }} />
        </div>

        {/* Tab switcher — Regular / CDOE */}
        <div style={{ display: "flex", justifyContent: "center", gap: 0, marginBottom: 36, border: "1.5px solid #e0e5ed", borderRadius: 12, overflow: "hidden", maxWidth: 420, margin: "0 auto 36px" }}>
          {([
            { key: "regular", label: "Regular Programmes" },
            { key: "cdoe",    label: "CDOE (OL Mode)"     },
          ] as const).map(t => (
            <button key={t.key} onClick={() => setMainTab(t.key)} style={{
              flex: 1, padding: "12px 0", border: "none", cursor: "pointer",
              fontFamily: "Poppins,sans-serif", fontWeight: 700, fontSize: 13,
              background: mainTab === t.key ? "#1a2e5a" : "#fff",
              color: mainTab === t.key ? "#fff" : "#6b7280",
              transition: "all 0.2s",
            }}>{t.label}</button>
          ))}
        </div>

        {/* ── REGULAR PROGRAMMES ── */}
        {mainTab === "regular" && (
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24, alignItems: "start" }}>

            {/* LEFT: school tabs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 580, overflowY: "auto", paddingRight: 4 }}>
              {SCHOOLS.map((s, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 16px", borderRadius: 12,
                  border: "none", cursor: "pointer", textAlign: "left",
                  transition: "all .2s",
                  background: i === active ? s.bg : "#fff",
                  boxShadow: i === active ? `0 8px 24px ${s.color}44` : "0 1px 4px rgba(0,0,0,.06)",
                  transform: i === active ? "translateX(6px)" : "none",
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 11, letterSpacing: 0.5,
                    background: i === active ? "rgba(255,255,255,.2)" : "#f1f5f9",
                    color: i === active ? "#fff" : s.color,
                  }}>{s.abbr}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 13, fontWeight: 600, lineHeight: 1.3,
                      color: i === active ? "#fff" : "#1a2e5a",
                      overflow: "hidden", textOverflow: "ellipsis",
                      display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                    }}>{s.name}</div>
                    <div style={{ fontSize: 11, marginTop: 2, color: i === active ? "rgba(255,255,255,.7)" : "#9ca3af" }}>
                      {s.count} programme{s.count > 1 ? "s" : ""}
                    </div>
                  </div>
                  {i === active && <div style={{ color: "rgba(255,255,255,.7)", fontSize: 16, flexShrink: 0 }}>&#8594;</div>}
                </button>
              ))}
            </div>

            {/* RIGHT: course panel */}
            <div key={active} style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 32px rgba(0,0,0,.08)", border: "1.5px solid #e5e7eb", animation: "fadeSlide .3s ease both" }}>
              <div style={{ background: school.bg, padding: "28px 32px", display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#fff", flexShrink: 0 }}>{school.abbr}</div>
                <div>
                  <h3 style={{ fontSize: "clamp(18px,2vw,26px)", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>{school.name}</h3>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 6, background: "rgba(255,255,255,.15)", borderRadius: 50, padding: "3px 12px" }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>{school.count} Programme{school.count > 1 ? "s" : ""} Available</span>
                  </div>
                </div>
              </div>
              <div style={{ background: "#fff", padding: "28px 32px" }}>
                <div style={{ display: "grid", gridTemplateColumns: school.courses.length === 1 ? "1fr" : "repeat(2, 1fr)", gap: "10px 24px" }}>
                  {school.courses.map((c, ci) => (
                    <div key={ci} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", borderRadius: 10, background: "#f8fafc", border: "1px solid #f0f4f8", transition: "border-color .2s" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = school.color)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "#f0f4f8")}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0, marginTop: 4, background: school.color }} />
                      <span style={{ fontSize: 13, color: "#374151", fontWeight: 500, lineHeight: 1.5 }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
                  <button onClick={openModal} style={{
                    background: school.bg, color: "#fff", border: "none", borderRadius: 10,
                    padding: "12px 28px", fontFamily: "Poppins,sans-serif",
                    fontWeight: 700, fontSize: 14, cursor: "pointer",
                    boxShadow: `0 6px 20px ${school.color}44`,
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    Apply for {school.abbr} &#8594;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── CDOE / OL MODE ── */}
        {mainTab === "cdoe" && (
          <div style={{ animation: "fadeSlide .3s ease both" }}>

            {/* Info banner */}
            <div style={{
              background: "linear-gradient(135deg,#1a2e5a,#0d1f3c)",
              borderRadius: 16, padding: "20px 28px", marginBottom: 32,
              display: "flex", alignItems: "center", gap: 16,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(241,90,41,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" fill="none" stroke="#F15A29" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>List of UGC — Entitled Programmes</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>Centre for Distance & Online Education (CDOE) — Open Learning Mode</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

              {/* UG Table */}
              <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1.5px solid #e5e7eb" }}>
                <div style={{ background: "linear-gradient(135deg,#1a2e5a,#2563eb)", padding: "16px 24px" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: 0 }}>Undergraduate Programmes (OL Mode)</h3>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#1a2e5a" }}>
                      <th style={{ padding: "10px 16px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#fff", width: 60 }}>Sr. No.</th>
                      <th style={{ padding: "10px 16px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#fff" }}>Programme</th>
                      <th style={{ padding: "10px 16px", textAlign: "center", fontSize: 12, fontWeight: 700, color: "#fff", width: 70 }}>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CDOE_UG.map((r, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#fff", borderBottom: "1px solid #f0f0f0" }}>
                        <td style={{ padding: "12px 16px", fontSize: 13, color: "#374151" }}>{i + 1}</td>
                        <td style={{ padding: "12px 16px", fontSize: 13, color: "#374151", fontWeight: 500 }}>{r.prog}</td>
                        <td style={{ padding: "12px 16px", fontSize: 13, color: "#374151", textAlign: "center" }}>{r.years}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* PG Table */}
              <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1.5px solid #e5e7eb" }}>
                <div style={{ background: "linear-gradient(135deg,#1a2e5a,#2563eb)", padding: "16px 24px" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: 0 }}>Post Graduate Programmes (OL Mode)</h3>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#1a2e5a" }}>
                      <th style={{ padding: "10px 16px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#fff", width: 60 }}>Sr. No.</th>
                      <th style={{ padding: "10px 16px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#fff" }}>Programme</th>
                      <th style={{ padding: "10px 16px", textAlign: "center", fontSize: 12, fontWeight: 700, color: "#fff", width: 70 }}>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CDOE_PG.map((r, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#fff", borderBottom: "1px solid #f0f0f0" }}>
                        <td style={{ padding: "12px 16px", fontSize: 13, color: "#374151" }}>{i + 1}</td>
                        <td style={{ padding: "12px 16px", fontSize: 13, color: "#374151", fontWeight: 500 }}>{r.prog}</td>
                        <td style={{ padding: "12px 16px", fontSize: 13, color: "#374151", textAlign: "center" }}>{r.years}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

            {/* Apply CTA */}
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <button onClick={openModal} style={{
                background: "linear-gradient(135deg,#e03030,#b71c1c)",
                color: "#fff", border: "none", borderRadius: 12,
                padding: "14px 40px", cursor: "pointer",
                fontFamily: "Poppins,sans-serif", fontWeight: 700, fontSize: 15,
                boxShadow: "0 8px 24px rgba(224,48,48,0.35)",
              }}>Apply Now &#8594;</button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}


