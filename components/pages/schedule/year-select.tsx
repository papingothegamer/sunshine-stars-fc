"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSchedule } from "./schedule-provider"

export function YearSelect() {
  const { selectedYear, setSelectedYear } = useSchedule()

  return (
    <Select value={selectedYear} onValueChange={(value) => setSelectedYear(value as any)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select year" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2024">2024</SelectItem>
        <SelectItem value="2023">2023</SelectItem>
        <SelectItem value="2022">2022</SelectItem>
      </SelectContent>
    </Select>
  )
}

