"use client"

import { motion } from "framer-motion"
import { useSchedule } from "./schedule-provider"
import { ScheduleNav } from "./schedule-nav"
import { ScheduleView } from "./schedule-view"
import { StandingsView } from "./standings-view"
import { StatsView } from "./stats-view"
import { YearSelect } from "./year-select"
import { CompetitionSelect } from "./competition-select"

export function ScheduleLayout() {
  const { currentView } = useSchedule()

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-primary/10">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_25%,rgba(68,107,158,0.1)_50%,transparent_50%,transparent_75%,rgba(68,107,158,0.1)_75%)] bg-[length:24px_24px] pointer-events-none" />
      <div className="relative">
        <header className="bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="py-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl mb-4"
              >
                Schedule & Stats
              </motion.h1>
              <ScheduleNav />
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <YearSelect />
            <CompetitionSelect />
          </div>
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {currentView === "schedule" && <ScheduleView />}
            {currentView === "standings" && <StandingsView />}
            {currentView === "stats" && <StatsView />}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

