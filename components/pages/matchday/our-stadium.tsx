"use client"

import { useRef } from "react"
import { motion, useTransform, MotionValue } from "framer-motion"
import { useScroll } from "framer-motion"

export function OurStadium({ scale }: { scale: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const scaleAnimation = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  // Create a new transform that combines scale with scaleAnimation
  const combinedScale = useTransform(scaleAnimation, (latest) => latest * scale)

  return (
    <div ref={ref} className="relative h-[80vh] overflow-hidden">
      <motion.div
        style={{
          scale: combinedScale,
          backgroundImage: "url('/placeholder.svg')", // Replace with actual stadium image
        }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white p-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sunshine Stadium</h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl">
          Home to Sunshine Stars FC, our state-of-the-art stadium boasts a capacity of 30,000 and provides an
          electrifying atmosphere for fans and players alike.
        </p>
      </motion.div>
    </div>
  )
}