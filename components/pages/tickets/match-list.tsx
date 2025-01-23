"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TicketDialog } from "./ticket-dialog"

const matches = [
  {
    id: 1,
    homeTeam: {
      name: "Sunshine Stars FC",
      logo: "/placeholder.svg",
    },
    awayTeam: {
      name: "Sporting Lagos",
      logo: "/placeholder.svg",
    },
    competition: "Premier League",
    date: "Sat 25 Jan 2025",
    time: "17:30",
    venue: "Akure Township Stadium",
    isHome: true,
  },
  // Add more matches...
]

export function MatchList() {
  const [selectedMatch, setSelectedMatch] = useState<(typeof matches)[0] | null>(null)

  return (
    <div className="space-y-4 mt-8">
      <h2 className="text-2xl text-orange-600 mb-4">January</h2>

      <div className="grid gap-4">
        {matches.map((match) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={match.homeTeam.logo || "/placeholder.svg"}
                    alt={match.homeTeam.name}
                    width={40}
                    height={40}
                  />
                  <span className="font-bold">vs</span>
                  <Image
                    src={match.awayTeam.logo || "/placeholder.svg"}
                    alt={match.awayTeam.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold">{match.awayTeam.name}</h3>
                  <p className="text-sm text-gray-600">{match.competition}</p>
                  <p className="text-sm text-gray-600">
                    {match.date} | {match.venue} | {match.time}
                  </p>
                </div>
              </div>
              <Button onClick={() => setSelectedMatch(match)} className="bg-blue-600 hover:bg-blue-700">
                View Tickets
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <TicketDialog match={selectedMatch} open={!!selectedMatch} onOpenChange={() => setSelectedMatch(null)} />
    </div>
  )
}

