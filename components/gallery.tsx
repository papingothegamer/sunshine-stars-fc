"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface GalleryProps {
  images: {
    src: string
    alt: string
  }[]
  columns?: 2 | 3 | 4
}

export function Gallery({ images, columns = 4 }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative aspect-square rounded-xl overflow-hidden group"
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-sm font-medium truncate">{image.alt}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}