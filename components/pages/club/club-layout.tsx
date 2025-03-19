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
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-secondary via-background to-primary/10">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_25%,rgba(68,107,158,0.1)_50%,transparent_50%,transparent_75%,rgba(68,107,158,0.1)_75%)] bg-[length:24px_24px] pointer-events-none" />
      
      <div className="relative flex flex-col min-h-screen">
        <header className="w-full bg-secondary text-white">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="py-6 sm:py-8 space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl font-anton text-center"
              >
                Club
              </motion.h1>
              <div className="flex justify-center">
                <div className="w-full max-w-3xl mx-auto">
                  <ClubNav />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 w-full">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <div className="max-w-[1400px] mx-auto">
                {currentView === "bio" && <ClubBio />}
                {currentView === "players" && <PlayersView />}
                {currentView === "technical-team" && <TechnicalTeamView />}
                {currentView === "coaches" && <CoachesView />}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}

