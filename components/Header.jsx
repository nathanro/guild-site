'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#features', label: 'Membership' },
  { href: '#stack', label: 'The Stack' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const redirectToGuild = () => {
    window.location.href = process.env.NEXT_PUBLIC_GUILD_REDIRECT;
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/85 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-ink font-bold text-sm">
            ⌘
          </span>
          <span className="font-semibold text-[15px] tracking-tight text-cream">
            PubliExpert{' '}
            <span className="text-muted font-normal">AI Guild</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-muted hover:text-cream transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={redirectToGuild}
            className="btn-primary !px-5 !py-2.5 !text-sm"
          >
            Join the Guild
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-ink/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-6 flex flex-col gap-1"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-muted hover:text-cream transition-colors border-b border-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <button onClick={redirectToGuild} className="btn-primary mt-4">
            Join the Guild
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
