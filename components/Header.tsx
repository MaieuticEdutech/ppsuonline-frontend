"use client";

import React, { useState, useEffect } from "react";
import { useApplyModal } from "@/components/ApplyModal";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Why PPSU",      href: "#whyppsu"      },
  { label: "Placement",     href: "#placement"    },
  { label: "Courses",       href: "#courses"      },
  { label: "Scholarships",  href: "#scholarships" },
  { label: "International", href: "#intl"         },
  { label: "Campus",        href: "#campus"       },
  { label: "Testimonials",  href: "#testimonials" },
];

export default function Header() {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [hoverIdx,  setHoverIdx]  = useState(-1);
  const { open: openModal } = useApplyModal();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string, idx: number) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setActiveIdx(idx);
    setMenuOpen(false);
  };

  return (
    <React.Fragment>
      <style>{`
        @keyframes mobileSlide {
          from { opacity:0; transform:translateY(-6px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes navUnderline {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .ppsu-nav-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 0 2px;
          cursor: pointer;
          background: none;
          border: none;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #2d3a52;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .ppsu-nav-item:hover { color: #c0392b; }
        .ppsu-nav-item.active { color: #c0392b; font-weight: 700; }

        .ppsu-nav-item .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #c0392b;
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.2s, transform 0.2s;
        }
        .ppsu-nav-item:hover .dot,
        .ppsu-nav-item.active .dot {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 9999,
          width: "100%",
          background: "#fff",
          transition: "box-shadow 0.3s",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.10)" : "0 1px 0 rgba(0,0,0,0.07)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 20px",
            height: 68,
            gap: 0,
          }}
        >

          {/* ── LOGO ── */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0, marginRight: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero/logo-combined.png"
              alt="PP Savani University NAAC A+"
              style={{ height: 52, width: "auto", display: "block" }}
            />
          </Link>

          {/* ── NAV — desktop: each link in its own outlined pill ── */}
          <nav
            className="hidden lg:flex"
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {NAV_LINKS.map((l, idx) => {
              const isActive = activeIdx === idx;
              const isHover  = hoverIdx  === idx;
              return (
                <button
                  key={l.href}
                  className={"ppsu-nav-item" + (isActive ? " active" : "")}
                  onClick={() => go(l.href, idx)}
                  onMouseEnter={() => setHoverIdx(idx)}
                  onMouseLeave={() => setHoverIdx(-1)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 999,
                    border: isActive
                      ? "1.5px solid #c0392b"
                      : isHover
                      ? "1.5px solid rgba(192,57,43,0.35)"
                      : "1.5px solid transparent",
                    background: isActive
                      ? "rgba(192,57,43,0.06)"
                      : isHover
                      ? "rgba(192,57,43,0.03)"
                      : "transparent",
                    transition: "border 0.2s, background 0.2s, color 0.2s",
                  }}
                >
                  {l.label}
                  <span className="dot" />
                </button>
              );
            })}
          </nav>

          {/* ── RIGHT ── */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: 10, marginLeft: 16, flexShrink: 0 }}
          >
            {/* Helpline — minimal text style */}
            <a
              href="tel:7778879189"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                borderLeft: "3px solid #F15A29",
                paddingLeft: 10,
                lineHeight: 1.2,
              }}
            >
              <span style={{ fontSize: 9, color: "#9ca3af", fontWeight: 600, letterSpacing: 0.8, textTransform: "uppercase" }}>
                Admission Helpline
              </span>
              <span style={{ fontSize: 14, color: "#1a2e5a", fontWeight: 800, letterSpacing: 0.3 }}>
                7778879189
              </span>
            </a>

            {/* Divider */}
            <div style={{ width: 1, height: 32, background: "#e5e7eb" }} />

            {/* Apply Now — bold outlined style with fill on hover */}
            <button
              onClick={() => openModal()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "#c0392b",
                color: "#fff",
                border: "2px solid #c0392b",
                borderRadius: 999,
                padding: "8px 20px",
                cursor: "pointer",
                fontFamily: "Poppins,sans-serif",
                fontWeight: 700,
                fontSize: 12.5,
                letterSpacing: 0.4,
                whiteSpace: "nowrap",
                transition: "background 0.2s, color 0.2s, transform 0.18s",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = "transparent";
                b.style.color = "#c0392b";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = "#c0392b";
                b.style.color = "#fff";
              }}
            >
              {/* arrow icon */}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
              Apply Now
            </button>
          </div>

          {/* ── MOBILE BURGER ── */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              marginLeft: "auto",
              background: "none",
              border: "1.5px solid #e0e5ed",
              borderRadius: 8,
              padding: "7px 9px",
              cursor: "pointer",
              flexDirection: "column",
              gap: 4.5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  borderRadius: 99,
                  background: "#1a2e5a",
                  transition: "transform 0.22s, opacity 0.18s",
                  transform: menuOpen
                    ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                    : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                    : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        {menuOpen && (
          <div
            style={{
              background: "#fff",
              borderTop: "1px solid #f0f0f0",
              padding: "6px 0 16px",
              animation: "mobileSlide 0.2s ease",
            }}
          >
            {NAV_LINKS.map((l, idx) => (
              <button
                key={l.href}
                onClick={() => go(l.href, idx)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: 13.5,
                  fontWeight: activeIdx === idx ? 700 : 500,
                  color: activeIdx === idx ? "#c0392b" : "#1a2e5a",
                  padding: "11px 24px",
                  borderLeft: activeIdx === idx ? "3px solid #c0392b" : "3px solid transparent",
                }}
              >
                {l.label}
              </button>
            ))}
            <div style={{ display: "flex", gap: 10, padding: "12px 20px 0" }}>
              <a
                href="tel:7778879189"
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", background: "#f5f7fa",
                  border: "1.5px solid #e0e5ed", color: "#1a2e5a",
                  borderRadius: 9, padding: "10px 0",
                  fontFamily: "Poppins,sans-serif", fontWeight: 700, fontSize: 13,
                }}
              >
                7778879189
              </a>
              <button
                onClick={() => openModal()}
                style={{
                  flex: 1, background: "#c0392b", color: "#fff",
                  border: "none", borderRadius: 9, cursor: "pointer",
                  fontFamily: "Poppins,sans-serif", fontWeight: 700, fontSize: 13,
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </header>
    </React.Fragment>
  );
}
