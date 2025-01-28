"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ShopHero() {
  return (
    <div className="relative bg-secondary text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_25%,rgba(68,107,158,0.1)_50%,transparent_50%,transparent_75%,rgba(68,107,158,0.1)_75%)] bg-[length:24px_24px]" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">HOME KIT 30% OFF INCLUDING PLAYER PRINTING</h1>
            <p className="text-lg md:text-xl text-white/80">
              Get 30% off all Home Kits, including shirts, shorts and socks. Personalise your Home Shirt with your
              favourite player.
            </p>
            <Link href="/fan-shop/category/kits">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                SHOP NOW
              </Button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <img src="/placeholder.svg" alt="Sunshine Stars FC Home Kit" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

