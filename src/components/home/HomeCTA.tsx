import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-surface-900" />

      {/* Glowing orb behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-brand-500/8 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-brand-500/40" />
            <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">
              Ready to build?
            </span>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-brand-500/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Your hardware vision,
            <br />
            <span className="text-brand-400">engineered to production.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Share your requirements and receive a technical scoping response within
            two business days. No sales fluff — just engineers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-brand-500/30 hover:shadow-brand-400/40 hover:-translate-y-0.5"
            >
              Start a Conversation
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/process"
              className="flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 hover:bg-white/5"
            >
              <Calendar size={14} />
              See Our Process
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
