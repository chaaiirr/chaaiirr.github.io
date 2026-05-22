import { useTheme, FadeUp, Eyebrow, CTAButton } from "../components/shared"
import { Link } from "react-router-dom"

export default function NovelPage() {
  const { C } = useTheme()
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 32px", backdropFilter: "blur(12px)", backgroundColor: C.navBg, borderBottom: `1px solid ${C.border}` }}>
        <Link to="/" style={{ fontFamily: "Arial, sans-serif", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: C.muted, textDecoration: "none" }}>← Back</Link>
      </div>

      <div style={{ width: "100%", height: "55vh", overflow: "hidden", background: C.surface, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="/novel-placeholder.svg" alt="NovelSummariser" style={{ height: "55%", opacity: 0.9 }} />
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 40px 100px" }}>
        <FadeUp>
          <Eyebrow>NLP · Digital Humanities · SUTD · 2026</Eyebrow>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: C.text, margin: "0 0 12px", lineHeight: 1.2 }}>NovelSummariser</h1>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 16, color: C.muted, margin: "0 0 48px" }}>Optimisation-assisted literary text summarisation</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>The Project</h2>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 12 }}>
              NovelSummariser is a web-based tool that generates structured, chapter-level summaries of long literary texts — built for digital humanities research and academic text analysis workflows.
            </p>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              Rather than naive extractive summarisation, the tool applies optimisation techniques to intelligently select the most representative passages, preserving narrative structure and thematic content across chapters. Built as an interdisciplinary project applying operations research methods to the humanities.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 40, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 16 }}>Technical</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Backend", val: "Julia — leveraging optimisation libraries for passage selection" },
                { label: "Method", val: "Optimisation-assisted extractive summarisation with chapter-level structure preservation" },
                { label: "Interface", val: "Web interface for text upload and structured summary display" },
                { label: "Use case", val: "Digital humanities research, academic text analysis, literary study aids" },
              ].map(({ label, val }) => (
                <div key={label} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", color: C.primary, minWidth: 90, paddingTop: 2 }}>{label}</div>
                  <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
          <CTAButton href="https://github.com/chaaiirr/NovelSummariser" filled>View on GitHub ↗</CTAButton>
        </FadeUp>
      </div>
    </div>
  )
}
