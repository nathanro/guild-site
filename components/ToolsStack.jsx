'use client';

import { motion } from 'framer-motion';

const tools = [
  { icon: '🤖', name: 'Followr', desc: 'AI social automation', value: '$297/mo' },
  { icon: '💼', name: 'GoHighLevel', desc: 'Complete business stack', value: '$497/mo' },
  { icon: '🔮', name: 'Answerly', desc: 'AI chatbot & automation', value: '$297/mo' },
  { icon: '🎨', name: 'Divi Pro', desc: 'Website builder', value: '$89/mo' },
  { icon: '✨', name: 'Elementor Pro', desc: 'Page builder', value: '$99/mo' },
  { icon: '🔧', name: 'New Oaks', desc: 'Advanced automation', value: '$199/mo' },
  { icon: '🌐', name: 'Hosting', desc: 'Ultra-fast hosting', value: '$79/mo' },
  { icon: '🎓', name: 'Training', desc: 'Weekly workshops', value: 'Priceless' },
];

export default function ToolsStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="stack"
      className="py-20 bg-gradient-to-b from-dark-light/30 to-dark/50 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Your Complete Toolkit
          </h2>
          <p className="text-xl text-gray-300">
            Everything included in your $67/month membership. Total value: $10,000+
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-dark-light/80 border border-primary/15 rounded-xl p-4 text-center hover:border-primary/50 hover:bg-dark-light/95 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-2">{tool.icon}</div>
              <h4 className="font-bold text-white text-sm mb-1">{tool.name}</h4>
              <p className="text-gray-400 text-xs mb-2">{tool.desc}</p>
              <div className="text-primary font-bold text-xs">{tool.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
