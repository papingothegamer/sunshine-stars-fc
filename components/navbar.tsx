"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingBag } from "lucide-react"
import { useState, useEffect } from "react"
import { useCart } from "@/components/cart/cart-context"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { cartItems } = useCart()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const menuItems = [
    { href: "/tickets", label: "Tickets" },
    { href: "/schedule", label: "Schedule" },
    { href: "/club", label: "Club" },
    { href: "/matchday", label: "Matchday" },
    { href: "/news", label: "News" },
    { href: "/fan-shop", label: "Fan Shop" },
  ]

  const handleLinkClick = () => {
    if (isMounted && window.innerWidth <= 768) {
      setIsMobileMenuOpen(false)
    }
  }

  const NavItems = () => (
    <>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-secondary hover:text-primary transition-colors px-3"
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
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.img
            src="/media/img/badge.png"
            alt="Sunshine Stars FC"
            className="h-10 w-10"
            whileHover={{ scale: 1.1 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <NavItems />
        </nav>

        {/* Mobile Menu and Cart */}
        <div className="flex items-center space-x-4">
          {isMounted && window.innerWidth <= 768 && (
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
          )}
          <Link href="/cart" className="relative">
            <ShoppingBag className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </motion.header>
  )
}

