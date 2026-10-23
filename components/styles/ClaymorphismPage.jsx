'use client';

import { motion } from 'framer-motion';
import { Box, Palette, Heart, Star, Zap, Music } from 'lucide-react';

export default function ClaymorphismPage() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="bg-[#e0e5ec] shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[#e0e5ec] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] flex items-center justify-center">
              <Box className="w-7 h-7 text-purple-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-700">Claymorphism</h1>
              <p className="text-gray-500 text-sm">Soft · 3D · Friendly</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Soft 3D elements with dual inner and outer shadows mimic friendly, tactile clay surfaces.
          </p>
          <div className="flex gap-3">
            {/* 🎬 squishy clay button */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.94, y: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="px-6 py-3 bg-[#e0e5ec] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] rounded-xl font-semibold text-gray-700"
            >
              Press Me
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="px-4 py-3 bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] rounded-xl text-gray-500"
            >
              <Star className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[Palette, Heart, Zap, Music].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="aspect-square bg-[#e0e5ec] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] rounded-2xl flex items-center justify-center cursor-pointer"
            >
              <Icon className="w-8 h-8 text-gray-600" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}