"use client"

import { motion } from "framer-motion"
import { StaffCard } from "./staff-card"
import { technicalTeam } from "@/lib/data/players"
import { StarPattern } from "./star-pattern"

export function TechnicalTeamView() {
  return (
    <div className="relative">
      <StarPattern />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-secondary font-anton"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Technical Team
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary font-anton">
              Support Staff
              <span className="ml-2 sm:ml-3 text-base sm:text-lg text-secondary/50">
                ({technicalTeam.length})
              </span>
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {technicalTeam.map((staff) => (
              <StaffCard key={staff.id} staff={staff} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </div>
  )
}

