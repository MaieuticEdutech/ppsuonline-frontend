"use client";

import React from "react";

export default function TopBar() {
  return (
    <div
      style={{ background: "#F15A29" }}
      className="text-white text-xs font-medium px-10 py-2 flex justify-between items-center flex-wrap gap-2"
    >
      <div className="flex gap-4 items-center">
        <a href="/ppsuNewsletter.pdf" target="_blank" className="opacity-90 hover:opacity-100">
          PPSU Newsletter
        </a>
        <span className="opacity-40">|</span>
        <a href="/SchoolEligibilityCri.pdf" target="_blank" className="opacity-90 hover:opacity-100">
          Eligibility Criteria
        </a>
        <span className="opacity-40">|</span>
        <a href="/CDOE_Brochure.pdf" target="_blank" className="opacity-90 hover:opacity-100">
          CDOE Brochure
        </a>
      </div>
      <div>Admission Helpline — 7778879189</div>
    </div>
  );
}
