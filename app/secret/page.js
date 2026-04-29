"use client";

import { useEffect } from "react";

export default function Secret() {
  useEffect(() => {
    document.body.style.backgroundColor = "#07070c";
  }, []);

  const videos = [
    "https://raw.githubusercontent.com/LJere23/Anniversary-Project/main/public/videos/v1.mp4",
    "https://raw.githubusercontent.com/LJere23/Anniversary-Project/main/public/videos/v2.mp4",
    "https://raw.githubusercontent.com/LJere23/Anniversary-Project/main/public/videos/v3.mp4"
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        backgroundColor: "#07070c",
        overflow: "hidden"
      }}
    >

      {/* 🎞️ CINEMATIC VIDEO STRIP */}
      <div
        className="videoStrip"
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          overflow: "hidden",
          position: "relative"
        }}
      >
        {videos.map((vid, i) => (
          <video
            key={i}
            src={vid}
            autoPlay
            muted
            loop
            playsInline
            className="cinematicVideo"
            style={{
              flex: 1,
              width: "33.33%",
              objectFit: "cover",
              objectPosition: "center 25%",
              opacity: i === 1 ? 0.78 : 0.62,
              filter: "brightness(0.92) contrast(1.05)"
            }}
          />
        ))}

        {/* 🎬 CINEMATIC FADE */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.12), rgba(7,7,12,1))",
            pointerEvents: "none"
          }}
        />
      </div>

      {/* 💌 LETTER CONTENT */}
      <div
        className="fadeIn"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px 100px"
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            lineHeight: "2"
          }}
        >
          <p
            style={{
              opacity: 0.55,
              letterSpacing: "6px",
              marginBottom: "24px",
              fontSize: "0.85rem"
            }}
          >
            FOR YOU
          </p>

          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "36px",
              lineHeight: 1.1,
              fontWeight: "600"
            }}
          >
            A Quiet Truth
          </h1>

          <p style={{ marginBottom: "24px", opacity: 0.94 }}>
            I don’t know if I ever say it enough, but you matter to me in ways I can’t always explain properly.
          </p>

          <p style={{ marginBottom: "24px", opacity: 0.94 }}>
            Not just in the big moments, but in the small ones too — the ones no one else notices, but I do.
          </p>

          <p style={{ marginBottom: "24px", opacity: 0.94 }}>
            This past year has genuinely been one of the happiest periods of my life. Having you beside me through the highs, the lows, the tunnels, and the light at the end of them made everything feel easier to carry.
          </p>

          <p style={{ marginBottom: "24px", opacity: 0.94 }}>
            You’ve become part of my life in a way that feels natural now. Like something I didn’t have to force or chase. I truly appreciate having you in my life, and honestly, I wouldn’t want it any other way.
          </p>

          <p style={{ marginBottom: "40px", opacity: 0.94 }}>
            If there’s one thing I want you to remember from all of this, it’s simple:
          </p>

          <h2
            className="glow"
            style={{
              fontSize: "2rem",
              marginBottom: "48px",
              color: "#d4af37",
              fontWeight: "600"
            }}
          >
            I love you.
            Always and Forever.
          </h2>

          <p
            style={{
              opacity: 0.5,
              fontSize: "0.95rem",
              letterSpacing: "1px"
            }}
          >
            — from every version of me that ever met you
          </p>
        </div>
      </div>

      {/* ✨ STYLES */}
      <style jsx>{`
        .fadeIn {
          animation: fadeUp 1.8s ease;
        }

        .cinematicVideo {
          animation: floatMotion 10s ease-in-out infinite alternate;
          will-change: transform;
        }

        .glow {
          text-shadow: 0 0 18px rgba(212, 175, 55, 0.35);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatMotion {
          from {
            transform: scale(1.01) translateY(0px);
          }

          to {
            transform: scale(1.015) translateY(-4px);
          }
        }

        @media (max-width: 768px) {
          .videoStrip {
            height: 65vh !important;
          }

          h1 {
            font-size: 2.2rem !important;
          }

          h2 {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </div>
  );
}