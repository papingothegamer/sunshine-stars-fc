"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Play, ArrowUpRight, Clock } from "lucide-react"
import { DiagonalPattern } from "./diagonal-pattern"
import Link from "next/link"
import { videos } from "@/lib/data/videos"
import { useRef } from "react"

export function HighlightsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const highlightVideos = videos
    .filter((video) => video.category === "highlights")
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)

  return (
    <section ref={containerRef} className="py-16 bg-muted relative overflow-hidden">
      <DiagonalPattern />
      <motion.div style={{ opacity, y }} className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">More Highlights</h2>
          <Link href="/news?tab=video" className="group flex items-center text-primary hover:underline">
            <span>View all videos</span>
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
                className="w-[320px] flex-shrink-0"
              >
                <Link href={`/news/video/${video.id}`}>
                  <div className="content-card">
                    <Card className="overflow-hidden bg-white hover-card">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="h-[180px] w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <Play className="h-12 w-12 text-white" />
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
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
      </motion.div>
    </section>
  )
}

