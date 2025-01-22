"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const menuItems = [
    { href: "/tickets", label: "Tickets" },
    { href: "/schedule", label: "Schedule" },
    { href: "/club", label: "Club" },
    { href: "/matchday", label: "Matchday" },
    { href: "/news", label: "News" },
    { href: "/video", label: "Video" },
  ]

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.img
            src="/media/img/badge.png"
            alt="Sunshine Stars FC"
            className="h-10 w-10"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}

