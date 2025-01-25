"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const images = [
  { src: "/placeholder.svg", alt: "Stadium exterior view" },
  { src: "/placeholder.svg", alt: "Stadium pitch view" },
  { src: "/placeholder.svg", alt: "Fan zone" },
  { src: "/placeholder.svg", alt: "Stadium entrance" },
  { src: "/placeholder.svg", alt: "Club shop" },
]

export function StadiumGallery() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h2 className="text-2xl font-bold">Stadium Gallery</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg">
        <div className="flex space-x-4 pb-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-[280px] flex-shrink-0"
            >
              <Card>
                <CardContent className="p-0">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="aspect-video w-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </motion.div>
  )
}

