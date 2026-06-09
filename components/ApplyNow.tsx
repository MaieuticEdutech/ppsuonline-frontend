"use client";

import React, { useState } from "react";

const STATES = ["Gujarat","Maharashtra","Rajasthan","Delhi","Karnataka","Tamil Nadu","Uttar Pradesh","Punjab","Other"];
const QUALIFICATIONS = ["10th Pass","12th Pass","Diploma","Graduate","Post Graduate"];
const PROGRAMS = ["B.Tech","MBA","BCA","MCA","B.Pharm","B.Arch","BBA","B.Sc","M.Sc","LLB","B.Ed","Other"];
const SCHOOLS = [
  "School of Engineering","Institute of Computer Science",
  "School of Nursing","School of Pharmacy","School of Sciences",
  "School of Architecture","School of Design","School of Management",
  "School of Agriculture","School of Physiotherapy","School of Law",
];

const STATS = [
  { num: "40+",   label: "Years of Excellence"         },
  { num: "61+",   label: "Programmes Offered"          },
  { num: "14",    label: "Schools & Institutes"        },
  { num: "2K+",   label: "Recruiting Companies"        },
];

export default function ApplyNow() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", otp: "",
    state: "", city: "", qualification: "", program: "", school: "",
    captcha: "", agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string | boolean) => setForm(p => ({ ...p, [k]: v }));

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" style={{
      background: "linear-gradient(135deg, #0d1f3c 0%, #111827 60%, #1a0d0d 100%)",
      padding: "90px 0",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Decorative bg elements */}
      <div style={{ position:"absolute", top:-200, right:-200, width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle, rgba(241,90,41,0.10) 0%, transparent 65%)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:-150, left:-100, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,46,90,0.5) 0%, transparent 65%)", pointerEvents:"none" }}/>
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
        backgroundSize:"48px 48px",
      }}/>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 40px", position:"relative", zIndex:1 }}>

        {/* Heading */}
        <div style={{ textAlign:"center", marginBottom:60 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:16 }}>
            <div style={{ width:32, height:3, background:"#F15A29", borderRadius:99 }}/>
            <span style={{ fontSize:11, fontWeight:700, color:"#F15A29", letterSpacing:3, textTransform:"uppercase" }}>
              Admissions Open 2026
            </span>
            <div style={{ width:32, height:3, background:"#F15A29", borderRadius:99 }}/>
          </div>
          <h2 style={{
            fontSize:"clamp(28px,3.5vw,48px)", fontWeight:900,
            color:"#fff", lineHeight:1.15, margin:0,
          }}>
            Start Your Journey at{" "}
            <span style={{ color:"#F15A29" }}>PPSU</span>
          </h2>
          <p style={{ fontSize:15, color:"rgba(255,255,255,0.45)", marginTop:12 }}>
            Fill in your details and our admissions team will reach out to you.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start" }}>

          {/* LEFT — form */}
          <div style={{
            background:"rgba(255,255,255,0.04)",
            border:"1px solid rgba(255,255,255,0.09)",
            borderRadius:24,
            padding:"40px 36px",
            backdropFilter:"blur(16px)",
          }}>
            {submitted ? (
              <div style={{ textAlign:"center", padding:"40px 0" }}>
                <div style={{
                  width:72, height:72, borderRadius:"50%",
                  background:"linear-gradient(135deg,#F15A29,#e03030)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  margin:"0 auto 20px",
                  boxShadow:"0 8px 28px rgba(224,48,48,0.4)",
                }}>
                  <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize:24, fontWeight:800, color:"#fff", marginBottom:10 }}>Application Submitted!</h3>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", lineHeight:1.7 }}>
                  Thank you for applying. Our admissions team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop:24, background:"rgba(255,255,255,0.08)",
                    color:"#fff", border:"1px solid rgba(255,255,255,0.15)",
                    borderRadius:10, padding:"10px 24px", cursor:"pointer",
                    fontFamily:"Poppins,sans-serif", fontWeight:600, fontSize:13,
                  }}
                >Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handle}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
                  <Field label="Full Name *" value={form.name} onChange={v => set("name", v)} placeholder="Enter your name" />
                  <Field label="Email Address *" value={form.email} onChange={v => set("email", v)} placeholder="Enter email" type="email" />
                </div>

                <div style={{ display:"grid", gridTemplateColumns:"80px 1fr 1fr", gap:14, marginBottom:14 }}>
                  <div>
                    <label style={labelStyle}>Code</label>
                    <select value="+91" onChange={() => {}} style={inputStyle}>
                      <option>+91</option><option>+1</option><option>+44</option>
                    </select>
                  </div>
                  <Field label="Mobile Number *" value={form.phone} onChange={v => set("phone", v)} placeholder="10-digit number" type="tel" />
                  <Field label="OTP" value={form.otp} onChange={v => set("otp", v)} placeholder="Enter OTP" />
                </div>

                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
                  <div>
                    <label style={labelStyle}>State *</label>
                    <select value={form.state} onChange={e => set("state", e.target.value)} style={inputStyle}>
                      <option value="">Select State</option>
                      {STATES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <Field label="City *" value={form.city} onChange={v => set("city", v)} placeholder="Enter city" />
                </div>

                <div style={{ marginBottom:14 }}>
                  <label style={labelStyle}>Qualification *</label>
                  <select value={form.qualification} onChange={e => set("qualification", e.target.value)} style={{ ...inputStyle, width:"100%" }}>
                    <option value="">Select Qualification</option>
                    {QUALIFICATIONS.map(q => <option key={q}>{q}</option>)}
                  </select>
                </div>

                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
                  <div>
                    <label style={labelStyle}>Program *</label>
                    <select value={form.program} onChange={e => set("program", e.target.value)} style={inputStyle}>
                      <option value="">Select Program</option>
                      {PROGRAMS.map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>School *</label>
                    <select value={form.school} onChange={e => set("school", e.target.value)} style={inputStyle}>
                      <option value="">Select School</option>
                      {SCHOOLS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <label style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:20, cursor:"pointer" }}>
                  <input
                    type="checkbox"
                    checked={form.agreed}
                    onChange={e => set("agreed", e.target.checked)}
                    style={{ marginTop:3, accentColor:"#F15A29", flexShrink:0 }}
                  />
                  <span style={{ fontSize:11, color:"rgba(255,255,255,0.45)", lineHeight:1.6 }}>
                    I agree to receive information by signing up on PP Savani University *
                  </span>
                </label>

                <button
                  type="submit"
                  style={{
                    width:"100%", padding:"15px 0",
                    background:"linear-gradient(135deg,#F15A29,#c0392b)",
                    color:"#fff", border:"none", borderRadius:12,
                    fontFamily:"Poppins,sans-serif", fontWeight:800, fontSize:15,
                    cursor:"pointer", letterSpacing:0.5,
                    boxShadow:"0 8px 28px rgba(241,90,41,0.4)",
                    transition:"transform 0.18s, box-shadow 0.18s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform="translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow="0 12px 36px rgba(241,90,41,0.5)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform="none"; (e.currentTarget as HTMLButtonElement).style.boxShadow="0 8px 28px rgba(241,90,41,0.4)"; }}
                >
                  Submit Application →
                </button>
              </form>
            )}
          </div>

          {/* RIGHT — info */}
          <div style={{ display:"flex", flexDirection:"column", gap:28 }}>

            {/* Stats grid */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  background:"rgba(255,255,255,0.04)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  borderRadius:16, padding:"24px 20px",
                  backdropFilter:"blur(10px)",
                }}>
                  <div style={{
                    fontSize:"clamp(28px,2.8vw,38px)", fontWeight:900,
                    color: i === 0 || i === 3 ? "#F15A29" : "#fff",
                    lineHeight:1, letterSpacing:-1,
                  }}>{s.num}</div>
                  <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)", marginTop:8, lineHeight:1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Why apply here */}
            <div style={{
              background:"rgba(241,90,41,0.07)",
              border:"1px solid rgba(241,90,41,0.2)",
              borderRadius:20, padding:"28px 28px",
            }}>
              <h4 style={{ fontSize:16, fontWeight:800, color:"#fff", marginBottom:18 }}>
                Why Apply at PPSU?
              </h4>
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {[
                  "NAAC A+ Accredited University",
                  "100% Scholarship Opportunities",
                  "2000+ Recruiting Companies",
                  "International Collaborations",
                  "State-of-the-art 100+ Acre Campus",
                  "UGC, AICTE, PCI Approved Programs",
                ].map((item, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{
                      width:22, height:22, borderRadius:6, flexShrink:0,
                      background:"rgba(241,90,41,0.2)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                    }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F15A29" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span style={{ fontSize:13.5, color:"rgba(255,255,255,0.7)", fontWeight:500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div style={{
              background:"rgba(255,255,255,0.03)",
              border:"1px solid rgba(255,255,255,0.07)",
              borderRadius:16, padding:"20px 24px",
              display:"flex", alignItems:"center", gap:16,
            }}>
              <div style={{
                width:48, height:48, borderRadius:12, flexShrink:0,
                background:"linear-gradient(135deg,#F15A29,#c0392b)",
                display:"flex", alignItems:"center", justifyContent:"center",
                boxShadow:"0 4px 16px rgba(241,90,41,0.4)",
              }}>
                <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", fontWeight:600, letterSpacing:0.8, textTransform:"uppercase" }}>Admission Helpline</div>
                <a href="tel:7778879189" style={{ fontSize:22, fontWeight:900, color:"#fff", textDecoration:"none", letterSpacing:0.5 }}>
                  7778879189
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display:"block", fontSize:11, fontWeight:600,
  color:"rgba(255,255,255,0.45)", marginBottom:6,
  letterSpacing:0.5, textTransform:"uppercase",
};

const inputStyle: React.CSSProperties = {
  width:"100%", padding:"11px 14px",
  background:"rgba(255,255,255,0.06)",
  border:"1px solid rgba(255,255,255,0.12)",
  borderRadius:10, color:"#fff",
  fontFamily:"Poppins,sans-serif", fontSize:13,
  outline:"none",
  appearance:"auto",
};

function Field({ label, value, onChange, placeholder, type = "text" }: {
  label: string; value: string;
  onChange: (v: string) => void;
  placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type} value={value} placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
}
