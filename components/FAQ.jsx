'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What exactly is included in the membership?',
    a: 'Your $67/month gets you access to the full tool stack (GoHighLevel Pro, Followr AI, Answerly, New Oaks, Elementor Pro, Divi Pro, and managed hosting), weekly live training sessions, done-for-you playbooks, white-label templates, the certification program, and the private community.',
  },
  {
    q: 'Do I need technical experience to get value from the Guild?',
    a: 'No. The playbooks and weekly trainings are designed for entrepreneurs at every level. Many members start with zero automation experience and follow the step-by-step systems to launch their first funnels within weeks.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Membership is billed monthly with no long-term contracts. You can cancel from your account dashboard at any time and keep access until the end of your billing period.',
  },
  {
    q: 'Can I use the white-label materials with my own clients?',
    a: 'Absolutely. The white-label templates, scripts, and workflows are licensed for you to rebrand and use in your own client work — that’s one of the most popular reasons members join.',
  },
  {
    q: 'How do the tool licenses work?',
    a: 'Tool access is provisioned through the Guild’s partner accounts as part of your membership. As long as your membership is active, your access stays active.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow-center mb-5">FAQ</p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] tracking-tight text-cream">
            Questions, <em className="text-muted">answered.</em>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-[15px] text-cream tracking-tight">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-muted shrink-0"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-[15px] text-muted leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
