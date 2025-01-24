"use client"

import { motion } from "framer-motion"

export function MatchdayHero() {
  return (
    <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <img
        src="/placeholder.svg"
        alt="Crowd at Sunshine Stars match"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Matchday Experience</h1>
          <p className="text-xl md:text-2xl">Feel the passion, live the moment</p>
        </motion.div>
      </div>
    </div>
  )
}

