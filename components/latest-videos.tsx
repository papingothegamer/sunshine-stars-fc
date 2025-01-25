"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { videos } from "@/lib/data/videos"

export function LatestVideos() {
  // Randomly select 4 videos
  const shuffledVideos = [...videos].sort(() => Math.random() - 0.5)
  const featuredVideo = shuffledVideos[0]
  const sidebarVideos = shuffledVideos.slice(1, 4)

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl">Latest Videos</h2>
          <Link href="/news?tab=video" className="text-primary hover:underline flex items-center">
            View all videos
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:col-span-2">
            <Link href={`/news/video/${featuredVideo.id}`}>
              <Card className="overflow-hidden">
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
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                      {featuredVideo.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{featuredVideo.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
          <div className="space-y-4">
            {sidebarVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/news/video/${video.id}`}>
                  <Card className="overflow-hidden hover:bg-muted transition-colors">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-32 h-20 flex-shrink-0">
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt=""
                            className="w-full h-full object-cover rounded"
                          />
                          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <h4 className="text-sm font-medium">{video.title}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

