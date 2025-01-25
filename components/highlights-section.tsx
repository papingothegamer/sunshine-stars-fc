"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Play, ArrowUpRight } from "lucide-react"
import { DiagonalPattern } from "./diagonal-pattern"
import Link from "next/link"
import { videos } from "@/lib/data/videos"

export function HighlightsSection() {
  const highlightVideos = videos
    .filter((video) => video.category === "highlights")
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)

  return (
    <section className="py-12 bg-muted relative overflow-hidden">
      <DiagonalPattern />
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">More Highlights</h2>
          <Link href="/news?tab=video" className="text-primary hover:underline flex items-center">
            View all videos
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4">
            {highlightVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[300px] flex-shrink-0"
              >
                <Link href={`/news/video/${video.id}`}>
                  <div className="content-card">
                    <Card className="overflow-hidden bg-white">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="h-[169px] w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <Play className="h-12 w-12 text-white" />
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}

