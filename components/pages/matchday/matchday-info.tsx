"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Coffee, Clock, Ticket } from "lucide-react"

const infoCards = [
  {
    title: "Parking",
    icon: Car,
    content:
      "Ample parking available at the stadium. Pre-book your spot or pay on arrival. Disabled parking spaces available.",
  },
  {
    title: "Refreshments",
    icon: Coffee,
    content: "Multiple food and beverage outlets throughout the stadium. Card payments accepted at all locations.",
  },
  {
    title: "Stadium Opening",
    icon: Clock,
    content: "Gates open 2 hours before kick-off. We recommend arriving early to avoid queues.",
  },
  {
    title: "Ticket Validation",
    icon: Ticket,
    content: "Digital and printed tickets accepted. Please have your ticket ready for scanning at the turnstiles.",
  },
]

export function MatchdayInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Essential Information</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {infoCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <card.icon className="h-5 w-5 text-primary" />
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{card.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

