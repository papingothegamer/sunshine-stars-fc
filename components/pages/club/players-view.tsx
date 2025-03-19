"use client"

import { motion } from "framer-motion"
import { PlayerCard } from "./player-card"
import { players } from "@/lib/data/players"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StarPattern } from "./star-pattern"

export function PlayersView() {
  const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"] as const
  const playersByPosition = positions.map((position) => ({
    position,
    players: players.filter((player) => player.position === position),
  }))

  return (
    <div className="relative">
      {/* Star Pattern Background */}
      <StarPattern />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-secondary font-anton"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          First Team Squad
        </motion.h1>

        <Tabs defaultValue={positions[0].toLowerCase()} className="space-y-8">
          <TabsList className="w-full flex justify-center bg-transparent border-0">
            {positions.map((position) => (
              <TabsTrigger
                key={position}
                value={position.toLowerCase()}
                className="font-anton text-base sm:text-xl text-secondary/70 data-[state=active]:text-primary data-[state=active]:scale-110 transition-all duration-300 relative group uppercase px-2 sm:px-3 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none ring-0 data-[state=active]:ring-0 focus-visible:ring-0"
              >
                {position}s
              </TabsTrigger>
            ))}
          </TabsList>

          {playersByPosition.map(({ position, players }, index) => (
            <TabsContent 
              key={position} 
              value={position.toLowerCase()}
              className="space-y-8 mt-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-secondary font-anton">
                    {position}s
                    <span className="ml-3 text-lg text-secondary/50">({players.length})</span>
                  </h2>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent hidden sm:block" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {players.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </div>
  )
}

