'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-primary/10 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="font-bold text-white mb-4">About</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition">About Guild</a></li>
              <li><a href="#" className="hover:text-primary transition">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition">Training</a></li>
              <li><a href="#" className="hover:text-primary transition">Templates</a></li>
              <li><a href="#" className="hover:text-primary transition">Playbooks</a></li>
              <li><a href="#" className="hover:text-primary transition">Tools</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://discord.gg/publiexpert" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Discord Community</a></li>
              <li><a href="#" className="hover:text-primary transition">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition">Instagram</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-primary/10 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} PubliExpert AI Guild. All rights reserved. | Built with ❤️ for entrepreneurs.</p>
        </motion.div>
      </div>
    </footer>
  );
}
