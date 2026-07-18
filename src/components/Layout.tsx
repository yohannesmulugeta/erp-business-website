import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react'
import { company, navItems } from '../data/site'
import { Button } from './Shared'

function Logo() {
  return <Link to="/" className="group flex items-center gap-3">
    <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan to-brand font-display text-sm font-extrabold text-white shadow-glow">WF<span className="absolute inset-x-1 bottom-1 h-px bg-white/35" /></span>
    <span><span className="block font-display text-sm font-extrabold tracking-tight text-white">{company.name}</span><span className="block text-[10px] uppercase tracking-[.14em] text-slate-400">Business Systems</span></span>
  </Link>
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location.pathname])
  useEffect(() => { const handler = () => setScrolled(window.scrollY > 16); handler(); window.addEventListener('scroll', handler); return () => window.removeEventListener('scroll', handler) }, [])

  return <div className="min-h-screen bg-paper">
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="bg-cyan py-2 text-center text-xs font-bold text-ink">
        Now accepting ERP, custom-software and website projects in Ethiopia. <Link to="/contact" className="ml-1 underline underline-offset-2">Start a conversation</Link>
      </div>
      <header className={`transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-ink/95 shadow-lg backdrop-blur' : 'bg-ink/85 backdrop-blur-md'}`}>
        <div className="container-shell flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-5 xl:flex">{navItems.map(item => <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-semibold transition ${isActive ? 'text-cyan' : 'text-slate-300 hover:text-white'}`}>{item.label}</NavLink>)}</nav>
          <div className="hidden xl:block"><Button to="/contact">Free Consultation</Button></div>
          <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white xl:hidden" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="border-t border-white/10 bg-ink px-5 pb-6 pt-4 xl:hidden"><nav className="container-shell flex flex-col gap-1 p-0">{navItems.map(item => <NavLink key={item.to} to={item.to} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-cyan/10 text-cyan' : 'text-slate-300'}`}>{item.label}</NavLink>)}<Button to="/contact" className="mt-3">Free Consultation</Button></nav></div>}
      </header>
    </div>
    <main><Outlet /></main>
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
        <div><Logo /><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">{company.description}</p><span className="mt-4 inline-flex rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-200">{company.workingLabel}</span></div>
        <div><h3 className="font-display font-bold">Services</h3><div className="mt-4 space-y-3 text-sm text-slate-400"><Link to="/services" className="block hover:text-cyan">Custom ERP</Link><Link to="/coffee-erp" className="block hover:text-cyan">Coffee ERP</Link><Link to="/services" className="block hover:text-cyan">Inventory Systems</Link><Link to="/services" className="block hover:text-cyan">Web Development</Link></div></div>
        <div><h3 className="font-display font-bold">Company</h3><div className="mt-4 space-y-3 text-sm text-slate-400"><Link to="/about" className="block hover:text-cyan">About</Link><Link to="/process" className="block hover:text-cyan">Process</Link><Link to="/work" className="block hover:text-cyan">Our Work</Link><Link to="/faq" className="block hover:text-cyan">FAQ</Link></div></div>
        <div><h3 className="font-display font-bold">Contact</h3><div className="mt-4 space-y-4 text-sm text-slate-400"><p className="flex gap-3"><MapPin size={17} className="text-cyan" />{company.location}</p><p className="flex gap-3"><Phone size={17} className="text-cyan" />Phone to be added</p><p className="flex gap-3"><Mail size={17} className="text-cyan" />Email to be added</p></div></div>
      </div>
      <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/contact" className="flex items-center gap-1 text-slate-300">Start a project <ArrowUpRight size={13} /></Link></div></div></div>
    </footer>
  </div>
}
