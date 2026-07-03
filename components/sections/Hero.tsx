'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { personal, techStack } from '@/data/portfolio'

const ROLES = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'AI Enthusiast',
  'Problem Solver',
]

/* ── Typewriter ────────────────────────── */
function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const target = ROLES[roleIdx]
    const delay = deleting ? 35 : charIdx === target.length ? 1600 : 65

    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < target.length) {
          setText(target.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
        } else {
          setDeleting(true)
        }
      } else {
        if (charIdx > 0) {
          setText(target.slice(0, charIdx - 1))
          setCharIdx((c) => c - 1)
        } else {
          setDeleting(false)
          setRoleIdx((r) => (r + 1) % ROLES.length)
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [charIdx, deleting, roleIdx])

  return (
    <span className="font-mono text-xl md:text-2xl text-text-secondary">
      <span className="text-accent-light">&lt;</span>
      <span className="text-text-primary mx-1.5">{text}</span>
      <span className="inline-block w-0.5 h-[1.1em] bg-accent align-middle animate-[cursor-blink_1s_step-end_infinite]" />
      <span className="text-accent-light"> /&gt;</span>
    </span>
  )
}

/* ── Count-up animation ────────────────── */
function CountUp({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''))
  const hasPlus = target.includes('+')
  const hasTimes = target.includes('×')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1800
          const steps = 40
          const increment = numericTarget / steps
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= numericTarget) {
              current = numericTarget
              clearInterval(interval)
            }
            setCount(current)
          }, duration / steps)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericTarget])

  const display = Number.isInteger(numericTarget)
    ? Math.round(count)
    : count.toFixed(2)

  return (
    <span ref={ref}>
      {display}
      {hasPlus && '+'}
      {hasTimes && '×'}
      {suffix}
    </span>
  )
}

/* ── Tech Marquee ──────────────────────── */
function TechMarquee() {
  const doubled = [...techStack, ...techStack]

  return (
    <div className="marquee-container mt-16">
      <div className="flex animate-marquee gap-8">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface bg-white/[0.03] text-text-secondary text-sm font-mono whitespace-nowrap hover:border-accent/40 hover:text-accent-light transition-all duration-300 flex-shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Name animation variants ───────────── */
const nameVariants = {
  hidden: { opacity: 0, y: 70 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] },
  }),
}

/* ── Hero ──────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid bg-dot-grid bg-dot-lg"
    >
      {/* Violet orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 68%)',
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
        aria-hidden
        className="pointer-events-none absolute -bottom-60 -left-40 w-[560px] h-[560px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full pt-28 pb-24">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-surface mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs tracking-wider text-emerald-400 uppercase">
            Open to SDE Roles
          </span>
        </motion.div>

        {/* Name block */}
        <div className="mb-7 overflow-hidden">
          <motion.h1
            aria-label={personal.name}
            style={{
              fontSize: 'clamp(3.8rem, 11.5vw, 10.5rem)',
              lineHeight: 0.9,
            }}
            className="font-syne font-black tracking-tight"
          >
            <motion.span
              custom={0}
              variants={nameVariants}
              initial="hidden"
              animate="show"
              className="block text-text-primary"
            >
              {personal.firstName}
            </motion.span>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.5, ease: 'easeOut' }}
              className="my-2 h-[2px] origin-left rounded-full bg-gradient-to-r from-accent via-accent-light to-transparent"
              style={{ maxWidth: '55%' }}
            />

            <motion.span
              custom={1}
              variants={nameVariants}
              initial="hidden"
              animate="show"
              className="block text-gradient"
            >
              {personal.lastName}
            </motion.span>
          </motion.h1>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mb-7 h-9"
        >
          <Typewriter />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.05 }}
          className="max-w-2xl text-text-secondary text-base md:text-lg leading-relaxed mb-10"
        >
          {personal.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.25 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-violet-500 text-white rounded-full font-semibold text-sm transition-all duration-250 glow-violet-sm hover:glow-violet"
          >
            View Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>

          <a
            href="/Soham_Thakur_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-surface hover:border-accent/50 text-text-primary text-sm font-semibold glass hover:bg-accent/10 transition-all duration-250"
          >
            <Download size={16} />
            Resume
          </a>

          <div className="flex items-center gap-2 ml-1">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-surface glass text-text-secondary hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
            >
              <Github size={17} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-surface glass text-text-secondary hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </motion.div>

        {/* Stats with count-up */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.5 }}
          className="mt-16 flex flex-wrap gap-10"
        >
          {[
            { value: '3+', label: 'Projects Shipped' },
            { value: '3', label: 'Internships' },
            { value: '9.09', label: 'CGPA' },
            { value: '2×', label: 'Hackathon Finalist' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="font-syne font-black text-3xl text-gradient-violet">
                <CountUp target={value} />
              </span>
              <span className="font-mono text-xs text-text-muted mt-1 uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <TechMarquee />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-text-muted">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-accent/70 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
