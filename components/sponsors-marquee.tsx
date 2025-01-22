"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function SponsorsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const speed = useTransform(scrollYProgress, [0, 1], [40, 5])

  const sponsors = [
    { id: 1, name: "Sponsor 1", logo: "/media/img/sponsors/guinness-8-logo.png" },
    { id: 2, name: "Sponsor 2", logo: "/media/img/sponsors/StarTimes_B2C-02_(2).png" },
    { id: 3, name: "Sponsor 3", logo: "/media/img/sponsors/logo.png" },
    { id: 4, name: "Sponsor 4", logo: "/media/img/sponsors/bet9ja-icon-1024x385-lnsd9g6f.png" },
    { id: 5, name: "Sponsor 5", logo: "/media/img/sponsors/336903231_3409823546000567_5752475084276247710_n.svg" },
  ]

  return (
    <div ref={containerRef} className="w-full bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-3xl">Our Sponsors</h2>
      </div>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {[...sponsors, ...sponsors].map((sponsor, i) => (
          <div key={`${sponsor.id}-${i}`} className="mx-8">
            <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-16 w-auto object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

