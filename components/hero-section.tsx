"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        style={{ 
          y, 
          opacity,
          backgroundImage: "url('https://brilanet.s3.amazonaws.com/wp-content/uploads/2019/12/26084719/dayo-ojo-sunshine-stars-mfm_1gk65lojfhcmn1076s1lnfjnf1.jpg')",
        }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={textVariants}
          className="text-center mb-8 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            Welcome to Sunshine Stars FC
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md ">Where Passion Meets Performance</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button 
            size="lg" 
            asChild 
            className="bg-primary hover:bg-primary/90 text-white font-anton text-lg shadow-lg transition-all hover:scale-105"
          >
            <Link href="/tickets">Buy Tickets</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 text-white hover:bg-white/30 font-anton text-lg border-2 shadow-lg transition-all hover:scale-105" 
            asChild
          >
            <Link href="/fan-shop">Shop Merchandise</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        onClick={scrollToContent}
      >
        <ChevronDown className="h-8 w-8" />
        <span className="sr-only">Scroll down</span>
      </motion.div>
    </div>
  )
}

