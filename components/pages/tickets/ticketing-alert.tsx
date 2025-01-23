"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Info, ArrowRight, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TicketingAlertProps {
  type: "warning" | "info"
  message: string
}

export function TicketingAlert({ type, message }: TicketingAlertProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full ${type === "warning" ? "bg-primary" : "bg-secondary"} text-white py-4`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {type === "warning" ? <Megaphone className="h-5 w-5" /> : <Info className="h-5 w-5" />}
            <p className="text-sm md:text-base">{message}</p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-2 text-white hover:text-white/90">
            More Info
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

