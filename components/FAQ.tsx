"use client";

import React from "react";

import { useState } from "react";

const FAQS = [
  { q: "Is PPSU accredited and recognised by UGC?",              a: "Yes. PPSU is NAAC A+ accredited and all programmes are UGC approved. Degrees are recognised for employment, competitive exams and higher studies." },
  { q: "What scholarships are available for 2026–27?",           a: "PPSU offers scholarships up to 100% through merit-based, need-based, defence, sports and partner school schemes, along with government programmes like MYSY, CSSS and Digital Gujarat." },
  { q: "What is the placement record at PPSU?",                  a: "PPSU has 10,000+ placement offers, 1,000+ companies visiting annually, highest national package of 78+ LPA and an international record of 1 Crore per annum." },
  { q: "How many courses does PPSU offer?",                      a: "PPSU offers 60+ programmes across 13 schools including Engineering, Pharmacy, Nursing, Sciences, Architecture, Design, Management, Agriculture, Physiotherapy and more." },
  { q: "What international opportunities does PPSU provide?",    a: "PPSU has 150+ global university partnerships in USA, Europe, Africa and Asia. Students benefit from exchange programmes, dual-degree options and global placement support." },
  { q: "Is hostel accommodation available?",                     a: "Yes. PPSU has a 100-acre campus with separate hostels for boys and girls, equipped with all modern amenities. City transportation is also available from Surat." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="sec">
      <div className="wrap">

        {/* heading */}
        <div className="text-center mb-11">
          <div className="sec-label">FAQ</div>
          <h2 className="text-[clamp(24px,3vw,38px)] font-bold text-[#111827] leading-snug">
            Frequently Asked <span style={{ color: "#F15A29" }}>Questions</span>
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-3 max-w-xl mx-auto">
            Everything you need to know about admissions, scholarships, placements and campus life.
          </p>
        </div>

        {/* accordion */}
        <div className="max-w-[760px] mx-auto flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-[12px] overflow-hidden"
                style={{ border: `1.5px solid ${isOpen ? "#F15A29" : "#e5e7eb"}`, transition: "border-color .2s" }}
              >
                <button
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="flex-1 text-[14px] font-semibold text-[#111827] leading-snug">{f.q}</span>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-base flex-shrink-0 transition-all"
                    style={{
                      border: `1.5px solid ${isOpen ? "#F15A29" : "#e5e7eb"}`,
                      background: isOpen ? "#F15A29" : "transparent",
                      color: isOpen ? "#fff" : "#6b7280",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </div>
                </button>
                {isOpen && (
                  <div
                    className="px-5 pb-4 text-[13px] text-[#6b7280] leading-relaxed"
                    style={{ borderTop: "1px solid #e5e7eb", paddingTop: 12 }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
