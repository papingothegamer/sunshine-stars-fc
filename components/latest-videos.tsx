"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ArrowUpRight, Clock } from "lucide-react"
import Link from "next/link"
import { videos } from "@/lib/data/videos"
import { Badge } from "@/components/ui/badge"

export function LatestVideos({ hideViewAll = false}) {
  // Randomly select videos
  const shuffledVideos = [...videos].sort(() => Math.random() - 0.5)
  const featuredVideo = shuffledVideos[0]
  const sidebarVideos = shuffledVideos.slice(1, 4)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Videos</h2>
          {!hideViewAll && (
            <Link href="/news?tab=video" className="group flex items-center text-primary hover:underline">
              <span>View all videos</span>
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 lg:grid-cols-3"
        >
          <motion.div variants={item} className="lg:col-span-2">
            <Link href={`/news/video/${featuredVideo.id}`}>
              <Card className="overflow-hidden hover-card">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={featuredVideo.thumbnail || "/placeholder.svg"}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-primary/90 text-white">{featuredVideo.category.split("-").join(" ")}</Badge>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {featuredVideo.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{featuredVideo.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <div className="space-y-4">
            {sidebarVideos.map((video, index) => (
              <motion.div key={video.id} variants={item}>
                <Link href={`/news/video/${video.id}`}>
                  <Card className="overflow-hidden hover:bg-muted transition-colors hover-card">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-32 h-20 flex-shrink-0">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt=""
                            className="w-full h-full object-cover rounded"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded flex items-center">
                            <Clock className="h-2 w-2 mr-0.5" />
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-medium line-clamp-2">{video.title}</h4>
                          <span className="text-xs text-muted-foreground mt-auto">
                            {video.category.split("-").join(" ")}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

