import { useTheme, FadeUp, Eyebrow } from "../components/shared"
import { Link } from "react-router-dom"

export default function BOAPage() {
  const { C } = useTheme()
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 32px", backdropFilter: "blur(12px)", backgroundColor: C.navBg, borderBottom: `1px solid ${C.border}` }}>
        <Link to="/" style={{ fontFamily: "Arial, sans-serif", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: C.muted, textDecoration: "none" }}>← Back</Link>
      </div>

      {/* Hero — styled dark placeholder */}
      <div style={{ width: "100%", height: "55vh", overflow: "hidden", background: "#1A1A18", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="/boa-placeholder.svg" alt="Project BOA" style={{ height: "60%", opacity: 0.9 }} />
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 40px 100px" }}>
        <FadeUp>
          <Eyebrow>Robotics · Entrepreneurship · SUTD ROAR Labs · Jan–Aug 2025</Eyebrow>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: C.text, margin: "0 0 12px", lineHeight: 1.2 }}>Project BOA — Autonomous Fumigation Robot</h1>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 16, color: C.muted, margin: "0 0 48px" }}>SUTD ROAR Labs · Baby Shark Fund S$6,000 · Fee Fi Fumigation</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>The Project</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              Project BOA is a grant-funded autonomous fumigation robot developed under SUTD ROAR Labs. Targeting the Singapore pest control industry, the prototype is designed to autonomously navigate and fumigate spaces — reducing the need for manual, chemical-intensive pest control operations and aligning with NEA public health and safety requirements.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>My Role — Business & Regulatory Strategy</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 12 }}>
              I led the business model design and regulatory strategy for the project. This included mapping the product to NEA public health requirements, identifying viable go-to-market pathways, and defining the regulatory constraints that the autonomous system needed to satisfy before pilot deployment.
            </p>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              I conducted a live demonstration with NinjaPestControl, initiating discussions for an NEA-supervised pilot deployment — a key milestone for proving regulatory viability in Singapore's pest management market.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 24 }}>Recognition</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { award: "SUTD Baby Shark Fund", detail: "Awarded S$6,000 (Mar–Sep 2025) via SUTD's micro-innovation platform to develop the autonomous fumigation prototype." },
                { award: "Deep Dive Singapore — 1st Place", detail: "Won the Deep-tech Commercialisation Challenge (Jan 2025), validating the commercial potential of BOA in the Singapore market." },
                { award: "Deep Dive Finland — Quarter-Finalist", detail: "Reached the international quarter-finals at Aalto University, Helsinki (Apr 2025) — one of the top deep-tech student teams globally." },
              ].map(({ award, detail }) => (
                <div key={award} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "18px 20px" }}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 6 }}>{award}</div>
                  <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}
