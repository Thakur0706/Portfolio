'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import SectionHeading from '@/components/shared/SectionHeading'

const CATEGORY_STYLE: Record<string, { icon: string; gradient: string; border: string }> = {
  Frontend: {
    icon: '⚛️',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-t-blue-500/50',
  },
  Backend: {
    icon: '🔧',
    gradient: 'from-green-500/20 to-emerald-500/20',
    border: 'border-t-green-500/50',
  },
  Database: {
    icon: '🗄️',
    gradient: 'from-amber-500/20 to-yellow-500/20',
    border: 'border-t-amber-500/50',
  },
  Languages: {
    icon: '💻',
    gradient: 'from-violet-500/20 to-purple-500/20',
    border: 'border-t-violet-500/50',
  },
  'AI & Automation': {
    icon: '🤖',
    gradient: 'from-pink-500/20 to-rose-500/20',
    border: 'border-t-pink-500/50',
  },
  Tools: {
    icon: '🛠️',
    gradient: 'from-slate-400/20 to-zinc-400/20',
    border: 'border-t-slate-400/50',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <SectionHeading
          eyebrow="Technical Skills"
          title="My toolkit."
          subtitle="Technologies I use to design, build, and ship production-grade applications."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], catIdx) => {
            const style = CATEGORY_STYLE[category] ?? {
              icon: '📦',
              gradient: 'from-gray-500/20 to-gray-400/20',
              border: 'border-t-gray-500/50',
            }

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: catIdx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`card-base p-6 border-t-2 ${style.border} hover-glow group`}
              >
                {/* Category gradient bg */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="text-xl" aria-hidden>
                      {style.icon}
                    </span>
                    <h3 className="font-syne font-bold text-text-primary">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIdx * 0.08 + i * 0.04,
                        }}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.04] border border-surface text-text-secondary text-xs font-mono hover:border-accent/40 hover:text-accent-light hover:bg-accent/5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
