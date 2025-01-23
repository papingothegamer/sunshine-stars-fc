"use client"

import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TicketCategories() {
  const categories = [
    { value: "all", label: "All Competitions" },
    { value: "premier-league", label: "Premier League" },
    { value: "fa-cup", label: "FA Cup" },
    { value: "league-cup", label: "League Cup" },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value} className="text-sm">
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </motion.div>
  )
}

