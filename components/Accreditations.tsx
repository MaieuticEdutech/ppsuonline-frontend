"use client";

import React from "react";

import Image from "next/image";

const LOGOS = [
  { img: "/images/accreditations/ugc.webp",   name: "University Grants Commission"                },
  { img: "/images/accreditations/aicte.webp", name: "All India Council for Technical Education"   },
  { img: "/images/accreditations/gscpt.webp", name: "Gujarat State Council for Physiotherapy"     },
  { img: "/images/accreditations/logo4.webp", name: "NAAC A+ Accreditation"                       },
  { img: "/images/accreditations/logo5.webp", name: "Council of Architecture"                     },
  { img: "/images/accreditations/logo6.webp", name: "Indian Nursing Council"                      },
  { img: "/images/accreditations/logo7.webp", name: "Gujarat Nursing Council"                     },
  { img: "/images/accreditations/logo8.webp", name: "Pharmacy Council of India"                   },
  { img: "/images/accreditations/logo9.webp", name: "National Commission for Homoeopathy"         },
];

/* double for seamless infinite loop */
const TRACK = [...LOGOS, ...LOGOS];

export default function Accreditations() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "64px 0",
        borderTop: "1px solid #f0f0f0",
      }}
    >
      {/* ── Heading ── */}
      <div className="text-center mb-12">
        <h2
          className="font-extrabold tracking-[2px] uppercase"
          style={{ fontSize: "clamp(18px,2.2vw,28px)", color: "#1a2e5a" }}
        >
          ACCREDITATIONS AND{" "}
          <span style={{ color: "#F15A29" }}>AFFILIATIONS</span>
        </h2>
        <div
          className="mx-auto mt-3 rounded-full"
          style={{ width: 70, height: 4, background: "#e03030" }}
        />
      </div>

      {/* ── Marquee strip ── */}
      <div style={{ overflow: "hidden" }}>
        {/* marquee-track class drives the CSS animation from globals.css */}
        <div
          className="marquee-track marquee-slow"
          style={{ gap: 56, alignItems: "flex-start" }}
        >
          {TRACK.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                width: 130,
                flexShrink: 0,
              }}
            >
              {/* circular logo frame */}
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  border: "1.5px solid #e5e7eb",
                  background: "#f9fafb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: 8,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* label */}
              <p
                style={{
                  fontSize: 11,
                  color: "#6b7280",
                  textAlign: "center",
                  lineHeight: 1.4,
                  maxWidth: 120,
                }}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
