'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Active members' },
  { value: '$10K+', label: 'Tool stack value' },
  { value: '52', label: 'Live sessions / year' },
  { value: '7', label: 'Pro tools included' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const redirectToGuild = () => {
    window.location.href = process.env.NEXT_PUBLIC_GUILD_REDIRECT;
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-32 pb-20">
      {/* Backdrop: grid + glow */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto w-full relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Announcement pill */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[13px] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            New cohort now open — limited seats
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-center font-serif text-5xl sm:text-6xl lg:text-[84px] leading-[1.02] tracking-tight text-cream mb-7"
        >
          The AI stack behind
          <br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
            unstoppable
          </em>{' '}
          businesses
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={item}
          className="text-center text-lg lg:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          One membership. Seven professional tools worth over $10,000 a year.
          A community of 500+ entrepreneurs who build with AI — and the
          playbooks they use to grow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20"
        >
          <button onClick={redirectToGuild} className="btn-primary">
            Join the Guild — $67/mo
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <a href="#stack" className="btn-ghost">
            See what&apos;s inside
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/[0.07] divide-x divide-white/[0.07]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 px-6 text-center">
              <div className="font-serif text-4xl lg:text-5xl text-cream mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
