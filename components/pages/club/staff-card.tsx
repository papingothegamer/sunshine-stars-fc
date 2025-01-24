"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface StaffCardProps {
  staff: {
    id: number
    name: string
    role: string
    image: string
  }
}

export function StaffCard({ staff }: StaffCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-[3/4]">
            <img src={staff.image || "/placeholder.svg"} alt={staff.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">{staff.name}</h3>
            <p className="text-sm text-muted-foreground">{staff.role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

