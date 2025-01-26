"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  })

  const scale = useTransform(scrollYProgress, [0.1, 0.6], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

  return (
    <footer ref={footerRef} className="w-full bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Jumbo Text Section */}
        <motion.div style={{ scale, opacity }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Pride of Ondo State</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Sunshine Stars FC represents more than just football - we are the heartbeat of our community, the pride of
            our people, and the future of Nigerian football.
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-16">
          {[
            { icon: Facebook, href: "https://facebook.com" },
            { icon: Instagram, href: "https://instagram.com" },
            { icon: Twitter, href: "https://twitter.com" },
            { icon: Youtube, href: "https://youtube.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6" />
              <span className="sr-only">{social.icon.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-[1fr,2fr,1fr] gap-8 items-center">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <Link href="/" className="block">
                <img
                  src="/media/img/badge.png"
                  alt="Sunshine Stars FC"
                  className="h-16 w-16 object-contain"
                />
              </Link>
            </div>

            {/* Copyright Text */}
            <div className="text-center text-sm text-white/60">
              <p className="mb-2">© {new Date().getFullYear()} Sunshine Stars FC. All rights reserved.</p>
              <p>
                Sunshine Stars FC and associated logos are registered trademarks. Any unauthorized use is forbidden.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex justify-center md:justify-end space-x-6 text-sm">
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

