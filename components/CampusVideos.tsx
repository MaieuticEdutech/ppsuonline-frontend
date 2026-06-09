"use client";

import React from "react";

const SIDE_VIDS = [
  { id: "GppyXVVyZ7Y", title: "PPSU Campus Tour"   },
  { id: "HPbqow9TqYw", title: "PPSU Events"         },
];

const MAIN_VID  = { id: "17ExHIy2jXU",  title: "PPSU Featured"   };

const SIDE_VIDS_RIGHT = [
  { id: "JFINaP-gJQ0", title: "PPSU Placements"    },
  { id: "_1-TbTekKFo", title: "Student Life"        },
];

function YTEmbed({ id, title }: { id: string; title: string }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full block"
    />
  );
}

export default function CampusVideos() {
  return (
    <section id="videos" className="sec sec-darker">
      <div className="wrap">

        {/* heading */}
        <div className="text-center mb-9">
          <div
            className="sec-label"
            style={{ background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.45)" }}
          >
            Campus Videos
          </div>
          <h2 className="text-[clamp(22px,3vw,36px)] font-bold text-white">
            Campus <span style={{ color: "#F15A29" }}>Life Videos</span>
          </h2>
        </div>

        {/* 3-col video grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-4 items-stretch">

          {/* left column */}
          <div className="flex flex-col gap-4">
            {SIDE_VIDS.map((v) => (
              <div key={v.id} className="rounded-[12px] overflow-hidden flex-1"
                   style={{ background: "#1f2937", aspectRatio: "16/9" }}>
                <YTEmbed {...v} />
              </div>
            ))}
          </div>

          {/* centre — featured */}
          <div className="rounded-[12px] overflow-hidden" style={{ background: "#1f2937" }}>
            <div style={{ aspectRatio: "16/9" }}>
              <YTEmbed {...MAIN_VID} />
            </div>
          </div>

          {/* right column */}
          <div className="flex flex-col gap-4">
            {SIDE_VIDS_RIGHT.map((v) => (
              <div key={v.id} className="rounded-[12px] overflow-hidden flex-1"
                   style={{ background: "#1f2937", aspectRatio: "16/9" }}>
                <YTEmbed {...v} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
