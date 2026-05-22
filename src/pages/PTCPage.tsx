import { useTheme, FadeUp, Eyebrow, CTAButton } from "../components/shared"
import { Link } from "react-router-dom"

export default function PTCPage() {
  const { C } = useTheme()
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      {/* Back nav */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 32px", backdropFilter: "blur(12px)", backgroundColor: C.navBg, borderBottom: `1px solid ${C.border}` }}>
        <Link to="/" style={{ fontFamily: "Arial, sans-serif", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: C.muted, textDecoration: "none" }}>← Back</Link>
      </div>

      {/* Hero image */}
      <div style={{ width: "100%", height: "55vh", overflow: "hidden", marginTop: 0 }}>
        <img src="/ptc-optimiser.png" alt="PTC YardOptimiser" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 40px 100px" }}>
        <FadeUp>
          <Eyebrow>Data Analytics · Operations Research · SUTD · Feb–Apr 2026</Eyebrow>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: C.text, margin: "0 0 12px", lineHeight: 1.2 }}>Optimising Container Yard Operations</h1>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 16, color: C.muted, margin: "0 0 48px" }}>Poh Tiong Choon Logistics · SUTD Data & Business Analytics</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>The Problem</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              Poh Tiong Choon Logistics manages over 205,000 containers across 5 yards in Singapore. Of these, 23.8% are reshifted — moved multiple times before departure. Each unnecessary reshift increases operational costs, delays yard throughput, and strains equipment. The root cause: poor slot allocation decisions made without data.
            </p>
          </div>
        </FadeUp>

        {/* Key Stats */}
        <FadeUp delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
            {[
              { val: "28,978", label: "Total containers analysed" },
              { val: "7 days", label: "Average dwell time" },
              { val: "21", label: "Max shift count" },
            ].map(({ val, label }) => (
              <div key={label} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "20px 16px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Arial Black', sans-serif", fontSize: 28, fontWeight: 900, color: C.accent, marginBottom: 6 }}>{val}</div>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", color: C.muted }}>{label}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>Methodology</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { step: "01", title: "Data Cleaning", desc: "Consolidated 250,000+ rows across 3 sources (location records, container movements, yard shifts) using Power Query, merging on primary–foreign key relationships." },
                { step: "02", title: "Exploratory Analysis", desc: "Identified patterns in dwell time, reshifting frequency, and congestion hotspots. Created derived features: Dwell Time = Exit − Entry, Shift Count = number of reshifts per container." },
                { step: "03", title: "Regression Model", desc: "Applied Linear Regression in R to identify key drivers of reshifting. Found that ETA, stacking tier, and customer proximity were the strongest predictors." },
                { step: "04", title: "ILP Optimiser", desc: "Built an Integer Linear Programming model to determine optimal slot assignment for incoming containers, minimising predicted shift count across feasible slots." },
                { step: "05", title: "Power BI Dashboard", desc: "Deployed the slot recommender as an overlay on an interactive Power BI dashboard. Operators input container details; the model outputs the optimal slot in real-time." },
              ].map(({ step, title, desc }) => (
                <div key={step} style={{ display: "flex", gap: 16 }}>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 10, color: C.primary, fontWeight: 700, minWidth: 24, paddingTop: 2 }}>{step}</div>
                  <div>
                    <div style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Poster */}
        <FadeUp delay={0.25}>
          <div style={{ marginBottom: 40, borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}` }}>
            <img src="/ptc-poster.jpg" alt="DBA Research Poster" style={{ width: "100%", display: "block" }} />
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>Outcome</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              The ILP model converts historical patterns into actionable slot recommendations. Integrated directly into the Power BI dashboard, it gives operators a single interface to view yard analytics and run slot allocation decisions — reducing dependence on heuristic and experience-based placement.
            </p>
          </div>
          <CTAButton href="https://github.com/chaaiirr/YardOptimiser" filled>View on GitHub ↗</CTAButton>
        </FadeUp>
      </div>
    </div>
  )
}
