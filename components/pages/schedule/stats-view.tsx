"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface PlayerStats {
  id: number
  name: string
  position: string
  appearances: number
  goals: number
  assists: number
  cleanSheets?: number
  minutesPlayed: number
}

const playerStats: PlayerStats[] = [
  {
    id: 1,
    name: "Sunday Adetunji",
    position: "Forward",
    appearances: 22,
    goals: 15,
    assists: 7,
    minutesPlayed: 1890,
  },
  {
    id: 2,
    name: "Kehinde Adedipe",
    position: "Midfielder",
    appearances: 24,
    goals: 8,
    assists: 12,
    minutesPlayed: 2160,
  },
  {
    id: 3,
    name: "Moses Ocheje",
    position: "Goalkeeper",
    appearances: 24,
    goals: 0,
    assists: 0,
    cleanSheets: 10,
    minutesPlayed: 2160,
  },
  // Add more players as needed
]

const teamStats = {
  goalsScored: 38,
  goalsConceded: 22,
  cleanSheets: 10,
  possession: 54.5,
  passAccuracy: 82.3,
  shotsPerGame: 14.2,
}

export function StatsView() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Goals Scored</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.goalsScored}</div>
            <p className="text-xs text-muted-foreground">1.58 goals per game</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Clean Sheets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.cleanSheets}</div>
            <p className="text-xs text-muted-foreground">41.7% of games</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Possession</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.possession}%</div>
            <p className="text-xs text-muted-foreground">Average per game</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Player Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Player</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead className="text-center">Apps</TableHead>
                  <TableHead className="text-center">Goals</TableHead>
                  <TableHead className="text-center">Assists</TableHead>
                  <TableHead className="text-center">Minutes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {playerStats.map((player) => (
                  <TableRow key={player.id}>
                    <TableCell className="font-medium">{player.name}</TableCell>
                    <TableCell>{player.position}</TableCell>
                    <TableCell className="text-center">{player.appearances}</TableCell>
                    <TableCell className="text-center">{player.goals}</TableCell>
                    <TableCell className="text-center">{player.assists}</TableCell>
                    <TableCell className="text-center">{player.minutesPlayed}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

