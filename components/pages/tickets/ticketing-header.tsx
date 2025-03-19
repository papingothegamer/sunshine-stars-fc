"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Users, Trophy, MapPin, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function TicketingHeader() {
  const pathname = usePathname()

  const categories = [
    { href: "/tickets", label: "Men's", icon: Users },
    { href: "/tickets/", label: "Women's", icon: Users },
    { href: "/tickets/", label: "Academy", icon: Star },
    { href: "/tickets/", label: "Youth Cup", icon: Trophy },
    { href: "/tickets/", label: "Stadium Tours", icon: MapPin },
    { href: "/tickets/", label: "Events", icon: Calendar },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-6"
          >
            Buy Tickets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 mb-8 max-w-2xl"
          >
            Secure your seat for upcoming matches and events. Experience the thrill of live football at Sunshine
            Stadium.
          </motion.p>

          <nav className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={category.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-colors",
                    isActive(category.href) ? "bg-primary text-white" : "bg-white/10 hover:bg-white/20 text-white",
                  )}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

