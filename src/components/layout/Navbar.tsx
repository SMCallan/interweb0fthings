import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Cpu, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-900/95 backdrop-blur-md border-b border-brand-500/20 shadow-lg shadow-brand-500/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:border-brand-500/60 transition-all duration-200">
                <Cpu size={16} className="text-brand-400" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-400 animate-pulse-slow" />
            </div>
            <span className="font-semibold text-white tracking-tight">
              Inter<span className="text-brand-400">Web</span>
              <span className="text-slate-400 font-normal">0FThings</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-brand-400 bg-brand-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md bg-brand-500 hover:bg-brand-400 text-white transition-all duration-150 shadow-lg shadow-brand-500/25 hover:shadow-brand-400/30"
            >
              Discuss Your Project
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-surface-800/98 backdrop-blur-md border-b border-white/5"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
                      isActive
                        ? 'text-brand-400 bg-brand-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 text-sm font-medium rounded-md bg-brand-500 hover:bg-brand-400 text-white transition"
                >
                  Discuss Your Project
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
