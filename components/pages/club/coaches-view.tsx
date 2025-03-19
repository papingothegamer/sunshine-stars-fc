"use client"

import { motion } from "framer-motion"
import { StaffCard } from "./staff-card"
import { coaches } from "@/lib/data/players"
import { StarPattern } from "./star-pattern"

export function CoachesView() {
  return (
    <div className="relative">
      <StarPattern />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-secondary font-anton"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Coaching Staff
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary font-anton">
              Coaches
              <span className="ml-3 text-lg text-secondary/50">({coaches.length})</span>
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent ml-8" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <StaffCard key={coach.id} staff={coach} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </div>
  )
}

