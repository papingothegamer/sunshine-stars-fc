"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Megaphone } from "lucide-react"

export function TicketingHeader() {
  const categories = [
    { href: "/tickets/mens", label: "Men's" },
    { href: "/tickets/academy", label: "Academy" },
    { href: "/tickets/events", label: "Events" },
  ]

  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Buy Tickets
          </motion.h1>
          <nav className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {category.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

