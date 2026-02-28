import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Cpu } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
            <Cpu size={28} className="text-brand-400" />
          </div>
        </div>
        <p className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3">
          Error 404
        </p>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-slate-400 mb-8">
          The route you're looking for doesn't exist. It may have been moved or never deployed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium text-sm transition"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
