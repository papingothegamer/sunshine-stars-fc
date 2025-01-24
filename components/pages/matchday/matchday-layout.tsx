"use client"

import { motion } from "framer-motion"
import { StadiumAddress } from "./stadium-address"
import { MatchdayFAQ } from "./matchday-faq"
import { StadiumGallery } from "./stadium-gallery"
import { MatchdayInfo } from "./matchday-info"
import { MatchdayHero } from "./matchday-hero"

export function MatchdayLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-background to-secondary/10">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_25%,rgba(68,107,158,0.1)_50%,transparent_50%,transparent_75%,rgba(68,107,158,0.1)_75%)] bg-[length:24px_24px] pointer-events-none" />
      <div className="relative">
        <MatchdayHero />
        <main className="container mx-auto px-4 py-12">
          <div className="space-y-24">
            <StadiumGallery />
            <MatchdayInfo />
            <div className="max-w-2xl mx-auto">
              <StadiumAddress />
            </div>
            <div className="max-w-3xl mx-auto">
              <MatchdayFAQ />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

