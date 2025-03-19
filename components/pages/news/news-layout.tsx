"use client"

import { motion } from "framer-motion"
import { useNews } from "./news-provider"
import { NewsNav } from "./news-nav"
import { LatestNews } from "./latest-news"
import { VideoNews } from "./video-news"
import { StarPattern } from "@/components/pages/club/star-pattern"

export function NewsLayout() {
  const { currentView } = useNews()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-secondary via-background to-primary/10">
      <StarPattern />
      <div className="relative flex flex-col min-h-screen">
        <header className="w-full bg-secondary/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="py-6 sm:py-8 space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl font-anton text-center text-white"
              >
                Latest Updates
              </motion.h1>
              <div className="flex justify-center">
                <NewsNav />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 w-full">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              {currentView === "latest" && <LatestNews />}
              {currentView === "video" && <VideoNews />}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}

