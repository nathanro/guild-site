'use client';

import { motion } from 'framer-motion';

const includes = [
  'Complete tool stack included',
  'Unlimited community access',
  'Weekly live training sessions',
  'Done-for-you playbooks',
  'White-label templates',
  'Certification program',
  'Priority support',
  'Exclusive Discord community',
];

export default function Pricing() {
  const redirectToGuild = () => {
    window.location.href = process.env.NEXT_PUBLIC_GUILD_REDIRECT;
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-dark/50 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            One price. Complete access. No hidden fees.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-primary/10 via-accent/5 to-dark/80 border-2 border-primary/30 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Price Display */}
          <motion.div
            className="text-center mb-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-baseline gap-1 mb-2">
              <span className="text-5xl text-primary">$</span>
              <span className="text-7xl font-bold text-white">67</span>
              <span className="text-2xl text-gray-300">/month</span>
            </div>
            <p className="text-gray-400">Billed monthly • Cancel anytime</p>
          </motion.div>

          {/* Includes List */}
          <motion.div
            className="space-y-3 mb-10"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {includes.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                variants={itemVariants}
              >
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={redirectToGuild}
            className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/50"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            Start Your Journey – Join Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
