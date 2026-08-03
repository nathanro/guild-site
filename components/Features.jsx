'use client';

import { motion } from 'framer-motion';

const Icon = ({ path }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

const features = [
  {
    icon: <Icon path={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>} />,
    title: 'Elite Community',
    description:
      'Network with 500+ entrepreneurs and AI operators. Weekly live sessions, mastermind groups, and direct mentorship from top performers.',
    span: 'lg:col-span-2',
  },
  {
    icon: <Icon path={<><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>} />,
    title: 'Live Training',
    description:
      'Weekly live workshops teaching practical AI automation. Learn from real use cases, not theory.',
    span: '',
  },
  {
    icon: <Icon path={<><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></>} />,
    title: 'Complete Toolkit',
    description:
      'Followr AI, GHL Pro, Answerly, New Oaks, Divi Pro, Elementor Pro, and premium hosting — all under one roof.',
    span: '',
  },
  {
    icon: <Icon path={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>} />,
    title: 'Done-For-You Playbooks',
    description:
      'Proven systems for lead generation, email sequences, funnel automation, and client scaling — ready to deploy.',
    span: '',
  },
  {
    icon: <Icon path={<><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></>} />,
    title: 'Weekly Live Training',
    description:
      'Live workshops every week covering new AI tools, automation strategies, and advanced growth tactics.',
    span: '',
  },
  {
    icon: <Icon path={<><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>} />,
    title: 'Exclusive Resources',
    description:
      'Templates, scripts, workflows, and code snippets ready to implement. White-label materials included, so you can resell under your own brand.',
    span: 'lg:col-span-2',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-5">Membership</p>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-cream mb-5">
            Everything you need.
            <br />
            <em className="text-muted">Nothing you don&apos;t.</em>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            The Guild bundles the tools, the training, and the network — so you
            can stop assembling your stack and start shipping.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className={`card p-8 group ${feature.span}`}
              variants={card}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/15 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-cream mb-2.5 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
