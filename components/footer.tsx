"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  })

  const scale = useTransform(scrollYProgress, [0.1, 0.6], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

  const quickLinks = [
    { href: "/tickets", label: "Tickets" },
    { href: "/schedule", label: "Schedule" },
    { href: "/club", label: "Club" },
    { href: "/matchday", label: "Matchday" },
    { href: "/news", label: "News" },
    { href: "/fan-shop", label: "Fan Shop" },
  ]

  const supportLinks = [
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQs" },
    { href: "/accessibility", label: "Accessibility" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
  ]

  return (
    <footer ref={footerRef} className="w-full bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Jumbo Text Section */}
        <motion.div style={{ scale, opacity }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-anton mb-4">The Pride of Ondo State</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Sunshine Stars FC represents more than just football - we are the heartbeat of our community, the pride of
            our people, and the future of Nigerian football.
          </p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Club Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sunshine Stars FC</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Akure Township Stadium, Ondo State, Nigeria</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>+234 123 456 7890</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span>info@sunshinestarsfc.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest news, updates, and special offers.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-primary hover:bg-primary-600">Subscribe</Button>
            </div>
          </div>
        </div>

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
                <img src="/media/img/badge.png" alt="Sunshine Stars FC" className="h-16 w-16 object-contain" />
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

