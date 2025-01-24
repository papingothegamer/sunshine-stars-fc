"use client"

import { motion } from "framer-motion"
import { StaffCard } from "./staff-card"
import { coaches } from "@/lib/data/players"

export function CoachesView() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <StaffCard key={coach.id} staff={coach} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

