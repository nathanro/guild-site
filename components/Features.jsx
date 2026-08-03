'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '👥',
    title: 'Elite Community',
    description: 'Network with 500+ entrepreneurs and AI experts. Weekly live sessions, mastermind groups, and direct mentorship from top performers.',
  },
  {
    icon: '🎓',
    title: 'Certification Track',
    description: 'Get certified in Followr, GHL, and AI automation. Industry-recognized credentials that boost your credibility.',
  },
  {
    icon: '🛠️',
    title: 'Complete Toolkit',
    description: 'Access Followr AI, GHL Pro, Answerly, New Oaks, Divi Pro, Elementor Pro, and hosting included.',
  },
  {
    icon: '📚',
    title: 'Done-For-You Playbooks',
    description: 'Access proven systems for lead generation, email sequences, funnel automation, and client scaling.',
  },
  {
    icon: '💡',
    title: 'Weekly Training',
    description: 'Live workshops every week covering new AI tools, automation strategies, and advanced tactics.',
  },
  {
    icon: '🔥',
    title: 'Exclusive Resources',
    description: 'Templates, scripts, workflows, and code snippets ready to implement. White-label materials included.',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="features"
      className="py-20 bg-dark/50 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Why Join the Guild?
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to master AI automation and scale your business
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-dark-light/60 border border-primary/15 rounded-2xl p-8 hover:border-primary/40 hover:bg-dark-light/80 transition-all group"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
