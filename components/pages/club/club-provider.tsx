"use client"

import { createContext, useContext, useState } from "react"

type View = "bio" | "players" | "technical-team" | "coaches"

interface ClubContextType {
  currentView: View
  setCurrentView: (view: View) => void
}

const ClubContext = createContext<ClubContextType | undefined>(undefined)

export function ClubProvider({ children }: { children: React.ReactNode }) {
  const [currentView, setCurrentView] = useState<View>("bio")

  return (
    <ClubContext.Provider
      value={{
        currentView,
        setCurrentView,
      }}
    >
      {children}
    </ClubContext.Provider>
  )
}

export function useClub() {
  const context = useContext(ClubContext)
  if (context === undefined) {
    throw new Error("useClub must be used within a ClubProvider")
  }
  return context
}

