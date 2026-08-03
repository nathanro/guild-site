'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const redirectToGuild = () => {
    window.location.href = process.env.NEXT_PUBLIC_GUILD_REDIRECT;
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-1000 bg-dark/80 backdrop-blur-xl border-b border-primary/10 px-6 py-5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          PubliExpert AI Guild
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#features" className="text-gray-300 hover:text-primary transition">
            Features
          </Link>
          <Link href="#stack" className="text-gray-300 hover:text-primary transition">
            Tools
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-primary transition">
            Pricing
          </Link>
          <motion.button
            onClick={redirectToGuild}
            className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-dark border-b border-primary/20 p-6 flex flex-col gap-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="#features" className="text-gray-300 hover:text-primary transition">
              Features
            </Link>
            <Link href="#stack" className="text-gray-300 hover:text-primary transition">
              Tools
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-primary transition">
              Pricing
            </Link>
            <button
              onClick={redirectToGuild}
              className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg font-semibold"
            >
              Join Now
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
