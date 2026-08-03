'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / 100, y: e.clientY / 100 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const redirectToGuild = () => {
    window.location.href = process.env.NEXT_PUBLIC_GUILD_REDIRECT;
  };

  return (
    <section className="relative min-h-screen mt-20 flex items-center overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark px-6">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(99, 102, 241, 0.2), transparent 70%)`,
          transition: 'background 0.3s ease-out',
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-primary bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            Master AI Automation & Business Growth
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Join an elite community of 500+ entrepreneurs mastering Followr, GHL, Answerly, and AI automation tools worth $10K+. Get direct access to our complete stack and proven playbooks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={redirectToGuild}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/50"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Guild – $67/month
            </motion.button>
            <motion.a
              href="#features"
              className="border-2 border-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/10"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Visual - Floating Cards */}
        <motion.div
          className="relative h-96 lg:h-full hidden lg:block"
          variants={itemVariants}
        >
          <motion.div
            className="absolute top-0 right-20 bg-dark-light/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 w-80 shadow-2xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="text-primary font-bold mb-2">Followr AI</h3>
            <p className="text-gray-400 text-sm">
              Social media automation & content generation
            </p>
            <p className="text-primary font-bold mt-3 text-sm">$297/mo value</p>
          </motion.div>

          <motion.div
            className="absolute top-56 left-0 bg-dark-light/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 w-80 shadow-2xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            <div className="text-3xl mb-2">💼</div>
            <h3 className="text-primary font-bold mb-2">GoHighLevel Pro</h3>
            <p className="text-gray-400 text-sm">
              Complete CRM, email, SMS, landing pages & more
            </p>
            <p className="text-primary font-bold mt-3 text-sm">$497/mo value</p>
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 bg-dark-light/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 w-80 shadow-2xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
          >
            <div className="text-3xl mb-2">🤖</div>
            <h3 className="text-primary font-bold mb-2">Answerly AI</h3>
            <p className="text-gray-400 text-sm">
              Intelligent chatbots & customer automation
            </p>
            <p className="text-primary font-bold mt-3 text-sm">$297/mo value</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
