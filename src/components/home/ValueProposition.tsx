import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Zap,
  Layers,
  Network,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const capabilities = [
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    tagline: 'From concept to working hardware in weeks, not months.',
    color: 'from-brand-500/20 to-brand-600/0',
    borderColor: 'border-brand-500/20 hover:border-brand-500/50',
    iconBg: 'bg-brand-500/10 group-hover:bg-brand-500/20',
    iconColor: 'text-brand-400',
    bullets: [
      'Rapid breadboard & proof-of-concept builds',
      'Iterative schematic and firmware cycles',
      'In-house 3D-printed enclosure mockups',
      'Component sourcing & BOM optimisation',
    ],
  },
  {
    icon: Layers,
    title: 'Embedded Linux',
    tagline: 'Custom OS images, secure boot, OTA updates — owned end-to-end.',
    color: 'from-accent-500/15 to-accent-600/0',
    borderColor: 'border-accent-500/20 hover:border-accent-500/50',
    iconBg: 'bg-accent-500/10 group-hover:bg-accent-500/20',
    iconColor: 'text-accent-400',
    bullets: [
      'Yocto / Buildroot BSP development',
      'Raspberry Pi CM4, i.MX8, RK3399 SoMs',
      'Secure boot & hardware attestation',
      'Fleet OTA update pipelines',
    ],
  },
  {
    icon: Network,
    title: 'Enterprise Sensor Networks',
    tagline: 'Dense, reliable sensor meshes that survive real environments.',
    color: 'from-purple-500/15 to-purple-600/0',
    borderColor: 'border-purple-500/20 hover:border-purple-500/50',
    iconBg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
    iconColor: 'text-purple-400',
    bullets: [
      'LoRaWAN, Zigbee, Thread, BLE mesh',
      'MQTT/Sparkplug B to cloud brokers',
      'IP67 / IP68 ruggedised enclosures',
      'Predictive maintenance telemetry',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ValueProposition() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-surface-800/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Everything the physical world demands
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Three pillars that underpin every engagement — from a single sensor to a
            nationwide deployment.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                variants={cardVariants}
                className={`group relative rounded-2xl border ${cap.borderColor} bg-surface-700/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-default overflow-hidden`}
              >
                {/* Card bg gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl ${cap.iconBg} flex items-center justify-center mb-5 transition-colors duration-200`}>
                    <Icon size={20} className={cap.iconColor} />
                  </div>

                  <h3 className="font-semibold text-white text-lg mb-2">{cap.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{cap.tagline}</p>

                  <ul className="space-y-2">
                    {cap.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckCircle2 size={13} className={`${cap.iconColor} mt-0.5 shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-medium transition group"
          >
            See how we build your solution
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
