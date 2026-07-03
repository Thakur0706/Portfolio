'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import { projects } from '@/data/portfolio'
import SectionHeading from '@/components/shared/SectionHeading'

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="section-pad dot-grid bg-dot-grid bg-dot-lg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          subtitle="Production-grade applications — from real-time platforms to AI-driven tools."
        />

        <div className="space-y-6">
          {projects.map((project, idx) => {
            const isOpen = expanded === project.id

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-base overflow-hidden hover-glow group relative"
              >
                {/* Colored accent strip at top */}
                <div
                  className="h-[2px] w-full transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}80, transparent)`,
                  }}
                />

                <button
                  onClick={() =>
                    setExpanded(isOpen ? null : project.id)
                  }
                  className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5 min-w-0">
                    {/* Project number */}
                    <span
                      className="font-mono text-4xl font-black leading-none flex-shrink-0 select-none transition-all duration-300 group-hover:scale-110"
                      style={{ color: project.color + '50' }}
                    >
                      0{project.id}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <h3 className="font-syne font-black text-xl md:text-2xl text-text-primary group-hover:text-gradient transition-all duration-300">
                          {project.name}
                        </h3>
                        <span
                          className="font-mono text-xs rounded-full px-3 py-0.5"
                          style={{
                            color: project.color,
                            background: project.color + '15',
                            border: `1px solid ${project.color}30`,
                          }}
                        >
                          {project.subtitle}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-1 p-2 rounded-full border border-surface group-hover:border-accent/30 transition-all duration-300">
                    <ChevronDown
                      size={18}
                      className={`text-text-muted group-hover:text-accent-light transition-all duration-300 ${
                        isOpen ? 'rotate-180 text-accent-light' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-surface/50">
                        <p className="text-text-secondary leading-relaxed mt-5 mb-6 md:pl-[4.5rem]">
                          {project.longDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 md:pl-[4.5rem]">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-xs px-3 py-1.5 rounded-full border bg-white/[0.02]"
                              style={{
                                borderColor: project.color + '40',
                                color: project.color,
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 md:pl-[4.5rem]">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface glass text-text-secondary hover:text-accent-light hover:border-accent/40 text-sm font-medium transition-all duration-200"
                          >
                            <Github size={15} />
                            Source Code
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all duration-200 glow-violet-sm hover:glow-violet"
                              style={{ background: project.color }}
                            >
                              <ExternalLink size={15} />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted text-sm mb-4">
            More projects on GitHub
          </p>
          <a
            href="https://github.com/Thakur0706"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-surface glass text-text-secondary hover:text-accent-light hover:border-accent/40 text-sm font-medium transition-all duration-200"
          >
            <Github size={16} />
            github.com/Thakur0706
          </a>
        </motion.div>
      </div>
    </section>
  )
}
