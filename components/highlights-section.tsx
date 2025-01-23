"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Play } from "lucide-react"
import { DiagonalPattern } from "./diagonal-pattern"

export function HighlightsSection() {
  const content = [
    {
      id: 1,
      type: "video",
      title: "Match Highlights: Sunshine Stars vs. City Rangers",
      duration: "4:30",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 2,
      type: "article",
      title: "Team Analysis: Tactical Evolution Under New Coach",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 3,
      type: "video",
      title: "Match Highlights: Sunshine Stars vs. Metro Knights",
      duration: "4:45",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 4,
      type: "article",
      title: "Rising Star: Young Talent Making Waves",
      thumbnail: "/placeholder.svg",
    },
  ]

  return (
    <section className="py-8 bg-muted relative">
      <DiagonalPattern />
      <div className="container relative">
        <h2 className="text-2xl mb-6 ">More Highlights</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 p-4">
            {content.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-[300px]"
              >
                <div className="content-card">
                  <Card className="overflow-hidden bg-white">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt=""
                          className="h-[169px] w-full object-cover"
                        />
                        {item.type === "video" && (
                          <>
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <Play className="h-12 w-12 text-white" />
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                              {item.duration}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}

