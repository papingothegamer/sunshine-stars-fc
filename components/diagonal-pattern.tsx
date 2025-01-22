"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function DiagonalPattern() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 0.1])
  const translateX = useTransform(scrollYProgress, [0.5, 0.7], [-100, 0])

  return <motion.div className="diagonal-lines absolute inset-0 pointer-events-none" style={{ opacity, translateX }} />
}

