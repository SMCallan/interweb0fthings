import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, Radio, Cpu, Activity } from 'lucide-react'

const floatingStats = [
  { label: 'Sensors Deployed', value: '12,400+', icon: Activity },
  { label: 'Edge Nodes Live', value: '340+', icon: Cpu },
  { label: 'Uptime SLA', value: '99.94%', icon: Radio },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface-900" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-500/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-400/5 blur-3xl pointer-events-none" />

      {/* Corner circuit decorations */}
      <div className="absolute top-24 right-8 md:right-16 opacity-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M100 20 L80 20 L80 40 L60 40 L60 60" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4 2"/>
          <circle cx="100" cy="20" r="3" fill="#0ea5e9"/>
          <circle cx="60" cy="60" r="3" fill="#2dd4bf"/>
          <path d="M20 100 L40 100 L40 80 L60 80 L60 60" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4 2"/>
          <circle cx="20" cy="100" r="3" fill="#0ea5e9"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
            Enterprise IoT Hardware — End-to-End
            <ChevronRight size={12} className="text-brand-500" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
          >
            Custom IoT Hardware
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
                for the Modern Enterprise
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-brand-500/0 via-brand-400/60 to-brand-500/0 origin-left"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We bridge the gap between physical environments and digital analytics.
            From custom PCB design to embedded firmware and cloud connectivity —
            your hardware, engineered to spec.
          </motion.p>

          {/* CTA group */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          >
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium text-sm transition-all duration-200 shadow-xl shadow-brand-500/30 hover:shadow-brand-400/40 hover:-translate-y-0.5"
            >
              Discuss Your Project
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/capabilities"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 hover:bg-white/5"
            >
              View Capabilities
            </Link>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {floatingStats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 p-3 rounded-xl border border-white/5 bg-white/[0.03]"
              >
                <Icon size={14} className="text-brand-400 mb-0.5" />
                <span className="font-bold text-white text-lg leading-none font-mono">
                  {value}
                </span>
                <span className="text-xs text-slate-500 text-center leading-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-xs text-slate-600 font-mono tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-brand-500/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
