import { motion } from 'framer-motion'
import {
  Wind,
  Cpu,
  Thermometer,
  Gauge,
  Wifi,
  Bluetooth,
  Radio,
  Shield,
  Battery,
  MemoryStick,
  HardDrive,
  Globe,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface Spec {
  label: string
  value: string
  icon: LucideIcon
}

interface Product {
  id: string
  badge: string
  badgeColor: string
  title: string
  subtitle: string
  description: string
  useCases: string[]
  specs: Spec[]
  accentColor: string
  borderColor: string
  glowColor: string
  iconBg: string
  icon: LucideIcon
  status: string
  statusColor: string
}

const products: Product[] = [
  {
    id: 'aqm-pro',
    badge: 'Environmental',
    badgeColor: 'text-accent-400 bg-accent-500/10 border-accent-500/25',
    title: 'AirSense Pro — Enterprise Air Quality Monitor',
    subtitle: 'Multi-parameter environmental intelligence for occupied spaces',
    description:
      'A CE/FCC-certified IoT sensor node designed for dense deployment in commercial buildings, data centres, and manufacturing floors. Measures six environmental parameters simultaneously and streams compressed telemetry over dual radio paths.',
    useCases: [
      'LEED & WELL certification data collection',
      'HVAC demand-controlled ventilation triggers',
      'Industrial hygiene compliance logging',
      'Data centre raised-floor monitoring',
    ],
    specs: [
      { label: 'CO₂ Range', value: '400–10,000 ppm (±30 ppm)', icon: Wind },
      { label: 'VOC Sensor', value: 'SGP41 — TVOC + NOx index', icon: Thermometer },
      { label: 'Particulates', value: 'PM1 / PM2.5 / PM10 (SPS30)', icon: Gauge },
      { label: 'Connectivity', value: 'Wi-Fi 6, Ethernet, LoRaWAN fallback', icon: Wifi },
      { label: 'MCU / SoC', value: 'ESP32-S3 + RP2040 co-processor', icon: Cpu },
      { label: 'Battery', value: '72 h backup — Li-FePO₄', icon: Battery },
      { label: 'Ingress', value: 'IP54 rated enclosure', icon: Shield },
      { label: 'Protocol', value: 'MQTT / Sparkplug B / REST', icon: Globe },
    ],
    accentColor: 'text-accent-400',
    borderColor: 'border-accent-500/20 hover:border-accent-500/50',
    glowColor: 'bg-accent-500/6',
    iconBg: 'bg-accent-500/10',
    icon: Wind,
    status: 'Production Ready',
    statusColor: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  {
    id: 'edge-compute',
    badge: 'Edge Compute',
    badgeColor: 'text-brand-400 bg-brand-500/10 border-brand-500/25',
    title: 'EdgeCore Node — Ruggedised Linux Edge Device',
    subtitle: 'Local inference and protocol translation at the network edge',
    description:
      'A DIN-rail-mountable embedded Linux computer engineered for industrial environments. Runs containerised workloads via Balena or custom Yocto images. Designed for -40°C to +85°C operation with hardware watchdog and dual-SIM cellular failover.',
    useCases: [
      'On-premise ML inference (vision / vibration)',
      'Modbus RTU → MQTT protocol gateway',
      'Local historian / buffered telemetry',
      'Predictive maintenance edge orchestration',
    ],
    specs: [
      { label: 'SoM', value: 'CM4 / i.MX8M Plus (customer choice)', icon: Cpu },
      { label: 'RAM / Flash', value: '4 GB LPDDR4 / 64 GB eMMC', icon: MemoryStick },
      { label: 'Storage', value: 'NVMe M.2 2242 (opt. 1 TB)', icon: HardDrive },
      { label: 'Connectivity', value: 'GbE × 2, Wi-Fi 6, BT 5.3', icon: Wifi },
      { label: 'Cellular', value: 'LTE-M / NB-IoT dual-SIM failover', icon: Radio },
      { label: 'Interfaces', value: 'RS-485, CAN FD, USB-C × 2, GPIO', icon: Gauge },
      { label: 'Security', value: 'ATECC608B + TPM 2.0 + Secure Boot', icon: Shield },
      { label: 'Bluetooth', value: 'BLE 5.3 mesh coordinator', icon: Bluetooth },
    ],
    accentColor: 'text-brand-400',
    borderColor: 'border-brand-500/20 hover:border-brand-500/50',
    glowColor: 'bg-brand-500/6',
    iconBg: 'bg-brand-500/10',
    icon: Cpu,
    status: 'Available for Bespoke Orders',
    statusColor: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
  },
  {
    id: 'industrial-gateway',
    badge: 'Industrial Gateway',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/25',
    title: 'ProLink Gateway — Industrial Protocol Bridge',
    subtitle: 'OT to IT connectivity with deterministic latency',
    description:
      'A hardened multi-protocol gateway purpose-built for brownfield industrial deployments. Bridges legacy SCADA/PLC ecosystems to modern cloud platforms without disrupting existing OT infrastructure. Supports TSN for time-critical control network integration.',
    useCases: [
      'Brownfield PLC data extraction (Siemens S7, Allen-Bradley)',
      'OPC-UA server aggregation and normalisation',
      'IEC 61850 substation automation bridging',
      'Time-sensitive networking (802.1Qbv) integration',
    ],
    specs: [
      { label: 'Protocols', value: 'OPC-UA, Modbus, DNP3, IEC 61850', icon: Globe },
      { label: 'Ethernet', value: 'TSN-capable GbE × 4 (IEEE 802.1Qbv)', icon: Wifi },
      { label: 'Compute', value: 'RK3399 hexa-core, 4 GB RAM', icon: Cpu },
      { label: 'Serial', value: 'RS-232/485/422 × 4 isolated', icon: Gauge },
      { label: 'Redundancy', value: 'Dual PSU, watchdog, RAID-1 eMMC', icon: Shield },
      { label: 'Temp Range', value: '-40°C to +85°C (IEC 60068-2)', icon: Thermometer },
      { label: 'Mounting', value: 'DIN-rail, 35mm, IP40', icon: HardDrive },
      { label: 'Cellular', value: '5G NR Sub-6 + LTE fallback', icon: Radio },
    ],
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/20 hover:border-purple-500/50',
    glowColor: 'bg-purple-500/6',
    iconBg: 'bg-purple-500/10',
    icon: Gauge,
    status: 'Reference Design Available',
    statusColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-surface-900 pt-24 pb-24">
      {/* Page header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3">
              Product Showcase
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Bespoke Hardware Capabilities
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Reference designs that showcase our engineering depth. Every device is fully
              customisable to your application, regulatory requirements, and supply chain.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
      >
        {products.map((product) => {
          const ProductIcon = product.icon
          return (
            <motion.article
              key={product.id}
              variants={cardVariants}
              className={`relative rounded-2xl border ${product.borderColor} bg-surface-800/60 overflow-hidden transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Glow overlay */}
              <div className={`absolute inset-0 ${product.glowColor} pointer-events-none`} />

              <div className="relative p-7 md:p-10">
                {/* Header row */}
                <div className="flex flex-wrap items-start gap-4 mb-7">
                  <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center shrink-0`}>
                    <ProductIcon size={22} className={product.accentColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`font-mono text-xs px-2 py-0.5 rounded border ${product.badgeColor}`}>
                        {product.badge}
                      </span>
                      <span className={`font-mono text-xs px-2 py-0.5 rounded border ${product.statusColor}`}>
                        {product.status}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {product.title}
                    </h2>
                    <p className={`text-sm ${product.accentColor} mt-0.5`}>{product.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Description + use cases */}
                  <div className="lg:col-span-1 space-y-5">
                    <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                        Common Use Cases
                      </h3>
                      <ul className="space-y-2">
                        {product.useCases.map((uc) => (
                          <li key={uc} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${product.accentColor.replace('text-', 'bg-')} shrink-0`} />
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spec grid */}
                  <div className="lg:col-span-2">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.specs.map((spec) => {
                        const SpecIcon = spec.icon
                        return (
                          <div
                            key={spec.label}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5"
                          >
                            <SpecIcon size={13} className={`${product.accentColor} mt-0.5 shrink-0`} />
                            <div>
                              <p className="text-xs text-slate-500 mb-0.5">{spec.label}</p>
                              <p className="font-mono text-xs text-slate-200">{spec.value}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 font-mono">
                    All specifications are reference only — customised to your requirements.
                  </p>
                  <Link
                    to="/contact"
                    className={`flex items-center gap-1.5 text-sm font-medium ${product.accentColor} hover:opacity-80 transition group shrink-0`}
                  >
                    Request this design
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-4 text-center mt-20"
      >
        <p className="text-slate-400 mb-4">
          Don't see exactly what you need?{' '}
          <span className="text-white">We build entirely custom from a blank schematic.</span>
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium text-sm transition-all shadow-xl shadow-brand-500/25 hover:-translate-y-0.5"
        >
          Describe your project
          <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  )
}
