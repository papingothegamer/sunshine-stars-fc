"use client"

import { motion } from "framer-motion"
import { useNews } from "./news-provider"
import { NewsNav } from "./news-nav"
import { LatestNews } from "./latest-news"
import { VideoNews } from "./video-news"

export function NewsLayout() {
  const { currentView } = useNews()

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_25%,rgba(68,107,158,0.1)_50%,transparent_50%,transparent_75%,rgba(68,107,158,0.1)_75%)] bg-[length:24px_24px] pointer-events-none" />
      <div className="relative">
        <header className="bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="py-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl mb-4"
              >
                News
              </motion.h1>
              <NewsNav />
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {currentView === "latest" && <LatestNews />}
            {currentView === "video" && <VideoNews />}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

