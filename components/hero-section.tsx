"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y, backgroundImage: "url('/placeholder.svg')" }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-500"
        style={{
          opacity: inView ? 0.5 : 0,
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={textVariants}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Sunshine Stars FC</h1>
          <p className="text-xl md:text-2xl">Where Passion Meets Performance</p>
        </motion.div>
      </div>
    </div>
  )
}