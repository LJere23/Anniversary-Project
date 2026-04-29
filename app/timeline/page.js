"use client";

import Link from "next/link";
import { useEffect } from "react";

const memories = [
  {
    title: "Before We Knew",
    date: "Chapter 01",
    image: "/images/m1.jpg",
    story:
      "Somehow, even before everything truly began, life was already quietly moving us toward each other. Back then, we were just friends — laughing, talking, existing in moments that seemed ordinary at the time. But with every passing day, I found myself drawn closer to you in ways I didn’t fully understand yet. Looking back now, maybe some part of my heart already knew what my mind hadn’t caught up to."
  },
  {
    title: "The First Time You Felt Different",
    date: "Chapter 02",
    image: "/images/m2.jpg",
    story:
      "Some moments arrive softly, almost unnoticed, until time reveals how much they changed you. This was one of them. The moment butterflies woke up inside me and rolled through my chest like an untamed storm. I didn’t have the words for it then, but I do now: this was the first domino. The quiet beginning of something that would eventually mean everything."
  },
  {
    title: "The Conversations That Lasted Too Long",
    date: "Chapter 03",
    image: "/images/m3.jpg",
    story:
      "We kept finding reasons to stay a little longer in each other’s world. You looked absolutely stunning that day, the kind of beauty that quietly steals every bit of attention in the room. The smile you gave me became one of those moments my mind still replays without warning."
  },
  {
    title: "The Random Day That Meant Everything",
    date: "Chapter 04",
    image: "/images/m4.jpg",
    story:
      "Nothing extraordinary happened that day, yet I remember it in detail. We went to a new Chinese place to try dumplings, and it turned into an unexpectedly amazing experience. There’s nothing like food hunting with the love of my life. It was just us, a meal, and a moment that somehow stayed with me long after the day ended."
  },
  {
    title: "Our Laughing Era",
    date: "Chapter 05",
    image: "/images/m5.jpg",
    story:
      "Some memories survive simply because we laughed too hard to forget them. Every week, every month, I look forward to our dates more than I probably say — they keep me going. With you, even the simplest moments turn into something I carry with me long after."
  },
  {
    title: "The Day You Met My Family",
    date: "Chapter 06",
    image: "/images/m6.jpg",
    story:
      "A day I won’t forget. You were nervous at first, and I could tell — but you carried yourself so well. It was a special, slightly quirky moment, watching two worlds quietly meet. And somehow, it went better than either of us expected. A day that meant more than it probably looked like from the outside. The day my two worlds collided."
  },
  {
    title: "The Day I Met Your Family",
    date: "Chapter 07",
    image: "/images/m1.jpg",
    story:
      "We went to our usual date spot, but this time it felt a little different. I officially met your family, and it turned into a really good moment - relaxed, natural, and full of laughter. It made me think about how easy it all felt, like I was already meant to be there."
  },
  {
    title: "When You Became Home",
    date: "Chapter 08",
    image: "/images/m8.jpg",
    story:
      "Somewhere along the way, being with you stopped feeling like a moment and started feeling like peace. Not loud or dramatic just steady, natural, and right. With you, I don’t just feel happy… I feel at home."
  },
  {
    title: "The Version of Me You Helped Create",
    date: "Chapter 09",
    image: "/images/m9.jpg",
    story:
      "You changed parts of me without ever asking for anything in return. With you, I’ve found myself wanting to be better — a provider, a protector, and a lover🤭. Someone steady. Someone worthy. I just want to be everything you need, in the ways that matter most."
  },
  {
    title: "...🥱",
    date: "Chapter 10",
    image: "/images/m10.jpg",
    story:
      "I refused a picture… and this was the reaction. The love of my life, ladies and gentlemen."
  },
  {
    title: "Still Choosing You",
    date: "Chapter 11",
    image: "/images/m11.jpg",
    story:
      "A special night that felt like a reminder of everything we’ve built. In every moment, in every memory, I find myself choosing you again and again. Not out of habit, but out of certainty — because it just feels right with you."
  },
  {
    title: "All The Versions of You",
    date: "Chapter 12",
    image: "/images/m12.jpg",
    story:
      "Every version of you feels unforgettable in its own way. The soft, cute moments that make my heart melt, the ethereal glow that makes you look almost unreal, and the goofy side-eyes that somehow make me love you even more. Every side of you feels like its own kind of beautiful, and I honestly wouldn’t change a single one."
  },
  {
    title: "My Favorite Place Became You",
    date: "Chapter 13",
    image: "/images/m13.jpg",
    story:
      "Somewhere along the way, I stopped looking for comfort in places and started finding it in you. And now, no matter where I am, if I have you, I’m exactly where I need to be."
  },
  {
    title: "If I Could Pause Time",
    date: "Chapter 14",
    image: "/images/m14.jpg",
    story:
      "In that moment, it felt like everything else disappeared. Just us, quietly locked in a look I wish I could keep forever. Some moments don’t need anything else — they just need to last longer."
  },
  {
    title: "And I’d Choose You Again",
    date: "Final Chapter",
    image: "/images/m15.jpg",
    story:
      "Just us, frozen in a moment that says everything words can’t."
  }
];

export default function Timeline() {
  useEffect(() => {
    const scenes = document.querySelectorAll(".scene");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    scenes.forEach((scene) => observer.observe(scene));
  }, []);

  return (
    <div style={{ backgroundColor: "#0b0b10", color: "white" }}>

      {/* NAV */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 1000
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.35)",
            padding: "12px 24px",
            borderRadius: "40px",
            backdropFilter: "blur(10px)",
            display: "flex",
            gap: "20px"
          }}
        >
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>

          <Link href="/secret" style={{ color: "#d4af37", textDecoration: "none" }}>
            For You
          </Link>
        </div>
      </div>

      {/* PROLOGUE */}

      <section

        style={{

          minHeight: "100vh",
          display: "flex",

          flexDirection: "column",

          justifyContent: "center",

          alignItems: "center",

          textAlign: "center",

          padding: "0 20px"

        }}

      >

        <p style={{ opacity: 0.5, letterSpacing: "6px", marginBottom: "20px" }}>

          BEFORE IT ALL

        </p>

        <h1 style={{ fontSize: "2.8rem", marginBottom: "20px" }}>

          Some stories don’t start at the beginning

        </h1>

        <p style={{ maxWidth: "600px", opacity: 0.8, lineHeight: 1.8 }}>

          They start quietly… without you even realizing it.

        </p>

        <p style={{ marginTop: "40px", opacity: 0.4, fontSize: "0.9rem" }}>

          scroll to begin

        </p>

      </section>

      {/* SCENES */}
      {memories.map((m, i) => (
        <section
          key={i}
          className="scene"
          style={{
            minHeight: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
            padding: "120px 10%",
            flexWrap: "wrap",
            overflow: "hidden"
          }}
        >

          {/* IMAGE */}
          <div
            className="imageBox"
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
              position: "relative"
            }}
          >
            <img
              src={m.image}
              alt={m.title}
              style={{
                width: "100%",
                maxWidth: "450px",
                maxHeight: "80vh",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
              }}
            />

            {/* CINEMATIC OVERLAY */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, rgba(0,0,0,0), rgba(0,0,0,0.35))",
                borderRadius: "20px",
                pointerEvents: "none"
              }}
            />
          </div>

          {/* TEXT */}
          <div
            className="content"
            style={{
              flex: "1",
              minWidth: "300px",
              maxWidth: "500px"
            }}
          >
            <p
              style={{
                letterSpacing: "4px",
                textTransform: "uppercase",
                opacity: 0.6,
                marginBottom: "10px"
              }}
            >
              {m.date}
            </p>

            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
                lineHeight: 1.1
              }}
            >
              {m.title}
            </h1>

            <p
              style={{
                lineHeight: 1.9,
                opacity: 0.85,
                fontSize: "1.05rem"
              }}
            >
              {m.story}
            </p>
          </div>
        </section>
      ))}

      {/* ANIMATION */}
      <style jsx>{`
        .scene .content,
        .scene .imageBox {
          opacity: 0;
          transform: translateY(35px);
          transition: all 1.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scene.visible .content,
        .scene.visible .imageBox {
          opacity: 1;
          transform: translateY(0);
        }

        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 768px) {
          .scene {
            flex-direction: column !important;
            text-align: center;
          }

          .scene h1 {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </div>
  );
}