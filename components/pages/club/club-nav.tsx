"use client"

import { motion } from "framer-motion"
import { useClub } from "./club-provider"
import { cn } from "@/lib/utils"

export function ClubNav() {
  const { currentView, setCurrentView } = useClub()

  const items = [
    { value: "bio", label: "About" },
    { value: "players", label: "Players" },
    { value: "technical-team", label: "Technical Team" },
    { value: "coaches", label: "Coaches" },
  ] as const

  return (
    <nav className="flex space-x-4 overflow-x-auto pb-2">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => setCurrentView(item.value)}
          className={cn(
            "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
            currentView === item.value ? "text-primary" : "text-white/80",
          )}
        >
          {item.label}
          {currentView === item.value && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </nav>
  )
}

