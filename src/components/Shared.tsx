import type { ReactNode } from 'react'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Button({ children, to, variant = 'primary', className = '' }: { children: ReactNode; to: string; variant?: 'primary' | 'secondary' | 'light'; className?: string }) {
  const styles = {
    primary: 'bg-cyan text-ink hover:bg-white',
    secondary: 'border border-white/15 bg-white/5 text-white hover:border-cyan/50 hover:bg-white/10',
    light: 'border border-slate-200 bg-white text-slate-950 hover:border-cyan hover:text-cyan',
  }
  return <Link to={to} className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-300 ${styles[variant]} ${className}`}>{children}<ArrowRight size={17} /></Link>
}

export function SectionHeading({ eyebrow, title, text, dark = false, align = 'left' }: { eyebrow: string; title: string; text?: string; dark?: boolean; align?: 'left' | 'center' }) {
  return <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 className={`section-title mt-5 ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
    {text && <p className={`mt-5 text-lg leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}
  </div>
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return <section className="relative overflow-hidden bg-ink pb-20 pt-36 text-white dark-grid hero-glow">
    <div className="container-shell relative z-10">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display-title mt-6">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{text}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </motion.div>
    </div>
  </section>
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55, delay }} className={className}>{children}</motion.div>
}

export function FeatureList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return <ul className="space-y-3">{items.map(item => <li key={item} className={`flex gap-3 text-sm leading-6 ${dark ? 'text-slate-300' : 'text-slate-600'}`}><span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dark ? 'bg-cyan/15 text-cyan' : 'bg-cyan/10 text-cyan'}`}><Check size={13} /></span>{item}</li>)}</ul>
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link to={to} className="inline-flex items-center gap-1 text-sm font-bold text-cyan transition hover:gap-2">{children}<ChevronRight size={16} /></Link>
}
