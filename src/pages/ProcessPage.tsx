import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MessageSquare,
  FlaskConical,
  Layers,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Requirements & Scoping',
    duration: '1–2 weeks',
    summary:
      'We start with an in-depth discovery call. Our engineers extract functional requirements, environmental constraints, connectivity needs, certifications required, and production volume targets.',
    deliverables: [
      'Technical Requirements Document (TRD)',
      'Bill of Materials (BOM) preliminary estimate',
      'Risk & regulatory assessment',
      'Project timeline and milestone schedule',
      'Fixed-price engagement proposal',
    ],
    color: 'brand',
    accentHex: '#0ea5e9',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'Breadboard Prototyping',
    duration: '2–4 weeks',
    summary:
      'Our hardware team builds rapid breadboard and development-kit prototypes to validate core sensor integrations, power budgets, and communication stacks before any PCB design begins.',
    deliverables: [
      'Functional prototype hardware',
      'Power budget analysis & measurements',
      'Firmware architecture definition',
      'Communication protocol validation',
      'Updated BOM with validated components',
    ],
    color: 'accent',
    accentHex: '#14b8a6',
  },
  {
    number: '03',
    icon: Layers,
    title: 'PCB Design & Firmware Development',
    duration: '4–8 weeks',
    summary:
      'Schematic capture, multi-layer PCB layout (Altium / KiCad), DFM review, and simultaneous firmware development in C/C++ or Zephyr RTOS. We run automated CI/CD on all firmware builds.',
    deliverables: [
      'Production-ready PCB Gerber files & IPC-D-356',
      'BOM with approved vendor alternates',
      'Firmware source (git-controlled, documented)',
      'Hardware test jig schematics',
      'Design for Manufacture (DFM) report',
    ],
    color: 'purple',
    accentHex: '#a855f7',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Manufacturing & Deployment',
    duration: '4–12 weeks',
    summary:
      'We manage the CM relationship, incoming quality inspection, firmware flashing, factory acceptance testing, and logistics to your deployment sites. Post-deployment, we provide OTA update infrastructure and ongoing firmware support.',
    deliverables: [
      'Manufactured, tested, and flashed units',
      'Factory Acceptance Test (FAT) report',
      'Regulatory compliance documentation (CE/FCC)',
      'OTA update pipeline & fleet management',
      'Ongoing firmware support retainer (optional)',
    ],
    color: 'orange',
    accentHex: '#f97316',
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string; connector: string }> = {
  brand: {
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/30',
    text: 'text-brand-400',
    glow: 'shadow-brand-500/20',
    connector: 'bg-brand-500/30',
  },
  accent: {
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/30',
    text: 'text-accent-400',
    glow: 'shadow-accent-500/20',
    connector: 'bg-accent-500/30',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    glow: 'shadow-purple-500/20',
    connector: 'bg-purple-500/30',
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    glow: 'shadow-orange-500/20',
    connector: 'bg-orange-500/30',
  },
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const c = colorMap[step.color]
  const Icon = step.icon
  const isLast = index === steps.length - 1

  return (
    <div ref={ref} className="relative">
      {/* Vertical connector line */}
      {!isLast && (
        <div className={`absolute left-6 top-full h-10 w-px ${c.connector} z-10`} />
      )}

      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        className={`relative rounded-2xl border ${c.border} bg-surface-800/60 overflow-hidden`}
      >
        {/* Number watermark */}
        <span className="absolute top-4 right-6 font-mono text-6xl font-bold text-white/[0.03] select-none pointer-events-none">
          {step.number}
        </span>

        <div className="p-7 md:p-9">
          <div className="flex flex-col md:flex-row gap-7">
            {/* Left col — meta */}
            <div className="md:w-56 shrink-0">
              <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4 shadow-lg ${c.glow}`}>
                <Icon size={20} className={c.text} />
              </div>
              <div className={`font-mono text-xs ${c.text} mb-1`}>Step {step.number}</div>
              <h2 className="text-lg md:text-xl font-bold text-white leading-tight mb-3">
                {step.title}
              </h2>
              <div className="flex items-center gap-1.5">
                <Clock size={12} className="text-slate-500" />
                <span className="font-mono text-xs text-slate-500">{step.duration}</span>
              </div>
            </div>

            {/* Right col — content */}
            <div className="flex-1">
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{step.summary}</p>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                  Deliverables
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 size={12} className={`${c.text} mt-0.5 shrink-0`} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-surface-900 pt-24 pb-24">
      {/* Page header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="absolute inset-0 bg-hero-gradient opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3">
              Engagement Model
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              How We Build Your Hardware
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A structured, four-phase pipeline that takes your concept from a napkin sketch
              to certified, deployed hardware — with full IP ownership transferred to you.
            </p>

            {/* Timeline summary chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {steps.map((s, i) => (
                <div key={s.number} className="flex items-center gap-1.5">
                  <span className={`font-mono text-xs px-2.5 py-1 rounded-full border ${colorMap[s.color].border} ${colorMap[s.color].text} ${colorMap[s.color].bg}`}>
                    {s.number} {s.title}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight size={12} className="text-slate-600 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {steps.map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}
      </div>

      {/* Bottom guarantees */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14"
      >
        <div className="rounded-2xl border border-white/8 bg-surface-800/40 p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Our commitments to you</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-400 mb-8">
            {[
              { title: 'Full IP Ownership', desc: 'All source, Gerbers, and docs are transferred to you at project close.' },
              { title: 'Fixed-Price Engagements', desc: 'No surprises. We scope rigorously and hold to agreed budgets.' },
              { title: 'Transparent Communication', desc: 'Weekly engineering updates. You talk to the engineers, not account managers.' },
            ].map((item) => (
              <div key={item.title}>
                <p className="font-semibold text-white mb-1">{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium text-sm transition-all shadow-xl shadow-brand-500/25 hover:-translate-y-0.5"
          >
            Start Phase 01
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
