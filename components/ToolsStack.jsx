'use client';

import { motion } from 'framer-motion';

const tools = [
  {
    name: 'GoHighLevel Pro',
    desc: 'Complete CRM — email, SMS, landing pages, pipelines & booking',
    value: 497,
  },
  {
    name: 'Followr AI',
    desc: 'AI social media automation & content generation',
    value: 297,
  },
  {
    name: 'Answerly AI',
    desc: 'Intelligent chatbots & customer support automation',
    value: 297,
  },
  {
    name: 'New Oaks',
    desc: 'Advanced conversational AI & appointment booking',
    value: 199,
  },
  {
    name: 'Elementor Pro',
    desc: 'Professional WordPress page builder',
    value: 99,
  },
  {
    name: 'Divi Pro',
    desc: 'Premium website builder & theme framework',
    value: 89,
  },
  {
    name: 'Managed Hosting',
    desc: 'Ultra-fast managed hosting for your projects',
    value: 79,
  },
];

const totalMonthly = tools.reduce((sum, t) => sum + t.value, 0);

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
          <p className="eyebrow-center mb-5">The Stack</p>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-cream mb-5">
            Seven tools. <em className="text-muted">One bill.</em>
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Bought separately, this stack costs ${totalMonthly.toLocaleString()}
            /month. Guild members get all of it — included.
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
              className={`flex items-center justify-between gap-4 px-6 sm:px-8 py-5 ${
                i !== 0 ? 'border-t border-white/[0.05]' : ''
              } hover:bg-white/[0.02] transition-colors`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="font-mono text-[11px] text-muted/60 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <div className="font-semibold text-cream text-[15px] tracking-tight">
                    {tool.name}
                  </div>
                  <div className="text-[13px] text-muted truncate">
                    {tool.desc}
                  </div>
                </div>
              </div>
              <div className="font-mono text-sm text-muted shrink-0">
                ${tool.value}<span className="text-muted/50">/mo</span>
              </div>
            </motion.div>
          ))}

          {/* Total row */}
          <motion.div
            variants={row}
            className="flex items-center justify-between gap-4 px-6 sm:px-8 py-6 border-t border-white/[0.09] bg-primary/[0.04]"
          >
            <div className="font-semibold text-cream">
              Total value
              <span className="hidden sm:inline text-muted font-normal">
                {' '}— everything above, plus training & community
              </span>
            </div>
            <div className="flex items-baseline gap-3 shrink-0">
              <span className="font-mono text-sm text-muted line-through decoration-muted/60">
                ${totalMonthly.toLocaleString()}/mo
              </span>
              <span className="font-serif text-3xl text-primary">$67</span>
              <span className="font-mono text-xs text-muted">/mo</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
