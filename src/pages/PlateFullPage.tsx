import { useTheme, FadeUp, Eyebrow, CTAButton } from "../components/shared"
import { Link } from "react-router-dom"

export default function PlateFullPage() {
  const { C } = useTheme()
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 32px", backdropFilter: "blur(12px)", backgroundColor: C.navBg, borderBottom: `1px solid ${C.border}` }}>
        <Link to="/" style={{ fontFamily: "Arial, sans-serif", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: C.muted, textDecoration: "none" }}>← Back</Link>
      </div>

      <div style={{ width: "100%", height: "55vh", overflow: "hidden" }}>
        <img src="/platefull-plate.jpg" alt="PlateFull" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 40px 100px" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <Eyebrow style={{ marginBottom: 0 }}>Startups · Product Design · Singapore · Apr–Aug 2026</Eyebrow>
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", background: C.accent, color: "#111", padding: "3px 10px", borderRadius: 20, fontWeight: 700 }}>Launching Soon</span>
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: C.text, margin: "0 0 12px", lineHeight: 1.2 }}>PlateFull — Meal Planning for Asian Families</h1>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 16, color: C.muted, margin: "0 0 48px" }}>SUTD Baby Shark Fund · S$2,000 · Singapore & Malaysia</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>The Problem</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 12 }}>
              Families spend 30–45 minutes every week planning meals — manually cross-referencing preferences, dietary restrictions, who's home each night, and what's in the fridge. Existing apps treat food as a solo activity with no household coordination. Worse, Western-focused tools like MyFitnessPal have notoriously inaccurate data for Asian dishes like nasi lemak, laksa, and bak kut teh.
            </p>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              For Singapore and Malaysia households — where food is deeply cultural and multi-person — there's no credible tool built for them.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>The Solution</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 24 }}>
              PlateFull is a closed-loop food decision platform built around a weekly planning workflow: <strong>Track → Analyse → Recommend → Execute.</strong> It turns a 45-minute session into under 5 minutes.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "🍽", title: "Family Profiles", desc: "Hard constraints (allergies, halal, medical) are never violated. Soft preferences (cuisine, cook time) are ranked and traded off. Multi-member households managed in one place." },
                { icon: "📅", title: "Weekly Meal Plan", desc: "Confirms who's home each night before generating a nutritionist-vetted 7-meal plan compatible with all active household members." },
                { icon: "🌏", title: "Asian Cuisine Focus", desc: "Accurate macro data for local dishes. Built for Singapore and Malaysia households — nasi lemak, roti prata, and everything in between." },
                { icon: "🧊", title: "Fridge Scanner & Grocery Tracker", desc: "Scans what you have, tracks what you need, and integrates with the weekly plan so nothing goes to waste." },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: 16, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "16px 20px" }}>
                  <div style={{ fontSize: 20 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Menu card image */}
        <FadeUp delay={0.2}>
          <div style={{ marginBottom: 40, borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}` }}>
            <img src="/platefull-menu.jpg" alt="PlateFull Menu Launch" style={{ width: "100%", display: "block" }} />
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>Funding & Status</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              Awarded S$2,000 from the SUTD Baby Shark Fund (Apr–Aug 2026) to develop the pre-MVP. Currently in early-stage development, targeting the Singapore household market. Launching soon.
            </p>
          </div>
          <CTAButton href="https://github.com/chaaiirr/PlateFullApp" filled>View on GitHub ↗</CTAButton>
        </FadeUp>
      </div>
    </div>
  )
}
