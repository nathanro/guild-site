'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow-center mb-5">What You'll Learn</p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] tracking-tight text-cream">
            Real strategies.
            <em className="text-muted"> Real results.</em>
          </h2>
        </motion.div>

        <motion.div
          className="card overflow-hidden !rounded-3xl aspect-video"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DBGX6RliLuU"
            title="Guild Training"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
