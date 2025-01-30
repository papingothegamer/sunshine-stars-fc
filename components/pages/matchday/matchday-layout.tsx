"use client"

import { motion } from "framer-motion"
import { OurStadium } from "./our-stadium"
import { MatchdayInfo } from "./matchday-info"
import { StadiumAddress } from "./stadium-address"
import { MatchdayFAQ } from "./matchday-faq"
import { useState, useEffect } from "react"

export function MatchdayLayout() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newScale = 1 - (scrollY / window.innerHeight) * 0.1
      setScale(Math.max(newScale, 0.9))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 bg-[url('/stadium-pattern.svg')] bg-repeat opacity-5" />
      <div className="relative">
        <OurStadium scale={scale} />
        <main className="container mx-auto px-4 py-12">
          <div className="space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-6">Experience the Thrill</h2>
              <p>
                Sunshine Stadium is more than just a venue; it's the beating heart of our club. With its modern
                facilities, excellent sightlines, and passionate fans, every match day becomes an unforgettable
                experience. From the roar of the crowd to the electric atmosphere, this is where legends are made and
                memories are created.
              </p>
              <p>
                Our stadium features state-of-the-art amenities, including comfortable seating, wide concourses, and a
                variety of food and beverage options. The pitch is maintained to the highest standards, ensuring
                top-quality football for every match. Whether you're a die-hard fan or a first-time visitor, Sunshine
                Stadium promises an exciting and immersive football experience.
              </p>
            </motion.div>
            <MatchdayInfo />
            <StadiumAddress />
            <div className="max-w-3xl mx-auto">
              <MatchdayFAQ />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

