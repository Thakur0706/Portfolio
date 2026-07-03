'use client'

import { personal, navLinks } from '@/data/portfolio'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-surface/50 bg-deep py-14 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full opacity-15 pointer-events-none animate-glow-pulse"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-syne font-black text-xl text-text-primary tracking-tight">
              Soham<span className="text-accent">.</span>
            </span>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Full‑Stack Developer passionate about building scalable web
              applications with clean code and modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-1">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-text-secondary hover:text-accent-light transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-1">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-surface glass text-text-secondary hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 transition-all duration-200 hover:-translate-y-1"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-surface glass text-text-secondary hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 transition-all duration-200 hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personal.social.email}`}
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-surface glass text-text-secondary hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 transition-all duration-200 hover:-translate-y-1"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-surface/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {personal.name}. Crafted with Next.js
            & Framer Motion.
          </p>

          <button
            onClick={scrollToTop}
            className="group p-3 rounded-full border border-surface glass text-text-muted hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </footer>
  )
}
