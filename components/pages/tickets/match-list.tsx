"use client"

import { motion } from "framer-motion"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTicketDialog, TicketDialog } from "@/components/pages/tickets/ticket-dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

const matches = [
  {
    id: 1,
    homeTeam: "Sunshine Stars",
    homeTeamLogo: "/placeholder.svg",
    awayTeam: "City Rangers",
    awayTeamLogo: "/placeholder.svg",
    competition: "Premier League",
    date: new Date("2025-02-03T20:00:00"),
    venue: "Sunshine Stadium",
    isHome: true,
  },
  {
    id: 2,
    homeTeam: "Metro Knights",
    homeTeamLogo: "/placeholder.svg",
    awayTeam: "Sunshine Stars",
    awayTeamLogo: "/placeholder.svg",
    competition: "FA Cup",
    date: new Date("2025-02-10T15:00:00"),
    venue: "Metro Arena",
    isHome: false,
  },
  {
    id: 3,
    homeTeam: "Sunshine Stars",
    homeTeamLogo: "/placeholder.svg",
    awayTeam: "Coastal United",
    awayTeamLogo: "/placeholder.svg",
    competition: "Premier League",
    date: new Date("2025-02-17T18:30:00"),
    venue: "Sunshine Stadium",
    isHome: true,
  },
  {
    id: 4,
    homeTeam: "Mountain FC",
    homeTeamLogo: "/placeholder.svg",
    awayTeam: "Sunshine Stars",
    awayTeamLogo: "/placeholder.svg",
    competition: "League Cup",
    date: new Date("2025-02-24T19:45:00"),
    venue: "Peak Stadium",
    isHome: false,
  },
]

export function MatchList() {
  const { openDialog } = useTicketDialog()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
      {matches.map((match) => (
        <motion.div key={match.id} variants={item}>
          <Card className="overflow-hidden hover-card">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[1fr,auto] gap-4">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="font-medium">
                      {match.competition}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{format(match.date, "EEE dd MMM yyyy")}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{format(match.date, "HH:mm")}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <img
                          src={match.homeTeamLogo || "/placeholder.svg"}
                          alt={match.homeTeam}
                          className="w-12 h-12 object-contain mb-2"
                        />
                        <span className="font-medium text-sm">{match.homeTeam}</span>
                      </div>

                      <div className="text-2xl font-bold">VS</div>

                      <div className="flex flex-col items-center">
                        <img
                          src={match.awayTeamLogo || "/placeholder.svg"}
                          alt={match.awayTeam}
                          className="w-12 h-12 object-contain mb-2"
                        />
                        <span className="font-medium text-sm">{match.awayTeam}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{match.venue}</span>
                  </div>
                </div>

                <div className="bg-muted p-6 flex items-center">
                  <Button onClick={() => openDialog(match)} className="min-w-[120px]" size="lg">
                    Buy Tickets
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      <TicketDialog />
    </motion.div>
  )
}