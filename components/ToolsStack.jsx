'use client';

import { motion } from 'framer-motion';

const tools = [
  {
    name: 'GoHighLevel Pro',
    desc: 'CRM, email, SMS, landing pages, pipelines — the business OS',
  },
  {
    name: 'Followr',
    desc: 'AI-powered social media automation & content generation',
  },
  {
    name: 'Answerly AI',
    desc: 'Intelligent chatbots for 24/7 customer support',
  },
  {
    name: 'New Oaks',
    desc: 'Advanced conversational AI & appointment booking',
  },
  {
    name: 'Elementor Pro',
    desc: 'Professional page builder for WordPress',
  },
  {
    name: 'Divi Pro',
    desc: 'Premium website builder & theme framework',
  },
  {
    name: 'Managed Hosting',
    desc: 'Ultra-fast hosting for your projects',
  },
];

const row = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ToolsStack() {
  return (
    <section id="stack" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/60 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow-center mb-5">The Toolkit</p>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-cream mb-5">
            Tools that work.
            <em className="text-muted"> Knowledge that scales.</em>
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Seven industry-standard tools, plus practical training that saves
            you months of learning and thousands in trial-and-error. We show
            you exactly how to use them together.
          </p>
        </motion.div>

        <motion.div
          className="card overflow-hidden !rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.07 }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              variants={row}
              className={`flex items-center gap-4 px-6 sm:px-8 py-5 ${
                i !== 0 ? 'border-t border-white/[0.05]' : ''
              } hover:bg-white/[0.02] transition-colors`}
            >
              <span className="font-mono text-[11px] text-muted/60 w-6 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-cream text-[15px] tracking-tight">
                  {tool.name}
                </div>
                <div className="text-[13px] text-muted truncate">
                  {tool.desc}
                </div>
              </div>
              <div className="text-primary font-mono text-xs shrink-0">✓ Included</div>
            </motion.div>
          ))}

          {/* Value row */}
          <motion.div
            variants={row}
            className="px-6 sm:px-8 py-6 border-t border-white/[0.09] bg-primary/[0.04]"
          >
            <div className="font-semibold text-cream mb-2">
              What you actually get
            </div>
            <p className="text-[15px] text-muted leading-relaxed">
              Seven proven tools, hands-on training, and a community that helps
              you avoid costly mistakes. Most members save months of learning
              time and thousands in wasted subscriptions and poorly-configured
              automations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
