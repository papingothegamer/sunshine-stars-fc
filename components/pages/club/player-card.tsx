"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
    <div>
      <Card className="overflow-hidden group relative bg-gradient-to-br from-background/50 to-background/10 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
        <CardContent className="p-0">
          {/* Player Number Badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="default" className="text-xl font-bold px-3 py-1.5 bg-primary/90 backdrop-blur-sm">
              {player.number}
            </Badge>
          </div>

          {/* Player Images */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[1]" />
            <img
              src={player.normalImage || "/placeholder.svg"}
              alt={player.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <img
              src={player.hoverImage || "/placeholder.svg"}
              alt={`${player.name} action shot`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>

          {/* Player Info */}
          <div className="relative z-10 -mt-20 pb-6 px-4">
            <div className="space-y-2 text-center">
              <h3 className="font-bold text-2xl text-white drop-shadow-lg">
                {player.name}
              </h3>
              <Badge 
                variant="secondary" 
                className="bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1"
              >
                {player.position}
              </Badge>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </CardContent>
      </Card>
    </div>
  )
}

