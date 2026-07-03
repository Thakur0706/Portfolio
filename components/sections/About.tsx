'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Code2, Zap } from 'lucide-react'
import { personal } from '@/data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const highlights = [
  {
    icon: Code2,
    label: 'MERN Stack',
    desc: 'End-to-end full-stack development',
    color: '#a78bfa',
  },
  {
    icon: Zap,
    label: 'AI Integration',
    desc: 'OpenRouter AI, n8n automation',
    color: '#f472b6',
  },
  {
    icon: GraduationCap,
    label: 'VESIT, Mumbai',
    desc: 'B.E. Information Technology',
    color: '#34d399',
  },
  {
    icon: MapPin,
    label: 'Dombivli, India',
    desc: 'Open to remote & on-site roles',
    color: '#60a5fa',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section divider */}
        <div className="section-divider mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated glow behind avatar */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full scale-110 opacity-20"
                style={{
                  background:
                    'conic-gradient(from 0deg, #7c3aed, #a78bfa, #c4b5fd, #8b5cf6, #7c3aed)',
                  filter: 'blur(30px)',
                }}
              />

              <div className="gradient-border">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden glass flex items-center justify-center bg-deep">
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-syne font-black text-7xl text-gradient select-none">
                      ST
                    </span>
                    <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                      Soham Thakur
                    </span>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-gradient-to-bl from-accent/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 rounded-tr-full bg-gradient-to-tr from-accent/15 to-transparent" />
                </div>
              </div>

              {/* CGPA badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-4 -right-4 glass border border-accent/20 rounded-2xl px-4 py-3 hover-glow"
              >
                <p className="font-mono text-xs text-accent-light">CGPA</p>
                <p className="font-syne font-black text-2xl text-text-primary">
                  9.09
                </p>
              </motion.div>

              {/* Year badge */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-2 -left-6 glass border border-accent/20 rounded-2xl px-4 py-3 hover-glow"
              >
                <p className="font-mono text-xs text-accent-light">Since</p>
                <p className="font-syne font-black text-2xl text-text-primary">
                  &apos;23
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – content */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.25em] uppercase text-accent-light mb-3"
            >
              About Me
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-syne font-black text-4xl md:text-5xl text-text-primary leading-tight mb-5"
            >
              Building systems that{' '}
              <span className="text-gradient">actually scale.</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-text-secondary text-lg leading-relaxed mb-5"
            >
              {personal.bio}
            </motion.p>

            {/* Terminal-style bio block */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="card-base p-5 mb-8 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3 text-text-muted">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs">about.md</span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                <span className="text-accent-light">$</span> Beyond the stack,
                I&apos;m drawn to problems at the intersection of user experience
                and backend complexity — systems where getting the data model
                right changes everything. I&apos;ve competed in hackathons, shipped
                volunteer projects, and interned across both product companies
                and institutional platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, desc, color }, i) => (
                <motion.div
                  key={label}
                  custom={4 + i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="card-base p-4 flex items-start gap-3 hover-glow group"
                >
                  <div
                    className="mt-0.5 p-2 rounded-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">
                      {label}
                    </p>
                    <p className="text-text-muted text-xs mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
