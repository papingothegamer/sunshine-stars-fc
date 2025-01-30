"use client"

import { motion } from "framer-motion"
import { PlayerCard } from "./player-card"
import { players } from "@/lib/data/players"

export function PlayersView() {
  const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"] as const
  const playersByPosition = positions.map((position) => ({
    position,
    players: players.filter((player) => player.position === position),
  }))

  return (
    <div className="space-y-12">
      {playersByPosition.map(({ position, players }, index) => (
        <motion.div
          key={position}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white/90">{position}s</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

