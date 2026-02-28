import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const techItems = [
  { name: 'MQTT', category: 'Protocol' },
  { name: 'LoRaWAN', category: 'Protocol' },
  { name: 'Yocto Linux', category: 'Platform' },
  { name: 'Buildroot', category: 'Platform' },
  { name: 'Zephyr RTOS', category: 'RTOS' },
  { name: 'FreeRTOS', category: 'RTOS' },
  { name: 'Raspberry Pi CM4', category: 'Hardware' },
  { name: 'Nordic nRF52840', category: 'Hardware' },
  { name: 'ESP32-S3', category: 'Hardware' },
  { name: 'i.MX8M Plus', category: 'Hardware' },
  { name: 'Modbus RTU', category: 'Protocol' },
  { name: 'OPC-UA', category: 'Protocol' },
  { name: 'Sparkplug B', category: 'Protocol' },
  { name: 'KiCad', category: 'Tools' },
  { name: 'Altium Designer', category: 'Tools' },
  { name: 'ATECC608', category: 'Security' },
  { name: 'TPM 2.0', category: 'Security' },
  { name: 'Matter / Thread', category: 'Protocol' },
  { name: 'Zigbee', category: 'Protocol' },
  { name: 'Cellular (LTE-M)', category: 'Connectivity' },
  { name: 'Ethernet TSN', category: 'Connectivity' },
  { name: 'CAN Bus', category: 'Protocol' },
  { name: 'Linux eBPF', category: 'Platform' },
  { name: 'Docker / Balena', category: 'Platform' },
]

// Duplicate for seamless loop
const row1 = [...techItems.slice(0, 12), ...techItems.slice(0, 12)]
const row2 = [...techItems.slice(12), ...techItems.slice(12)]

const categoryColors: Record<string, string> = {
  Protocol: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
  Platform: 'text-accent-400 bg-accent-500/10 border-accent-500/20',
  RTOS: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  Hardware: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  Tools: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  Security: 'text-red-400 bg-red-500/10 border-red-500/20',
  Connectivity: 'text-green-400 bg-green-500/10 border-green-500/20',
}

function TechBadge({ name, category }: { name: string; category: string }) {
  const color = categoryColors[category] ?? 'text-slate-400 bg-slate-500/10 border-slate-500/20'
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/8 bg-surface-700/60 whitespace-nowrap mx-2 shrink-0">
      <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border ${color} leading-none`}>
        {category}
      </span>
      <span className="text-sm font-medium text-slate-200">{name}</span>
    </div>
  )
}

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-surface-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative text-center mb-12 px-4"
      >
        <p className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3">
          Technology Stack
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Built on proven industrial standards
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto">
          We select the right protocols, silicon, and toolchains for each project — no vendor lock-in.
        </p>
      </motion.div>

      {/* Marquee rows */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-surface-900 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-surface-900 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Row 1 — left to right */}
          <div className="flex overflow-hidden mb-3">
            <div className="flex animate-marquee">
              {row1.map((item, i) => (
                <TechBadge key={`r1-${i}`} name={item.name} category={item.category} />
              ))}
            </div>
          </div>

          {/* Row 2 — right to left */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-reverse">
              {row2.map((item, i) => (
                <TechBadge key={`r2-${i}`} name={item.name} category={item.category} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
