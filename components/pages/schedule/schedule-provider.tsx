"use client"

import { createContext, useContext, useState } from "react"

type View = "schedule" | "standings" | "stats"
type Year = "2024" | "2023" | "2022"
type Competition = "all" | "premier-league" | "fa-cup" | "league-cup"

interface ScheduleContextType {
  currentView: View
  setCurrentView: (view: View) => void
  selectedYear: Year
  setSelectedYear: (year: Year) => void
  selectedCompetition: Competition
  setSelectedCompetition: (competition: Competition) => void
}

const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined)

export function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const [currentView, setCurrentView] = useState<View>("schedule")
  const [selectedYear, setSelectedYear] = useState<Year>("2024")
  const [selectedCompetition, setSelectedCompetition] = useState<Competition>("all")

  return (
    <ScheduleContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedYear,
        setSelectedYear,
        selectedCompetition,
        setSelectedCompetition,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}

export function useSchedule() {
  const context = useContext(ScheduleContext)
  if (context === undefined) {
    throw new Error("useSchedule must be used within a ScheduleProvider")
  }
  return context
}

