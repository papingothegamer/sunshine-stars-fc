"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile])

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false)
    }
  }

  const menuItems = [
    { href: "/tickets", label: "Tickets" },
    { href: "/schedule", label: "Schedule" },
    { href: "/club", label: "Club" },
    { href: "/matchday", label: "Matchday" },
    { href: "/news", label: "News" },
    { href: "/fan-shop", label: "Fan Shop" },
  ]

  const NavItems = () => (
    <>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-secondary hover:text-primary transition-colors"
          onClick={handleLinkClick}
        >
          {item.label}
        </Link>
      ))}
    </>
  )

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
        {isMobile ? (
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex-1 flex justify-center">
            <nav className="flex items-center space-x-6">
              <NavItems />
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  )
}