'use client';
import { motion } from 'framer-motion';
import { BarChart3, Target, Sparkles, Users, Zap, TrendingUp } from 'lucide-react';

const cellVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  }),
};

export default function BentoPage() {
  const cells = [
    {
      className: 'col-span-2 row-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between',
      content: (
        <>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bento Grid</h1>
            <p className="text-gray-500 text-sm">Asymmetric compartments inspired by Japanese bento boxes.</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
            <Sparkles className="w-4 h-4" /> Balanced asymmetry
          </div>
        </>
      ),
    },
    {
      className: 'bg-blue-500 rounded-3xl p-5 text-white flex flex-col justify-between',
      content: (
        <>
          <BarChart3 className="w-6 h-6" />
          <div>
            <p className="text-2xl font-bold">+42%</p>
            <p className="text-xs text-white/80">Analytics</p>
          </div>
        </>
      ),
    },
    {
      className: 'bg-green-500 rounded-3xl p-5 text-white flex flex-col justify-between',
      content: (
        <>
          <Target className="w-6 h-6" />
          <div>
            <p className="font-semibold">Goals</p>
            <p className="text-xs text-white/80">8 / 12 done</p>
          </div>
        </>
      ),
    },
    {
      className: 'bg-purple-500 rounded-3xl p-5 text-white flex flex-col justify-between',
      content: (
        <>
          <Users className="w-6 h-6" />
          <p className="font-semibold">2.4k Users</p>
        </>
      ),
    },
    {
      className: 'bg-orange-500 rounded-3xl p-5 text-white flex flex-col justify-between',
      content: (
        <>
          <TrendingUp className="w-6 h-6" />
          <p className="font-semibold">Trending</p>
        </>
      ),
    },
    {
      className: 'col-span-2 md:col-span-4 bg-gray-900 rounded-3xl p-5 text-white flex items-center justify-between',
      content: (
        <>
          <div>
            <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Highlight</p>
            <p className="font-semibold">Featured content block</p>
          </div>
          <Zap className="w-8 h-8 text-yellow-400" />
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8 flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full auto-rows-[130px]">
        {cells.map((cell, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cellVariants}
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className={cell.className}
          >
            {cell.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}