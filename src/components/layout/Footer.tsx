import { Link } from 'react-router-dom'
import { Cpu, Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'Capabilities', to: '/capabilities' },
    { label: 'Our Process', to: '/process' },
    { label: 'Contact Us', to: '/contact' },
  ],
  Solutions: [
    { label: 'Air Quality Monitoring', to: '/capabilities' },
    { label: 'Edge Compute Nodes', to: '/capabilities' },
    { label: 'Industrial Sensors', to: '/capabilities' },
    { label: 'Custom Firmware', to: '/capabilities' },
  ],
}

const techItems = ['MQTT', 'LoRaWAN', 'Yocto Linux', 'Modbus', 'OPC-UA', 'ATECC608']

export default function Footer() {
  return (
    <footer className="relative bg-surface-900 border-t border-white/5">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
                <Cpu size={16} className="text-brand-400" />
              </div>
              <span className="font-semibold text-white tracking-tight">
                Inter<span className="text-brand-400">Web</span>
                <span className="text-slate-400 font-normal">0FThings</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              Bespoke IoT hardware and firmware for demanding enterprise environments.
              From breadboard to production — we own the full stack.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {techItems.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-0.5 rounded border border-brand-500/20 text-brand-400/70 bg-brand-500/5"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@interweb0fthings.io', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/50 hover:bg-brand-500/10 transition"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-brand-400 transition flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition -mt-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/5 gap-3">
          <p className="text-xs text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} InterWeb0FThings Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <MapPin size={11} className="text-accent-500" />
            <span>Designed for the physical world.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
