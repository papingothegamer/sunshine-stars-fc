"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSchedule } from "./schedule-provider"

export function CompetitionSelect() {
  const { selectedCompetition, setSelectedCompetition } = useSchedule()

  return (
    <Select value={selectedCompetition} onValueChange={(value) => setSelectedCompetition(value as any)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select competition" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Competitions</SelectItem>
        <SelectItem value="premier-league">Premier League</SelectItem>
        <SelectItem value="fa-cup">FA Cup</SelectItem>
        <SelectItem value="league-cup">League Cup</SelectItem>
      </SelectContent>
    </Select>
  )
}

