"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { 
  shopPlayers as players, 
  getFeaturedPlayersByPosition, 
  getAllFeaturedPlayers, 
  Player,
  type Player as PlayerType 
} from "@/lib/data/players"
import { createPlayerKit } from "@/lib/data/products"
import { ProductCard } from "@/components/pages/fan-shop/product-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"

export default function ShopByPlayerPage() {
  const [activePosition, setActivePosition] = useState<string>("all")
  const [activeTeam, setActiveTeam] = useState<string>("mens")

  const playersByPosition: Record<string, PlayerType[]> = {
    Goalkeeper: getFeaturedPlayersByPosition("Goalkeeper"),
    Defender: getFeaturedPlayersByPosition("Defender"),
    Midfielder: getFeaturedPlayersByPosition("Midfielder"),
    Forward: getFeaturedPlayersByPosition("Forward")
  }
  
  const positions = ["all", ...Object.keys(playersByPosition)]

  const filteredPlayers: PlayerType[] = activePosition === "all" 
    ? getAllFeaturedPlayers() 
    : (playersByPosition[activePosition] ?? [])

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            <div className="flex gap-4">
              <Button
                variant={activeTeam === "mens" ? "default" : "ghost"}
                onClick={() => setActiveTeam("mens")}
                className="text-lg font-bold font-anton"
              >
                MEN'S TEAM
              </Button>
            </div>
            <Link href="/fan-shop">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Fan Shop
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {positions.map((position) => (
            <Button
              key={position}
              variant={activePosition === position ? "default" : "outline"}
              onClick={() => setActivePosition(position)}
              className="min-w-max"
            >
              {position === "all" ? "All Positions" : `${position}s`}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player: PlayerType, index: number) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard
                product={createPlayerKit(player)}
                index={index}
                href={`/fan-shop/player-kit/home-kit-2025-${player.id}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

