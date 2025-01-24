"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface PlayerCardProps {
  player: {
    id: number
    name: string
    number: number
    position: string
    normalImage: string
    hoverImage: string
  }
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4]">
            <img
              src={player.normalImage || "/placeholder.svg"}
              alt={player.name}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={player.hoverImage || "/placeholder.svg"}
              alt={`${player.name} action shot`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">{player.name}</h3>
            <p className="text-sm text-muted-foreground">
              {player.number} / {player.position}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

