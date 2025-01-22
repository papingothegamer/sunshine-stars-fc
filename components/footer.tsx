"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-secondary text-white">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Link href="/" className="flex items-center space-x-2">
              <img src="/media/img/badge.png" alt="Sunshine Stars FC" className="h-10 w-10" />
              <span className="text-lg font-bold">Sunshine Stars FC</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex space-x-6"
          >
            <Link href="https://twitter.com" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://facebook.com" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </motion.div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sunshine Stars FC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

