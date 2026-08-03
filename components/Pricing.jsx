'use client';

import { motion } from 'framer-motion';

const includes = [
  'Complete 7-tool stack included',
  'Unlimited community access',
  'Weekly live training sessions',
  'Done-for-you playbooks',
  'White-label templates',
  'Practical guides & resources',
  'Priority support',
  'Direct access to the Guild team',
];

const Check = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary shrink-0"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Pricing() {
  const redirectToGuild = () => {
    window.location.href = process.env.NEXT_PUBLIC_GUILD_REDIRECT;
  };

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-5">Pricing</p>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-cream mb-6">
              One price.
              <br />
              <em className="text-muted">Complete access.</em>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-md">
              No tiers, no upsells, no hidden fees. Every member gets the full
              stack, the full training library, and the full community from
              day one.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Check /> Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <Check /> Billed monthly
              </div>
            </div>
          </motion.div>

          {/* Right: pricing card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl pointer-events-none" />

            <div className="relative card !bg-surface !rounded-3xl p-8 lg:p-10 !border-white/10">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
                  Guild Membership
                </span>
                <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/25 px-3 py-1 font-mono text-[11px] text-primary">
                  $10K+ value
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-7xl text-cream">$67</span>
                <span className="text-muted">/month</span>
              </div>
              <p className="text-sm text-muted mb-8">
                Less than $2.25 a day for your entire stack.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-9">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check />
                    <span className="text-[14px] text-cream/85">{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={redirectToGuild} className="btn-primary w-full">
                Join the Guild
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-center text-xs text-muted mt-4">
                Instant access · No setup fees · Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
