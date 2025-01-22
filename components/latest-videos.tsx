"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export function LatestVideos() {
  const featuredVideo = {
    id: 1,
    title: "Match Highlights: Sunshine Stars vs. City Rangers",
    thumbnail: "/placeholder.svg",
  }

  const sidebarVideos = [
    {
      id: 2,
      title: "Post-Match Interview: Coach's Analysis",
      duration: "2:15",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Training Ground: Preparation for Next Match",
      duration: "3:45",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Fan Reactions: Match Day Experience",
      duration: "1:30",
      thumbnail: "/placeholder.svg",
    },
  ]

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-8">Latest Videos</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:col-span-2">
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
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{featuredVideo.title}</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <div className="space-y-4">
            {sidebarVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

