import { useTheme, FadeUp, Eyebrow, CTAButton } from "../components/shared"
import { Link } from "react-router-dom"

export default function DXBPage() {
  const { C } = useTheme()
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 32px", backdropFilter: "blur(12px)", backgroundColor: C.navBg, borderBottom: `1px solid ${C.border}` }}>
        <Link to="/" style={{ fontFamily: "Arial, sans-serif", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: C.muted, textDecoration: "none" }}>← Back</Link>
      </div>

      <div style={{ width: "100%", height: "55vh", overflow: "hidden" }}>
        <img src="/dxb-poster.jpg" alt="DXB Crisis MILP" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 40px 100px" }}>
        <FadeUp>
          <Eyebrow>Operations Research · Optimisation · SUTD · 2026</Eyebrow>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: C.text, margin: "0 0 12px", lineHeight: 1.2 }}>Flight Re-routing During the Dubai Airspace Crisis</h1>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 16, color: C.muted, margin: "0 0 48px" }}>MILP optimisation in Julia/HiGHS · Team 5</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>The Scenario</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              Following a February 2026 crisis that shut down Dubai International Airport (DXB), over 1,000 daily flights needed re-routing across a simulated 7-day disruption and recovery horizon. Airports Al Maktoum (DWC) and Zayed International (AUH) absorbed diverted traffic under constrained runway and horizon capacity. The challenge: allocate thousands of time-dependent flight slots to minimise system cost while respecting fuel safety constraints and protecting high-priority flights.
            </p>
          </div>
        </FadeUp>

        {/* Key Stats */}
        <FadeUp delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
            {[
              { val: "139", label: "Flights rerouted from DXB" },
              { val: "66.2%", label: "On time among rerouted" },
              { val: "0", label: "Emergency cancellations" },
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
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>The Model</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 16 }}>
              We developed a time-dependent Mixed-Integer Linear Program (MILP) in Julia using HiGHS as the solver. Each flight is assigned to an airport and time slot, or declared cancelled ("crashed"). The model enforces:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Per-slot runway capacity — no airport exceeds runway throughput at any slot",
                "Horizon capacity — total flights at an airport over remaining days cannot exceed available capacity",
                "Fuel safety (soft constraint) — flights must land with ≥30 min reserve fuel",
                "Priority protection — hub carrier flights penalised less for displacement than partner airlines",
              ].map((c) => (
                <div key={c} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.primary, marginTop: 6, flexShrink: 0 }} />
                  <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{c}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, marginTop: 16 }}>
              Results were visualised with Python and an interactive Leaflet.js map showing DXB→DWC/AUH routing across all 7 days.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 48 }}>
            {[
              { val: "47", label: "Flights displaced" },
              { val: "22", label: "Fuel violations (soft)" },
              { val: "4,840+", label: "Daily flights reallocated over 7 days" },
              { val: "94.4%", label: "Zero displacement rate" },
            ].map(({ val, label }) => (
              <div key={label} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "16px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Arial Black', sans-serif", fontSize: 22, fontWeight: 900, color: C.primary, marginBottom: 4 }}>{val}</div>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", color: C.muted }}>{label}</div>
              </div>
            ))}
          </div>
          <CTAButton href="https://github.com/chaaiirr/dxb-crisis-milp" filled>View on GitHub ↗</CTAButton>
        </FadeUp>
      </div>
    </div>
  )
}
