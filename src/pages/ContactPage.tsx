import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  MessageSquare,
  CheckCircle2,
  Building2,
  User,
  DollarSign,
  ChevronDown,
  AlertCircle,
} from 'lucide-react'

// ── Replace this URL with your Formspree endpoint ──────────────────────────
// Sign up at https://formspree.io → create a new form → paste the endpoint here
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const budgetOptions = [
  { value: '', label: 'Select a budget range' },
  { value: '<10k', label: 'Under £10,000 (Feasibility / Scoping only)' },
  { value: '10k-50k', label: '£10,000 – £50,000' },
  { value: '50k-150k', label: '£50,000 – £150,000' },
  { value: '150k-500k', label: '£150,000 – £500,000' },
  { value: '500k+', label: '£500,000+' },
]

interface FormState {
  name: string
  company: string
  email: string
  budget: string
  details: string
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  budget: '',
  details: '',
}

const contactMeta = [
  {
    icon: Mail,
    label: 'Email us directly',
    value: 'hello@interweb0fthings.io',
    href: 'mailto:hello@interweb0fthings.io',
  },
  {
    icon: MessageSquare,
    label: 'Response time',
    value: '< 2 business days',
    href: null,
  },
  {
    icon: CheckCircle2,
    label: 'First call',
    value: 'Engineers only — no sales',
    href: null,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormState>>({})

  function validate(): boolean {
    const errs: Partial<FormState> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.company.trim()) errs.company = 'Company is required'
    if (!form.email.trim()) errs.email = 'Work email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email'
    if (!form.budget) errs.budget = 'Please select a budget range'
    if (!form.details.trim()) errs.details = 'Project details are required'
    else if (form.details.trim().length < 30)
      errs.details = 'Please provide at least 30 characters'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="min-h-screen bg-surface-900 pt-24 pb-24">
      {/* Page header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="absolute inset-0 bg-hero-gradient opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs text-brand-400 tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Discuss Your Project
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Share your requirements and an engineer will respond within two business days.
              No sales calls — just a direct technical conversation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 space-y-4"
          >
            {contactMeta.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-surface-800/60"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium text-white hover:text-brand-400 transition"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* NDA note */}
            <div className="p-4 rounded-xl border border-accent-500/20 bg-accent-500/5">
              <p className="text-xs text-accent-400 font-medium mb-1">Confidentiality</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                We're happy to sign an NDA before any technical discussion. Mention this
                in your project details and we'll send one within 24 hours.
              </p>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {status === 'success' ? (
              <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-12 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle2 size={26} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you for reaching out. An engineer will review your requirements and
                    respond within two business days.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-brand-400 hover:text-brand-300 transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-white/8 bg-surface-800/60 p-7 md:p-9"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <User size={11} />
                        Full Name *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-surface-700/60 border text-sm text-white placeholder-slate-600 outline-none transition focus:ring-1 ${
                        errors.name
                          ? 'border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20'
                          : 'border-white/10 focus:border-brand-500/60 focus:ring-brand-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={10} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <Building2 size={11} />
                        Company *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp Ltd"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-surface-700/60 border text-sm text-white placeholder-slate-600 outline-none transition focus:ring-1 ${
                        errors.company
                          ? 'border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20'
                          : 'border-white/10 focus:border-brand-500/60 focus:ring-brand-500/20'
                      }`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={10} />
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Work Email */}
                <div className="mb-5">
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Mail size={11} />
                      Work Email *
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-surface-700/60 border text-sm text-white placeholder-slate-600 outline-none transition focus:ring-1 ${
                      errors.email
                        ? 'border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-brand-500/60 focus:ring-brand-500/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div className="mb-5">
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <DollarSign size={11} />
                      Project Budget *
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-surface-700/60 border text-sm text-white outline-none appearance-none transition focus:ring-1 ${
                        errors.budget
                          ? 'border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20'
                          : 'border-white/10 focus:border-brand-500/60 focus:ring-brand-500/20'
                      } ${form.budget === '' ? 'text-slate-600' : 'text-white'}`}
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-surface-800 text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                    />
                  </div>
                  {errors.budget && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.budget}
                    </p>
                  )}
                </div>

                {/* Project Details */}
                <div className="mb-7">
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare size={11} />
                      Project Details *
                    </span>
                  </label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe your project: what it needs to measure or do, the environment it will operate in, connectivity requirements, target production volume, and any timeline constraints..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-surface-700/60 border text-sm text-white placeholder-slate-600 outline-none transition resize-y focus:ring-1 leading-relaxed ${
                      errors.details
                        ? 'border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-brand-500/60 focus:ring-brand-500/20'
                    }`}
                  />
                  <div className="flex items-start justify-between mt-1">
                    {errors.details ? (
                      <p className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={10} />
                        {errors.details}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-slate-600 ml-auto">
                      {form.details.length} chars
                    </span>
                  </div>
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="mb-5 flex items-center gap-2 p-3 rounded-lg border border-red-500/25 bg-red-500/10 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    Something went wrong. Please email us directly at hello@interweb0fthings.io
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-500 hover:bg-brand-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-xl shadow-brand-500/25 hover:shadow-brand-400/30 hover:-translate-y-0.5 disabled:translate-y-0"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-600 mt-4">
                  By submitting, you agree that we may contact you about your enquiry.
                  We never share your data with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
