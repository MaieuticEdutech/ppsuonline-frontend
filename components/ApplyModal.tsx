"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

/* ── Context ── */
interface ModalCtx { open: () => void; close: () => void; }
const Ctx = createContext<ModalCtx>({ open: () => {}, close: () => {} });
export const useApplyModal = () => useContext(Ctx);

const STATES = ["Gujarat","Maharashtra","Rajasthan","Delhi","Karnataka","Tamil Nadu","Uttar Pradesh","Other"];
const QUALIFICATIONS = ["10th Pass","12th Pass","Diploma","Graduate","Post Graduate"];
const PROGRAMS = ["B.Tech","MBA","BCA","MCA","B.Pharm","B.Arch","BBA","B.Sc","M.Sc","Other"];
const SCHOOLS = [
  "School of Engineering","Institute of Computer Science","School of Nursing",
  "School of Pharmacy","School of Sciences","School of Architecture",
  "School of Design","School of Management","School of Agriculture","School of Physiotherapy",
];

/* ── Provider (wraps the whole app) ── */
export function ApplyModalProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [agreed,  setAgreed]  = useState(false);
  const [captcha] = useState("92d2fa");

  const open  = useCallback(() => setVisible(true),  []);
  const close = useCallback(() => setVisible(false), []);

  // close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [close]);

  // lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}

      {/* ── BACKDROP ── */}
      {visible && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 99998,
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(6px)",
            animation: "fadeIn 0.2s ease",
          }}
        />
      )}

      {/* ── MODAL ── */}
      {visible && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99999,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px",
          pointerEvents: "none",
        }}>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              pointerEvents: "all",
              background: "#fff",
              borderRadius: 20,
              width: "100%", maxWidth: 520,
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              animation: "slideUp 0.28s cubic-bezier(.4,0,.2,1)",
            }}
          >
            <style>{`
              @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
              @keyframes slideUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
              .modal-input {
                width: 100%; padding: 9px 12px;
                border: 1.5px solid #e0e5ed; border-radius: 8px;
                font-family: Poppins, sans-serif; font-size: 12.5px;
                color: #374151; outline: none; box-sizing: border-box;
                transition: border-color 0.2s;
              }
              .modal-input:focus { border-color: #F15A29; }
              .modal-select { appearance: auto; }
            `}</style>

            {/* Header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "22px 28px 18px",
              borderBottom: "1px solid #f0f0f0",
            }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#F15A29", letterSpacing: 1.5, textTransform: "uppercase" }}>
                  Admissions 2026
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1a2e5a", margin: "4px 0 0" }}>
                  Apply to PPSU
                </h3>
              </div>
              <button onClick={close} style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "#f5f5f5", border: "none", cursor: "pointer",
                fontSize: 18, color: "#666", display: "flex",
                alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>×</button>
            </div>

            {/* Form */}
            <div style={{ padding: "20px 28px 28px", display: "flex", flexDirection: "column", gap: 12 }}>

              {/* Name */}
              <input className="modal-input" type="text" placeholder="Full Name *" />

              {/* Email */}
              <input className="modal-input" type="email" placeholder="Email Address *" />

              {/* Mobile row */}
              <div style={{ display: "flex", gap: 8 }}>
                <select className="modal-input modal-select" style={{ width: 80, flexShrink: 0 }}>
                  <option>+91</option><option>+1</option><option>+44</option>
                </select>
                <input className="modal-input" type="tel" placeholder="Mobile Number *" style={{ flex: 1 }} />
              </div>

              {/* OTP */}
              <input className="modal-input" type="text" placeholder="Enter OTP" />

              {/* State + City */}
              <div style={{ display: "flex", gap: 8 }}>
                <select className="modal-input modal-select" style={{ flex: 1 }} defaultValue="">
                  <option value="" disabled>Select State *</option>
                  {STATES.map(s => <option key={s}>{s}</option>)}
                </select>
                <input className="modal-input" type="text" placeholder="City *" style={{ flex: 1 }} />
              </div>

              {/* Qualification */}
              <select className="modal-input modal-select" defaultValue="">
                <option value="" disabled>Select Qualification *</option>
                {QUALIFICATIONS.map(q => <option key={q}>{q}</option>)}
              </select>

              {/* Program + School */}
              <div style={{ display: "flex", gap: 8 }}>
                <select className="modal-input modal-select" defaultValue="" style={{ flex: 1 }}>
                  <option value="" disabled>Select Program *</option>
                  {PROGRAMS.map(p => <option key={p}>{p}</option>)}
                </select>
                <select className="modal-input modal-select" defaultValue="" style={{ flex: 1 }}>
                  <option value="" disabled>Select School *</option>
                  {SCHOOLS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* Captcha */}
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{
                  padding: "8px 14px", background: "#f0f4f8",
                  border: "1.5px solid #e0e5ed", borderRadius: 8,
                  fontFamily: "monospace", fontWeight: 700, fontSize: 13,
                  color: "#1a2e5a", letterSpacing: 4, userSelect: "none", flexShrink: 0,
                }}>{captcha}</div>
                <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#666", flexShrink: 0 }}>↺</button>
                <input className="modal-input" type="text" placeholder="Enter Captcha" />
              </div>

              {/* Consent */}
              <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer" }}>
                <input
                  type="checkbox" checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  style={{ marginTop: 3, accentColor: "#e03030", flexShrink: 0 }}
                />
                <span style={{ fontSize: 11, color: "#e03030", lineHeight: 1.5 }}>
                  I agree to receive information by signing up on PP Savani University *
                </span>
              </label>

              {/* Submit */}
              <button
                disabled={!agreed}
                style={{
                  width: "100%", padding: "13px 0", marginTop: 4,
                  background: agreed
                    ? "linear-gradient(135deg,#1a2e5a,#0d1f3c)"
                    : "#c0c0c0",
                  color: "#fff", border: "none", borderRadius: 10,
                  fontFamily: "Poppins,sans-serif", fontWeight: 700,
                  fontSize: 14, cursor: agreed ? "pointer" : "not-allowed",
                  letterSpacing: 0.5, transition: "background 0.2s",
                }}
              >
                Register Now
              </button>

              <p style={{ textAlign: "center", fontSize: 11, color: "#9ca3af", margin: 0 }}>
                By registering, you agree to our terms & privacy policy.
              </p>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
