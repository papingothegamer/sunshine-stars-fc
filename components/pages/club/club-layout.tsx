"use client"

import { motion } from "framer-motion"
import { useClub } from "./club-provider"
import { ClubNav } from "./club-nav"
import { ClubBio } from "./club-bio"
import { PlayersView } from "./players-view"
import { TechnicalTeamView } from "./technical-team-view"
import { CoachesView } from "./coaches-view"

export function ClubLayout() {
  const { currentView } = useClub()

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
            {currentView === "bio" && <ClubBio />}
            {currentView === "players" && <PlayersView />}
            {currentView === "technical-team" && <TechnicalTeamView />}
            {currentView === "coaches" && <CoachesView />}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

