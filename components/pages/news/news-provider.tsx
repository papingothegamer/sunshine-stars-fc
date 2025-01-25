"use client"

import { createContext, useContext, useState } from "react"

type View = "latest" | "video"

interface NewsContextType {
  currentView: View
  setCurrentView: (view: View) => void
}

const NewsContext = createContext<NewsContextType | undefined>(undefined)

export function NewsProvider({ children }: { children: React.ReactNode }) {
  const [currentView, setCurrentView] = useState<View>("latest")

  return (
    <NewsContext.Provider
      value={{
        currentView,
        setCurrentView,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export function useNews() {
  const context = useContext(NewsContext)
  if (context === undefined) {
    throw new Error("useNews must be used within a NewsProvider")
  }
  return context
}

