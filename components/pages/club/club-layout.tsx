"use client"

import { motion } from "framer-motion"
import { useClub } from "./club-provider"
import { ClubNav } from "./club-nav"
import { PlayersView } from "./players-view"
import { TechnicalTeamView } from "./technical-team-view"
import { CoachesView } from "./coaches-view"
import { StarPattern } from "./star-pattern"

export function ClubLayout() {
  const { currentView } = useClub()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-background to-secondary/10">
      <StarPattern />
      <div className="relative">
        <header className="bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="py-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl mb-4"
              >
                Club
              </motion.h1>
              <ClubNav />
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {currentView === "players" && <PlayersView />}
            {currentView === "technical-team" && <TechnicalTeamView />}
            {currentView === "coaches" && <CoachesView />}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

