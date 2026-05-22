import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Routes, Route, Link } from "react-router-dom"
import { ShaderAnimation } from "./ShaderAnimation"
import { Scroller } from "@/components/ui/scroller-1"
import {
  LIGHT, DARK, ThemeContext, useTheme,
  BlurText, FadeUp, Eyebrow, SkillPill, CTAButton, AchievementCard,
  type Achievement,
} from "./components/shared"
import PTCPage from "./pages/PTCPage"
import DXBPage from "./pages/DXBPage"
import PlateFullPage from "./pages/PlateFullPage"
import BOAPage from "./pages/BOAPage"
import NovelPage from "./pages/NovelPage"
import QuantPage from "./pages/QuantPage"

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PHOTO_URL = "/sheil.jpg"

const PROJECTS = [
  { id: "ptc", category: "Data Analytics · Operations Research", title: "PTC YardOptimiser", subtitle: "Poh Tiong Choon Logistics · SUTD", image: "/ptc-optimiser.png", link: "/projects/ptc" },
  { id: "dxb", category: "Operations Research · Optimisation", title: "DXB Crisis MILP", subtitle: "Flight Re-routing During Dubai Airspace Crisis", image: "/dxb-poster.jpg", link: "/projects/dxb" },
  { id: "platefull", category: "Startups · Product Design", title: "PlateFull", subtitle: "Meal Planning for Asian Families", image: "/platefull-plate.jpg", link: "/projects/platefull" },
  { id: "boa", category: "Robotics · Entrepreneurship", title: "Project BOA", subtitle: "SUTD ROAR Labs · Fee Fi Fumigation", image: "/boa-placeholder.svg", link: "/projects/boa" },
  { id: "novel", category: "NLP · Digital Humanities", title: "NovelSummariser", subtitle: "Optimisation-assisted literary summarisation", image: "/novel-placeholder.svg", link: "/projects/novel" },
  { id: "quant", category: "Finance · Python", title: "Quant & Stock Analyser", subtitle: "Python quantitative analysis tools", image: "/quant-placeholder.svg", link: "/projects/quant" },
]

const SKILLS = ["Python", "R", "Julia", "SQL", "Power BI", "Excel", "Git", "Regression Modeling", "ILP", "MediaPipe"]

const EXPERIENCE = [
  { role: "Project & VJ Intern", org: "EnjoyMusic (AI Startup)", years: "Nov–Dec 2025" },
  { role: "Information Security Intern", org: "Singapore Airlines", years: "Sep 2021–Feb 2022" },
  { role: "Exchange Programme", org: "Zhejiang University", years: "Sep–Dec 2025" },
  { role: "Cohort Class Exco", org: "SUTD", years: "2024–present" },
  { role: "Touch Rugby Club Secretary", org: "SUTD", years: "Jan 2025–Jan 2026" },
]

const ACHIEVEMENTS: Achievement[] = [
  { title: "Baby Shark Fund Awardee", detail: "S$6,000 · Project BOA — autonomous fumigation robot", year: "Mar–Sep 2025" },
  { title: "Baby Shark Fund Awardee", detail: "S$2,000 · PlateFull — meal planning for Asian families", year: "Apr–Aug 2026" },
  { title: "Deep Dive Singapore Winner", detail: "1st Place · Deep-tech Commercialisation Challenge", year: "Jan 2025" },
  { title: "Deep Dive Finland Finalist", detail: "International Quarter-Finalist · Aalto University, Helsinki", year: "Apr 2025" },
  { title: "DSTA BrainHack Bronze", detail: "Singapore Polytechnic", year: "2019" },
]

const NAV_LINKS = ["HOME", "ABOUT", "PROJECTS", "EXPERIENCE", "ACHIEVEMENTS", "CONTACT"]

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const { C, dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", backdropFilter: "blur(12px)", backgroundColor: C.navBg, borderBottom: `1px solid ${C.border}` }}>
        <button
          onClick={() => setOpen(true)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 4 }}
          aria-label="Open menu"
        >
          {[22, 22, 14].map((w, i) => (
            <div key={i} style={{ width: w, height: 2, borderRadius: 2, backgroundColor: C.muted }} />
          ))}
        </button>

        <motion.div
          onClick={toggle}
          animate={{ backgroundColor: dark ? C.accent : "#ddd" }}
          transition={{ duration: 0.3 }}
          style={{ width: 44, height: 24, borderRadius: 12, position: "relative", cursor: "pointer", flexShrink: 0 }}
          aria-label="Toggle dark mode"
        >
          <motion.div
            animate={{ left: dark ? 23 : 3 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{ width: 18, height: 18, background: dark ? "#111" : "#fff", borderRadius: "50%", position: "absolute", top: 3, boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", zIndex: 200 }} />
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              style={{ position: "fixed", top: 0, left: 0, bottom: 0, width: 280, background: C.surface, zIndex: 300, padding: "48px 40px", display: "flex", flexDirection: "column", gap: 32 }}
            >
              <button onClick={() => setOpen(false)} style={{ alignSelf: "flex-end", background: "none", border: "none", fontSize: 20, cursor: "pointer", color: C.muted, lineHeight: 1 }} aria-label="Close menu">×</button>
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    setOpen(false)
                    setTimeout(() => {
                      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                    }, 300)
                  }}
                  style={{ fontFamily: "Arial, sans-serif", fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: C.text, textDecoration: "none", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
                >
                  {link}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { C } = useTheme()
  const [bounce, setBounce] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setBounce((b) => !b), 1200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 80, paddingBottom: 40, position: "relative" }}>
      <ShaderAnimation />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
          style={{ width: 110, height: 150, borderRadius: 9999, overflow: "hidden", border: `3px solid ${C.bg}`, boxShadow: "0 8px 32px rgba(0,0,0,0.18)", marginBottom: 28 }}
        >
          <img src={PHOTO_URL} alt="Sheil" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }} />
        </motion.div>

        <h1 style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif", fontWeight: 900, fontSize: "clamp(64px, 14vw, 148px)", color: C.accent, letterSpacing: "-4px", lineHeight: 0.9, textTransform: "uppercase", userSelect: "none", margin: 0, textAlign: "center" }}>
          <BlurText text="SHEIL" />
        </h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} style={{ marginTop: 36, fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 15, color: C.muted, letterSpacing: "0.3px", textAlign: "center" }}>
          Systems-led. Data-driven.
        </motion.p>

        <motion.div animate={{ y: bounce ? 6 : 0 }} transition={{ duration: 0.6, ease: "easeInOut" }} style={{ marginTop: 20, color: C.placeholder, fontSize: 22, lineHeight: 1 }}>
          ⌄
        </motion.div>
      </div>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  const { C } = useTheme()
  return (
    <section id="about" style={{ background: C.surface, padding: "80px 40px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <FadeUp>
          <div>
            <Eyebrow>About</Eyebrow>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: C.text, margin: "0 0 16px", lineHeight: 1.4 }}>From security labs to satellite routes — always building.</h2>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: C.muted, lineHeight: 1.8, margin: "0 0 12px" }}>
              Engineering Systems & Design undergrad at SUTD (GPA 4.66) · Exchange at Zhejiang University · Diploma in Infocomm Security from Singapore Polytechnic.
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: C.muted, lineHeight: 1.8, margin: "0 0 12px" }}>
              Interned at EnjoyMusic in Hangzhou prototyping MediaPipe pose systems and directing AI-generated stage visuals for Tomorrowland Shanghai, and at Singapore Airlines in information security. I build across data analytics, operations research, and early-stage startups.
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: C.muted, lineHeight: 1.8, margin: 0 }}>
              Deep Dive Singapore winner · Baby Shark Fund awardee × 2 · Cohort Class Exco · SUTD Touch Rugby Club Secretary
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div style={{ width: "66%", aspectRatio: "3 / 4", borderRadius: 16, overflow: "hidden", background: C.border, margin: "0 auto" }}>
            <img src={PHOTO_URL} alt="Sheil" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }} />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const { C } = useTheme()
  const [hovered, setHovered] = useState(false)

  const cardStyle = { background: C.card, borderRadius: 8, overflow: "hidden" as const, border: `1px solid ${C.border}`, cursor: "pointer", display: "block", textDecoration: "none", width: 280, flexShrink: 0 as const }
  const inner = (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ y: hovered ? -4 : 0, boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.14)" : "0 2px 8px rgba(0,0,0,0.04)" }}
      transition={{ duration: 0.2 }}
      style={cardStyle}
    >
      <div style={{ height: 190, background: C.border, overflow: "hidden" }}>
        <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div style={{ padding: "18px 20px 20px" }}>
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: C.primary, marginBottom: 6 }}>{project.category}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 4 }}>{project.title}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 12, color: C.placeholder, marginBottom: 14 }}>{project.subtitle}</div>
        <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }} style={{ fontFamily: "Arial, sans-serif", fontSize: 10, color: C.primary, display: "inline-block" }}>
          View Case Study →
        </motion.span>
      </div>
    </motion.div>
  )

  return <Link to={project.link} style={{ textDecoration: "none" }}>{inner}</Link>
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects() {
  const { C } = useTheme()
  return (
    <section id="projects" style={{ background: C.surface, padding: "80px 40px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <FadeUp>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: C.text, margin: "0 0 32px" }}>Projects</h2>
        </FadeUp>
        <Scroller overflow="x" width="100%" height="auto" bgColor={C.surface} noOverflowHidden withButtons childrenContainerClassName="gap-5 pb-4 pt-1">
          {PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}
        </Scroller>
      </div>
    </section>
  )
}

// ─── SKILLS + EXPERIENCE ──────────────────────────────────────────────────────
function SkillsExperience() {
  const { C } = useTheme()
  return (
    <section id="experience" style={{ background: C.surface, padding: "80px 40px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", gap: 56, flexWrap: "wrap" }}>
        <FadeUp>
          <div style={{ flex: "1 1 260px" }}>
            <Eyebrow>Skills</Eyebrow>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {SKILLS.map((skill) => <SkillPill key={skill} highlight={false}>{skill}</SkillPill>)}
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.12}>
          <div style={{ flex: "1 1 260px" }}>
            <Eyebrow>Experience</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {EXPERIENCE.map((e) => (
                <div key={e.role + e.org}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 2 }}>{e.role} · {e.org}</div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: C.placeholder }}>{e.years}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
function Achievements() {
  const { C } = useTheme()
  return (
    <section id="achievements" style={{ background: C.surface, padding: "80px 40px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <FadeUp>
          <Eyebrow>Achievements</Eyebrow>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: C.text, margin: "0 0 32px" }}>Recognition</h2>
        </FadeUp>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {ACHIEVEMENTS.map((a) => <AchievementCard key={a.title + a.year} {...a} />)}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const { C } = useTheme()
  return (
    <section id="contact" style={{ background: C.surface, padding: "80px 40px 100px", borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
      <FadeUp>
        <Eyebrow style={{ display: "block", marginBottom: 16 }}>Contact</Eyebrow>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: C.text, margin: "0 0 12px" }}>Let's build something together.</h2>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: C.placeholder, margin: "0 0 32px" }}>Open to internships and collaborations in Singapore.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <CTAButton href="mailto:sheilkmistry@gmail.com" filled>sheilkmistry@gmail.com</CTAButton>
          <CTAButton href="https://linkedin.com/in/sheilmistry" filled={false}>LinkedIn ↗</CTAButton>
          <CTAButton href="https://github.com/chaaiirr" filled={false}>GitHub ↗</CTAButton>
        </div>
      </FadeUp>
    </section>
  )
}

// ─── PORTFOLIO (main page) ────────────────────────────────────────────────────
function Portfolio() {
  const { C } = useTheme()
  return (
    <div style={{ fontFamily: "Georgia, serif", background: C.bg, minHeight: "100vh", overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <SkillsExperience />
      <Achievements />
      <Contact />
    </div>
  )
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(false)
  const theme = { C: dark ? DARK : LIGHT, dark, toggle: () => setDark((d) => !d) }

  return (
    <ThemeContext.Provider value={theme}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/ptc" element={<PTCPage />} />
        <Route path="/projects/dxb" element={<DXBPage />} />
        <Route path="/projects/platefull" element={<PlateFullPage />} />
        <Route path="/projects/boa" element={<BOAPage />} />
        <Route path="/projects/novel" element={<NovelPage />} />
        <Route path="/projects/quant" element={<QuantPage />} />
      </Routes>
    </ThemeContext.Provider>
  )
}
