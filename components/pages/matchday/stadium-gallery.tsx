"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { X } from "lucide-react"

const images = [
  { src: "/placeholder.svg", alt: "Stadium exterior view" },
  { src: "/placeholder.svg", alt: "Stadium pitch view" },
  { src: "/placeholder.svg", alt: "Fan zone" },
  { src: "/placeholder.svg", alt: "Stadium entrance" },
  { src: "/placeholder.svg", alt: "Club shop" },
]

export function StadiumGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
              <Card className="cursor-pointer" onClick={() => setSelectedImage(index)}>
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

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 m-0 p-0"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

