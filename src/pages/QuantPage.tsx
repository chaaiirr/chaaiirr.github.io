import { useTheme, FadeUp, Eyebrow, CTAButton } from "../components/shared"
import { Link } from "react-router-dom"

export default function QuantPage() {
  const { C } = useTheme()
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 32px", backdropFilter: "blur(12px)", backgroundColor: C.navBg, borderBottom: `1px solid ${C.border}` }}>
        <Link to="/" style={{ fontFamily: "Arial, sans-serif", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: C.muted, textDecoration: "none" }}>← Back</Link>
      </div>

      <div style={{ width: "100%", height: "55vh", overflow: "hidden", background: C.surface, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="/quant-placeholder.svg" alt="Quant & Stock Analyser" style={{ height: "55%", opacity: 0.9 }} />
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 40px 100px" }}>
        <FadeUp>
          <Eyebrow>Finance · Python · Personal Project · 2026</Eyebrow>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: C.text, margin: "0 0 12px", lineHeight: 1.2 }}>Quant & Stock Analyser</h1>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 16, color: C.muted, margin: "0 0 48px" }}>Python-based quantitative financial analysis tools</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>The Project</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              Two Python tools for personal investment research and quantitative financial analysis. Built to apply the analytical and modelling skills developed across coursework and projects to real financial data.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "20px 24px" }}>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: C.primary, marginBottom: 8 }}>Quantitative Analyser</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>quant-analyser</div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, margin: "0 0 16px" }}>
                  Quantitative signal analysis pipeline built in Python. Processes market data to identify statistical patterns and signals for investment research.
                </p>
                <CTAButton href="https://github.com/chaaiirr/quant-analyser" filled={false}>View on GitHub ↗</CTAButton>
              </div>

              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "20px 24px" }}>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: C.primary, marginBottom: 8 }}>Stock Analyser</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>stock-analyser</div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, margin: "0 0 16px" }}>
                  Stock data pipeline and analysis tool. Fetches, cleans, and analyses equity data for fundamental and technical research.
                </p>
                <CTAButton href="https://github.com/chaaiirr/stock-analyser" filled={false}>View on GitHub ↗</CTAButton>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}
