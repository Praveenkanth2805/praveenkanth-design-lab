'use client';
import { motion } from 'framer-motion';
import { Sun, Moon, Settings, Bell, User, Search } from 'lucide-react';

export default function NeumorphismPage() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="bg-[#e0e5ec] shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#e0e5ec] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] rounded-2xl flex items-center justify-center">
              <Sun className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-700">Neumorphism</h1>
              <p className="text-gray-500 text-sm">Soft · Embossed</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] rounded-xl px-4 py-3 mb-6">
            <Search className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Search anything…</span>
          </div>

          <div className="flex gap-4">
            {[Bell, User, Settings, Moon].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -1 }}
                whileTap={{ y: 1, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="w-14 h-14 bg-[#e0e5ec] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] rounded-2xl flex items-center justify-center text-gray-600"
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="bg-[#e0e5ec] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] rounded-2xl p-5"
          >
            <p className="text-xs text-gray-500 mb-1">Raised</p>
            <p className="font-semibold text-gray-700">Outer shadow</p>
          </motion.div>
          <div className="bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] rounded-2xl p-5">
            <p className="text-xs text-gray-500 mb-1">Inset</p>
            <p className="font-semibold text-gray-700">Debossed</p>
          </div>
        </div>
      </div>
    </div>
  );
}