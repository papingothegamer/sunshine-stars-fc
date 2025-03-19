"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { videos } from "@/lib/data/videos"
import Link from "next/link"
import { Play, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function VideoNews() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/news/video/${video.id}`}>
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-primary/10">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={video.thumbnail || "/placeholder.svg"} 
                    alt="" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-primary/90 text-white backdrop-blur-sm">
                      {video.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded-full flex items-center backdrop-blur-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

