"use client";

import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#0d2461", color: "#fff", padding: "48px 0 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        <div style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "space-between" }}>

          {/* LEFT — addresses + contact */}
          <div style={{ flex: "1 1 360px" }}>

            {/* Campus Address */}
            <div style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10, color: "#fff" }}>
                Campus Address
              </h4>
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                <svg style={{ flexShrink: 0, marginTop: 2 }} width="14" height="14" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  NH48, GETCO, Near Biltech, Dhamdod Village, Mangrol,<br />Kosamba, Surat 394125
                </span>
              </div>
            </div>

            {/* Surat Vesu Campus */}
            <div style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10, color: "#fff" }}>
                Surat Vesu Campus
              </h4>
              <div style={{ display: "flex", gap: 8 }}>
                <svg style={{ flexShrink: 0, marginTop: 2 }} width="14" height="14" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  PPSU NIC, Rivoli Heights, Opp. Florence Apartments,<br />
                  Besides Rajhans Cinema, Vesu, Surat 395007
                </span>
              </div>
            </div>

            {/* Contact for Admissions */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10, color: "#fff" }}>
                Contact Details For Admissions
              </h4>
              <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <svg width="13" height="13" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:admission@ppsu.ac.in" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
                    admission@ppsu.ac.in
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <svg width="13" height="13" fill="rgba(255,255,255,0.7)" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <a href="tel:7778879189" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
                    7778879189
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div style={{ marginTop: 24 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12, color: "#fff" }}>
                Social Media
              </h4>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { label: "f",  href: "#", title: "Facebook" },
                  { label: "in", href: "#", title: "LinkedIn" },
                  { label: "𝕏",  href: "#", title: "Twitter/X" },
                  { label: "▶",  href: "#", title: "YouTube"  },
                ].map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    title={s.title}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: 13, fontWeight: 700,
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.25)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)")}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Google Maps embed */}
          <div style={{ flex: "0 0 220px", minWidth: 180 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.123456789!2d72.8!3d21.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e2b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sP%20P%20Savani%20University!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="160"
              style={{ border: 0, borderRadius: 10, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>

      {/* Bottom copyright bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 36 }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "14px 32px",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexWrap: "wrap", gap: 6,
        }}>
          <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", textAlign: "center" }}>
            © 2026 All Rights Reserved. P P Savani University, Surat (Sponsoring Body : P P Savani Knowledge City)
          </span>
        </div>
        <div style={{ textAlign: "center", paddingBottom: 10 }}>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)" }}>
            Developed by Ultra Digital Guru
          </span>
        </div>
      </div>
    </footer>
  );
}
