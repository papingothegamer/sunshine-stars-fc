"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { shopPlayers as players } from "@/lib/data/players"

export function ShopByPlayer() {
  const featuredPlayer = players[0] // First player as featured

  return (
    <section className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold">SHOP BY PLAYER</h2>
            <p className="text-lg text-white/80">
              Customize your 24/25 Sunshine Stars Home Kit with the official Premier League & Club font. Pick from our
              star players and show your support.
            </p>
            <Link href="/fan-shop/players">
              <Button size="lg" className="bg-primary hover:bg-primary/90 mt-4">
                SHOP ALL PLAYERS
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[3/4] bg-gradient-to-br from-secondary to-primary/10 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={featuredPlayer.image || "/placeholder.svg"}
                alt={`${featuredPlayer.name} Kit`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent h-1/3" />
            <div className="absolute bottom-4 left-4">
              <p className="text-2xl font-bold">{featuredPlayer.name}</p>
              <p className="text-white/80">#{featuredPlayer.number}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

