"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function StarPattern() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 0.1])
  const translateX = useTransform(scrollYProgress, [0.5, 0.7], [-100, 0])

  return (
    <motion.div
      className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,136,0,0.1)_25%,rgba(255,136,0,0.1)_50%,transparent_50%,transparent_75%,rgba(255,136,0,0.1)_75%)] bg-[length:24px_24px] pointer-events-none"
      style={{ opacity, translateX }}
    />
  )
}

