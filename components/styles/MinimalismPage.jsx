'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Circle, Minus } from 'lucide-react';

export default function MinimalismPage() {
  return (
    <div className="min-h-screen bg-white p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl space-y-10">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <Circle className="w-5 h-5 text-black" strokeWidth={3} />
            <span className="text-sm uppercase tracking-[0.2em] text-gray-500">Minimal</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-light text-gray-900 mb-6 leading-tight"
          >
            Less is<br />more.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 mb-10 leading-relaxed max-w-md"
          >
            Clean, functional, content-first. Whitespace is the hero; ornamentation is the enemy.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -1, letterSpacing: '0.02em' }}
            whileTap={{ y: 0 }}
            className="px-8 py-4 bg-black text-white font-medium inline-flex items-center gap-2"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ originX: 0 }}
          className="h-px bg-gray-200"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-between text-sm text-gray-400"
        >
          <span>01 / Minimalism</span>
          <Minus className="w-4 h-4" />
          <span>Design System</span>
        </motion.div>
      </div>
    </div>
  );
}