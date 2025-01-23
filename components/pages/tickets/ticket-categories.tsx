"use client"

import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "mens", label: "Men's" },
  { id: "womens", label: "Women's" },
  { id: "academy", label: "Academy" },
  { id: "events", label: "Events" },
]

export function TicketCategories() {
  return (
    <Tabs defaultValue="mens" className="w-full">
      <TabsList className="w-full justify-start bg-blue-700/50 h-auto flex-wrap">
        {categories.map((category) => (
          <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <TabsTrigger
              value={category.id}
              className="text-white data-[state=active]:bg-white data-[state=active]:text-blue-900"
            >
              {category.label}
            </TabsTrigger>
          </motion.div>
        ))}
      </TabsList>
    </Tabs>
  )
}

