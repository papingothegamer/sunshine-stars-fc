"use client"

import { motion } from "framer-motion"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTicketDialog, TicketDialog } from "@/components/pages/tickets/ticket-dialog"

const matches = [
  {
    id: 1,
    homeTeam: "Sunshine Stars",
    awayTeam: "City Rangers",
    competition: "Premier League",
    date: new Date("2025-02-03T20:00:00"),
    venue: "Sunshine Stadium",
    isHome: true,
  },
  {
    id: 2,
    homeTeam: "Metro Knights",
    awayTeam: "Sunshine Stars",
    competition: "FA Cup",
    date: new Date("2025-02-10T15:00:00"),
    venue: "Metro Arena",
    isHome: false,
  },
  // Add more matches as needed
]

export function MatchList() {
  const { openDialog } = useTicketDialog()

  return (
    <div className="space-y-4">
      {matches.map((match, index) => (
        <motion.div
          key={match.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">{match.competition}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{format(match.date, "EEE dd MMM yyyy")}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{format(match.date, "HH:mm")}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">
                    {match.homeTeam} vs {match.awayTeam}
                  </h3>
                  <p className="text-sm text-muted-foreground">{match.venue}</p>
                </div>
                <Button onClick={() => openDialog(match)} className="min-w-[120px]">
                  Buy Tickets
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      <TicketDialog />
    </div>
  )
}

