'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { personal } from '@/data/portfolio'
import SectionHeading from '@/components/shared/SectionHeading'
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react'

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: FormData) => {
    // Replace with your email service (e.g., Formspree, EmailJS)
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-pad dot-grid bg-dot-grid">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build together."
          subtitle="I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="card-base p-8 h-full flex flex-col justify-between hover-glow">
              <div>
                <h3 className="font-syne font-black text-3xl text-text-primary mb-4">
                  Contact Information
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Feel free to reach out to me directly via email or connect
                  with me on social media. I am always open to discussing new
                  projects, creative ideas, or opportunities to be part of your
                  visions.
                </p>

                <div className="flex flex-col gap-5">
                  <a
                    href={`mailto:${personal.social.email}`}
                    className="group flex items-center gap-4 text-text-secondary hover:text-accent-light transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <Mail size={20} className="text-accent-light" />
                    </div>
                    <span className="font-mono text-sm">
                      {personal.social.email}
                    </span>
                  </a>

                  <div className="flex items-center gap-4 text-text-secondary">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                      <MapPin size={20} className="text-accent-light" />
                    </div>
                    <span className="font-mono text-sm">
                      Mumbai / Pune, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-surface/50">
                <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
                  Connect
                </p>
                <div className="flex gap-3">
                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-3 rounded-full border border-surface glass text-text-secondary hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 hover:-translate-y-1 transition-all duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 rounded-full border border-surface glass text-text-secondary hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 hover:-translate-y-1 transition-all duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-base p-8 space-y-6 hover-glow"
            >
              {/* Name field */}
              <div className="relative group">
                <input
                  id="name"
                  {...register('name', { required: true })}
                  className="peer w-full bg-white/[0.03] border border-surface rounded-xl px-4 py-4 pt-6 text-text-primary placeholder-transparent focus:outline-none focus:border-accent-light/50 focus-glow transition-all"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 font-mono text-[10px] text-text-muted uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-accent-light"
                >
                  Your Name
                </label>
              </div>

              {/* Email field */}
              <div className="relative group">
                <input
                  id="email"
                  type="email"
                  {...register('email', { required: true })}
                  className="peer w-full bg-white/[0.03] border border-surface rounded-xl px-4 py-4 pt-6 text-text-primary placeholder-transparent focus:outline-none focus:border-accent-light/50 focus-glow transition-all"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 font-mono text-[10px] text-text-muted uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-accent-light"
                >
                  Your Email
                </label>
              </div>

              {/* Message field */}
              <div className="relative group">
                <textarea
                  id="message"
                  {...register('message', { required: true })}
                  rows={5}
                  className="peer w-full bg-white/[0.03] border border-surface rounded-xl px-4 py-4 pt-6 text-text-primary placeholder-transparent focus:outline-none focus:border-accent-light/50 focus-glow transition-all resize-none"
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 font-mono text-[10px] text-text-muted uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-accent-light"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full group inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent hover:bg-violet-500 text-white rounded-xl font-semibold text-sm transition-all duration-250 glow-violet-sm hover:glow-violet disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle2 size={16} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                      />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
