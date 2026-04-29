import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f0f14",
      color: "#f5f5f5",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "40px"
    }}>
      
      <h1 style={{ fontSize: "3.5rem", letterSpacing: "2px" }}>
        The Atlas of Us
      </h1>

      <p style={{ marginTop: "15px", opacity: 0.7, maxWidth: "500px" }}>
        A collection of moments that quietly became everything — not because they were perfect,
        but because they were...
      </p>
      <h2
            className="glow"
            style={{
              fontSize: "2rem",
              marginBottom: "48px",
              color: "#d4af37",
              fontWeight: "600",
              textShadow: "0 0 8px rgba(212, 175, 55, 0.5), 0 0 18px rgba(212, 175, 55, 0.4), 0 0 32px rgba(212, 175, 55, 0.25)"
            }}
          >
            OURS
          </h2>

      <div style={{ marginTop: "40px" }}>
        <Link href="/timeline" style={{
          padding: "12px 20px",
          backgroundColor: "#d4af37",
          color: "#000",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Enter Our Story
        </Link>
      </div>

    </div>
  );
}