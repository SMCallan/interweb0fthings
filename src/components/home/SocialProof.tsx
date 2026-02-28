import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'They delivered a production-ready air quality monitoring system in 11 weeks — hardware, firmware, and dashboard. Remarkable execution.',
    author: 'Head of Facilities Technology',
    company: 'Global Logistics Corp',
    initials: 'HF',
  },
  {
    quote:
      'The edge compute node they designed reduced our cloud inference costs by 74%. Their Yocto build is rock-solid after 18 months in the field.',
    author: 'CTO',
    company: 'Industrial AI Startup',
    initials: 'CT',
  },
  {
    quote:
      'From breadboard to CE-marked product in under 6 months. They own the full stack — PCB layout, BSP, and MQTT telemetry pipeline.',
    author: 'VP of Engineering',
    company: 'Smart Building Platform',
    initials: 'VP',
  },
]

export default function SocialProof() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-surface-800/40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3">
            Client Outcomes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Trusted by engineering teams
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/8 bg-surface-700/40 p-7 flex flex-col"
            >
              <Quote size={20} className="text-brand-500/40 mb-4 shrink-0" />
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
                  <span className="font-mono text-xs font-semibold text-brand-400">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
