"use client";
import { useApplyModal } from "@/components/ApplyModal";

import React, { useState } from "react";

const STATES = ["Gujarat","Maharashtra","Rajasthan","Delhi","Karnataka","Tamil Nadu","Uttar Pradesh","Other"];
const QUALIFICATIONS = ["10th Pass","12th Pass","Diploma","Graduate","Post Graduate"];
const PROGRAMS = ["B.Tech","MBA","BCA","MCA","B.Pharm","B.Arch","BBA","B.Sc","M.Sc","Other"];
const SCHOOLS = [
  "School of Engineering","Institute of Computer Science",
  "School of Nursing","School of Pharmacy","School of Sciences",
  "School of Architecture","School of Design","School of Management",
  "School of Agriculture","School of Physiotherapy",
];

export default function HeroBanner() {
  const { open: openModal } = useApplyModal();
  const [tab, setTab] = useState<"register" | "login">("register");
  const [agreed, setAgreed] = useState(false);
  const [captcha] = useState("92d2fa");
  const [captchaInput, setCaptchaInput] = useState("");

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: 320,
        overflow: "hidden",
        background: "#b8d8ee",
      }}
    >
      {/* campus background — full bleed, taller crop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero/campus.jpg"
        alt="PPSU Campus"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center top",
          zIndex: 0,
        }}
      />

      {/* very light left-fade so text stays legible */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to right, rgba(255,255,255,.08) 0%, rgba(255,255,255,0) 40%)",
      }} />

      {/* ── content row ── */}
      <div
        style={{
          position: "relative", zIndex: 2,
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "22px 40px 22px 36px",
          minHeight: 320,
        }}
      >
        {/* ══ LEFT headline — compact, matching reference ══ */}
        <div style={{ flex: 1, maxWidth: 520, paddingTop: 6 }}>
          <h1
            style={{
              fontSize: "clamp(20px,2.4vw,34px)",
              fontWeight: 800, color: "#0d2850",
              lineHeight: 1.22, margin: "0 0 8px",
            }}
          >
            South Gujarat&apos;s Only{" "}
            <span style={{ color: "#F15A29" }}>NAAC A+</span>
            Private University
          </h1>

          <p style={{ fontSize: 13.5, color: "#0d2850", margin: "0 0 16px", fontWeight: 500 }}>
            <strong style={{ color: "#F15A29" }}>Admissions Open 2026</strong>
            {" "}Your Global Career Starts Here
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#e03030", color: "#fff",
              border: "none", borderRadius: 6,
              padding: "9px 18px",
              fontFamily: "Poppins,sans-serif",
              fontWeight: 600, fontSize: 12.5,
              cursor: "pointer",
            }}
          >
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Brochure
          </button>
          <button
            onClick={() => openModal()}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#1a2e5a", color: "#fff",
              border: "none", borderRadius: 6,
              padding: "9px 18px",
              fontFamily: "Poppins,sans-serif",
              fontWeight: 600, fontSize: 12.5,
              cursor: "pointer",
            }}
          >
            Apply Now →
          </button>
          </div>
        </div>

        {/* ══ RIGHT: Register / Login form ══ */}
        <div
          style={{
            width: 290, flexShrink: 0, marginLeft: 20,
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 4px 24px rgba(0,0,0,.18)",
            overflow: "hidden",
          }}
        >
          {/* tabs */}
          <div style={{ display: "flex" }}>
            {(["register","login"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1, padding: "10px 0",
                  border: "none", cursor: "pointer",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: 12.5, fontWeight: 600,
                  background: tab === t ? "#e03030" : "#f0f0f0",
                  color: tab === t ? "#fff" : "#666",
                  textTransform: "capitalize",
                }}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* REGISTER */}
          {tab === "register" && (
            <div style={{ padding: "11px 13px 13px" }}>
              <FI placeholder="Enter Name *"           type="text"  />
              <FI placeholder="Enter Email Address *"  type="email" />

              <div style={{ display: "flex", gap: 6, marginBottom: 7 }}>
                <select style={selectSm}>
                  <option>+91</option><option>+1</option><option>+44</option>
                </select>
                <input type="tel" placeholder="Enter Mobile Number *" style={{ ...inputSm, flex: 1 }} />
              </div>

              <FI placeholder="Enter OTP" type="text" />

              <div style={{ display: "flex", gap: 6, marginBottom: 7 }}>
                <FS placeholder="Select State *"  options={STATES} />
                <FI placeholder="Select City *"   type="text"      />
              </div>

              <FS placeholder="Select Qualification *" options={QUALIFICATIONS} full />

              <div style={{ display: "flex", gap: 6, marginBottom: 7 }}>
                <FS placeholder="Select Program *" options={PROGRAMS} />
                <FS placeholder="Select School *"  options={SCHOOLS}  />
              </div>

              <div style={{ display: "flex", gap: 6, marginBottom: 7, alignItems: "center" }}>
                <div style={{
                  padding: "5px 10px", border: "1px solid #d1d5db",
                  borderRadius: 3, background: "#f0f4f8",
                  fontFamily: "monospace", fontWeight: 700, fontSize: 12,
                  color: "#1a2e5a", letterSpacing: 3, userSelect: "none", flexShrink: 0,
                }}>
                  {captcha}
                </div>
                <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15, color: "#666" }}>&#8635;</button>
                <input
                  type="text" placeholder="Enter Captcha"
                  value={captchaInput}
                  onChange={e => setCaptchaInput(e.target.value)}
                  style={{ ...inputSm, flex: 1 }}
                />
              </div>

              <label style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 9, cursor: "pointer" }}>
                <input
                  type="checkbox" checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  style={{ marginTop: 2, accentColor: "#e03030", flexShrink: 0 }}
                />
                <span style={{ fontSize: 10, color: "#e03030", lineHeight: 1.4 }}>
                  I agree to receive information by signing up on on PP Savani University *
                </span>
              </label>

              <button style={{
                width: "100%", padding: "10px 0",
                background: "#003087", color: "#fff", border: "none",
                borderRadius: 3, fontFamily: "Poppins,sans-serif",
                fontWeight: 700, fontSize: 13.5, cursor: "pointer", letterSpacing: 0.5,
              }}>
                Register
              </button>
            </div>
          )}

          {/* LOGIN */}
          {tab === "login" && (
            <div style={{ padding: "13px 13px 15px" }}>
              <FI placeholder="Email or Mobile Number *" type="text"     />
              <FI placeholder="Password *"               type="password" />
              <button style={{
                width: "100%", padding: "10px 0", marginTop: 4,
                background: "#003087", color: "#fff", border: "none",
                borderRadius: 3, fontFamily: "Poppins,sans-serif",
                fontWeight: 700, fontSize: 13.5, cursor: "pointer",
              }}>
                Login
              </button>
              <p style={{ textAlign: "center", fontSize: 11, color: "#666", marginTop: 8 }}>
                <a href="#" style={{ color: "#003087" }}>Forgot Password?</a>
                &nbsp;|&nbsp;
                <a href="#" style={{ color: "#003087" }}>Login with OTP</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const inputSm: React.CSSProperties = {
  padding: "6px 9px", border: "1px solid #d1d5db",
  borderRadius: 3, fontFamily: "Poppins,sans-serif",
  fontSize: 11, color: "#374151", background: "#fff",
  outline: "none", width: "100%",
};
const selectSm: React.CSSProperties = {
  ...inputSm, appearance: "auto", width: 54, flexShrink: 0,
};

function FI({ placeholder, type }: { placeholder: string; type: string }) {
  return (
    <input type={type} placeholder={placeholder}
      style={{ ...inputSm, display: "block", marginBottom: 7, width: "100%" }} />
  );
}
function FS({ placeholder, options, full }: { placeholder: string; options: string[]; full?: boolean }) {
  return (
    <select defaultValue="" style={{
      ...inputSm, appearance: "auto",
      flex: full ? undefined : 1,
      width: full ? "100%" : undefined,
      display: full ? "block" : undefined,
      marginBottom: full ? 7 : 0,
    }}>
      <option value="" disabled>{placeholder}</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}
