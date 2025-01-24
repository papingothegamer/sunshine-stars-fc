"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TeamStanding {
  id: number
  name: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
  form: ("W" | "D" | "L")[]
}

const standings: TeamStanding[] = [
  {
    id: 1,
    name: "Enyimba FC",
    played: 24,
    won: 15,
    drawn: 5,
    lost: 4,
    goalsFor: 45,
    goalsAgainst: 20,
    goalDifference: 25,
    points: 50,
    form: ["W", "W", "D", "W", "L"],
  },
  {
    id: 2,
    name: "Sunshine Stars",
    played: 24,
    won: 14,
    drawn: 6,
    lost: 4,
    goalsFor: 38,
    goalsAgainst: 22,
    goalDifference: 16,
    points: 48,
    form: ["W", "D", "W", "W", "W"],
  },
  {
    id: 3,
    name: "Rivers United",
    played: 24,
    won: 13,
    drawn: 7,
    lost: 4,
    goalsFor: 35,
    goalsAgainst: 19,
    goalDifference: 16,
    points: 46,
    form: ["L", "W", "W", "D", "W"],
  },
  // Add more teams as needed
]

export function StandingsView() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Pos</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">P</TableHead>
                <TableHead className="text-center">W</TableHead>
                <TableHead className="text-center">D</TableHead>
                <TableHead className="text-center">L</TableHead>
                <TableHead className="text-center">GF</TableHead>
                <TableHead className="text-center">GA</TableHead>
                <TableHead className="text-center">GD</TableHead>
                <TableHead className="text-center">Pts</TableHead>
                <TableHead className="text-right">Form</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {standings.map((team, index) => (
                <TableRow key={team.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img src="/placeholder.svg" alt="" className="w-6 h-6 object-contain" />
                      <span className="font-medium">{team.name}</span>
                      {team.name === "Sunshine Stars" && <Star className="h-4 w-4 text-primary" fill="currentColor" />}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{team.played}</TableCell>
                  <TableCell className="text-center">{team.won}</TableCell>
                  <TableCell className="text-center">{team.drawn}</TableCell>
                  <TableCell className="text-center">{team.lost}</TableCell>
                  <TableCell className="text-center">{team.goalsFor}</TableCell>
                  <TableCell className="text-center">{team.goalsAgainst}</TableCell>
                  <TableCell className="text-center">{team.goalDifference}</TableCell>
                  <TableCell className="text-center font-bold">{team.points}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      {team.form.map((result, i) => (
                        <span
                          key={i}
                          className={`inline-flex h-6 w-6 items-center justify-center rounded-sm text-[10px] font-bold text-white ${
                            result === "W" ? "bg-emerald-500" : result === "D" ? "bg-yellow-500" : "bg-red-500"
                          }`}
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </div>
  )
}

