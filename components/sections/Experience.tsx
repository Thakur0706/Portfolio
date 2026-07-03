'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { experiences } from '@/data/portfolio'
import SectionHeading from '@/components/shared/SectionHeading'

const TYPE_COLORS: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  Internship: {
    text: 'text-accent-light',
    bg: 'bg-accent/5',
    border: 'border-accent/30',
    dot: '#a78bfa',
  },
  Volunteer: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/30',
    dot: '#34d399',
  },
  'Full-time': {
    text: 'text-blue-400',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/30',
    dot: '#60a5fa',
  },
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <SectionHeading
          eyebrow="Work Experience"
          title="Where I've worked."
          subtitle="Internships and volunteer roles where I've shipped real code for real users."
        />

        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const typeStyle = TYPE_COLORS[exp.type] ?? {
                text: 'text-text-muted',
                bg: 'bg-white/5',
                border: 'border-surface',
                dot: '#7c3aed',
              }

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-14 group"
                >
                  {/* Glowing timeline dot */}
                  <div className="absolute left-0 top-1.5 flex items-center justify-center w-12 h-12 rounded-full bg-deep border-2 transition-all duration-300 group-hover:scale-110"
                    style={{
                      borderColor: typeStyle.dot + '50',
                      boxShadow: `0 0 16px ${typeStyle.dot}30`,
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${typeStyle.dot}20, transparent 70%)`,
                      }}
                    />
                    <Briefcase size={17} style={{ color: typeStyle.dot }} />
                  </div>

                  <div className="card-base p-6 md:p-7 hover-glow">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-syne font-bold text-xl text-text-primary leading-tight group-hover:text-gradient transition-all duration-300">
                          {exp.role}
                        </h3>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: typeStyle.dot }}
                        >
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
                        <span
                          className={`font-mono text-xs px-2.5 py-1 rounded-full border ${typeStyle.text} ${typeStyle.bg} ${typeStyle.border}`}
                        >
                          {exp.type}
                        </span>
                        <div className="inline-flex items-center gap-1.5 text-text-muted font-mono text-xs">
                          <Calendar size={11} />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                        >
                          <span
                            className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ background: typeStyle.dot + '80' }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
