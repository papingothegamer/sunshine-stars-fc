"use client"

import { motion } from "framer-motion"
import { format } from "date-fns"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"

interface Match {
  id: number
  competition: string
  date: Date
  homeTeam: string
  awayTeam: string
  homeScore?: number
  awayScore?: number
  venue: string
  status: "upcoming" | "live" | "finished"
}

const matches: Match[] = [
  {
    id: 1,
    competition: "Premier League",
    date: new Date("2025-02-15T15:00:00"),
    homeTeam: "Sunshine Stars",
    awayTeam: "Enyimba FC",
    venue: "Sunshine Stadium",
    status: "upcoming",
  },
  {
    id: 2,
    competition: "FA Cup",
    date: new Date("2025-02-03T20:00:00"),
    homeTeam: "Sunshine Stars",
    awayTeam: "Rivers United",
    homeScore: 2,
    awayScore: 1,
    venue: "Sunshine Stadium",
    status: "finished",
  },
  {
    id: 3,
    competition: "Premier League",
    date: new Date("2025-01-20T18:30:00"),
    homeTeam: "Kano Pillars",
    awayTeam: "Sunshine Stars",
    homeScore: 0,
    awayScore: 2,
    venue: "Sani Abacha Stadium",
    status: "finished",
  },
]

export function ScheduleView() {
  const groupedMatches = matches.reduce(
    (groups, match) => {
      const month = format(match.date, "MMMM yyyy")
      if (!groups[month]) {
        groups[month] = []
      }
      groups[month].push(match)
      return groups
    },
    {} as Record<string, Match[]>,
  )

  return (
    <div className="space-y-8">
      {Object.entries(groupedMatches).map(([month, monthMatches]) => (
        <motion.div
          key={month}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">{month}</h2>
          <div className="space-y-4">
            {monthMatches.map((match) => (
              <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="font-medium">
                          {match.competition}
                        </Badge>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{format(match.date, "EEE dd MMM yyyy")}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{format(match.date, "HH:mm")}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <img src="/placeholder.svg" alt={match.homeTeam} className="w-6 h-6 object-contain" />
                            <span className="font-medium">{match.homeTeam}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <img src="/placeholder.svg" alt={match.awayTeam} className="w-6 h-6 object-contain" />
                            <span className="font-medium">{match.awayTeam}</span>
                          </div>
                        </div>
                        {match.status === "finished" ? (
                          <div className="text-2xl font-bold tabular-nums">
                            {match.homeScore} - {match.awayScore}
                          </div>
                        ) : match.status === "live" ? (
                          <Badge variant="destructive">LIVE</Badge>
                        ) : (
                          <Badge variant="outline">Upcoming</Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Trophy className="h-4 w-4" />
                      {match.venue}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

