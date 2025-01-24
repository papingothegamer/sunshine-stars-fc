"use client"

import { motion } from "framer-motion"

export function MatchdayHeader() {
  return (
    <header className="bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Matchday Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Everything you need to know about matchday at Akure Township Stadium
          </motion.p>
        </div>
      </div>
    </header>
  )
}

