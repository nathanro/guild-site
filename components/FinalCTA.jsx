'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  const redirectToGuild = () => {
    window.location.href = process.env.NEXT_PUBLIC_GUILD_REDIRECT;
  };

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Glow backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-3xl mx-auto text-center relative"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-tight text-cream mb-6">
          Stop paying for
          <br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
            ten subscriptions.
          </em>
        </h2>
        <p className="text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Join 500+ entrepreneurs who replaced their scattered tool bills with
          one membership — and got a community in the bargain.
        </p>
        <button onClick={redirectToGuild} className="btn-primary !px-10 !py-4 !text-base">
          Join the Guild — $67/mo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
