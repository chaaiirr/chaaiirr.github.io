import { useState, useContext, createContext } from "react"
import type { CSSProperties, ReactNode } from "react"
import { motion } from "framer-motion"

// ─── COLOUR TOKENS ────────────────────────────────────────────────────────────
export const LIGHT = {
  bg: "#F5F5F0",
  surface: "#F9F4EE",
  card: "#FFFFFF",
  accent: "#C3E41D",
  primary: "#C4573A",
  text: "#1A1A1A",
  muted: "#666666",
  placeholder: "#888888",
  border: "#E8E0D5",
  navBg: "rgba(245,245,240,0.85)",
}

export const DARK = {
  bg: "#111110",
  surface: "#1A1A18",
  card: "#222220",
  accent: "#C3E41D",
  primary: "#D4694B",
  text: "#F0EFE8",
  muted: "#999990",
  placeholder: "#666660",
  border: "#2E2E2C",
  navBg: "rgba(17,17,16,0.88)",
}

// ─── THEME CONTEXT ────────────────────────────────────────────────────────────
export type Colors = typeof LIGHT
export type ThemeCtx = { C: Colors; dark: boolean; toggle: () => void }
export const ThemeContext = createContext<ThemeCtx>({ C: LIGHT, dark: false, toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

// ─── BLUR TEXT ────────────────────────────────────────────────────────────────
export function BlurText({ text }: { text: string }) {
  return (
    <span style={{ display: "inline-flex" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: -20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  )
}

// ─── FADE UP ──────────────────────────────────────────────────────────────────
export function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

// ─── EYEBROW ──────────────────────────────────────────────────────────────────
export function Eyebrow({ children, style: s }: { children: string; style?: CSSProperties }) {
  const { C } = useTheme()
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: 9, letterSpacing: "3px", textTransform: "uppercase", color: C.primary, marginBottom: 12, ...s }}>
      {children}
    </div>
  )
}

// ─── SKILL PILL ───────────────────────────────────────────────────────────────
export function SkillPill({ children, highlight }: { children: string; highlight: boolean }) {
  const { C } = useTheme()
  const [hovered, setHovered] = useState(false)
  return (
    <motion.span
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        backgroundColor: highlight ? C.primary : hovered ? C.primary : C.surface,
        color: highlight || hovered ? "#fff" : C.text,
        borderColor: highlight || hovered ? C.primary : C.border,
      }}
      transition={{ duration: 0.18 }}
      style={{ display: "inline-block", border: `1px solid ${C.border}`, borderRadius: 20, padding: "6px 14px", fontFamily: "Arial, sans-serif", fontSize: 11, cursor: "default" }}
    >
      {children}
    </motion.span>
  )
}

// ─── CTA BUTTON ───────────────────────────────────────────────────────────────
export function CTAButton({ children, href, filled }: { children: string; href: string; filled: boolean }) {
  const { C } = useTheme()
  const [hovered, setHovered] = useState(false)
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        backgroundColor: filled ? (hovered ? "#a8412a" : C.primary) : hovered ? C.border : "transparent",
      }}
      transition={{ duration: 0.18 }}
      style={{ display: "inline-block", padding: "12px 24px", borderRadius: 5, fontFamily: "Arial, sans-serif", fontSize: 12, letterSpacing: "0.5px", textDecoration: "none", color: filled ? "#fff" : C.muted, border: filled ? "none" : `1px solid ${C.border}`, cursor: "pointer" }}
    >
      {children}
    </motion.a>
  )
}

// ─── ACHIEVEMENT CARD ─────────────────────────────────────────────────────────
export interface Achievement {
  title: string
  detail: string
  year: string
}

export function AchievementCard({ title, detail, year }: Achievement) {
  const { C } = useTheme()
  return (
    <FadeUp>
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "18px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: C.text, flex: 1 }}>{title}</div>
          <div style={{ fontFamily: "Arial, sans-serif", fontSize: 10, color: C.primary, marginLeft: 12, whiteSpace: "nowrap" }}>{year}</div>
        </div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{detail}</div>
      </div>
    </FadeUp>
  )
}
