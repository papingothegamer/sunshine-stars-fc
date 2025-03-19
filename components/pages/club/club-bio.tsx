"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Trophy, Users, Target, Star } from "lucide-react"
import { Gallery } from "@/components/gallery"
import { StarPattern } from "./star-pattern"

const clubInfo = {
  history: `Sunshine Stars Football Club was founded in 1995 in Akure, Ondo State, Nigeria. The club quickly rose through the ranks of Nigerian football, earning promotion to the Nigeria Premier League in 2001. Since then, Sunshine Stars has established itself as a formidable force in Nigerian football, consistently competing at the highest level.`,
  achievements: [
    "Nigeria Premier League Runners-up (2011)",
    "CAF Champions League Semi-finalists (2012)",
    "Federation Cup Runners-up (2016)",
    "Ondo State FA Cup Winners (Multiple times)",
  ],
  vision: `Our vision is to become the leading football club in Nigeria and Africa, known for our exciting style of play, youth development, and community engagement. We strive to inspire and unite our fans, while consistently competing for domestic and continental honors.`,
}

const galleryImages = [
  {
    src: "/media/img/club/gallery/match1.jpg",
    alt: "Match Day Highlights",
  },
  {
    src: "/media/img/club/gallery/training1.jpg",
    alt: "Team Training Session",
  },
  {
    src: "/media/img/club/gallery/fans1.jpg",
    alt: "Passionate Fans",
  },
  {
    src: "/media/img/club/gallery/celebration1.jpg",
    alt: "Victory Celebration",
  },
  // Add more images as needed
]

export function ClubBio() {
  return (
    <div className="relative">
      <StarPattern />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 space-y-8 sm:space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Hero Section */}
        <div className="text-center space-y-3 sm:space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary font-anton"
          >
            About Sunshine Stars FC
          </motion.h1>
          <p className="text-base sm:text-lg text-secondary/80 max-w-3xl mx-auto font-medium">
            A legacy of excellence in Nigerian football since 1995
          </p>
        </div>

        {/* Stadium Image */}
        <Card className="overflow-hidden border-0 shadow-2xl">
          <CardContent className="p-0">
            <AspectRatio ratio={21 / 9}>
              <Image 
                src="/media/img/club/stadium/66698a49a0d41.jpg" 
                alt="Sunshine Stars FC Stadium" 
                layout="fill" 
                objectFit="cover" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-anton mb-2">Akure Township Stadium</h2>
                <p className="text-white/90">Our fortress and home ground since 1995</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        {/* History Section */}
        <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm border-primary/10">
          <CardContent className="p-4 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold font-anton">Our History</h2>
            </div>
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {clubInfo.history}
            </p>
          </CardContent>
        </Card>

        {/* Achievements & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
            <CardContent className="p-4 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold font-anton">Key Achievements</h3>
              </div>
              <ul className="space-y-4">
                {clubInfo.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-base sm:text-lg">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
            <CardContent className="p-4 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold font-anton">Our Vision</h3>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">{clubInfo.vision}</p>
            </CardContent>
          </Card>
        </div>

        {/* Community Engagement */}
        <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
          <CardContent className="p-4 sm:p-8">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold font-anton">Community Engagement</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start sm:items-center">
              <p className="text-base sm:text-lg leading-relaxed">
                At Sunshine Stars FC, we believe in giving back to our community. We regularly organize youth football
                clinics, participate in local charity events, and work closely with schools to promote education alongside
                sports. Our players serve as role models, inspiring the next generation of football talent in Ondo State
                and beyond.
              </p>
              <div className="relative h-60 sm:h-80 rounded-xl overflow-hidden">
                <Image 
                  src="https://www.telecomasia.net/upload/iblock/761/761253ba06e6bea8ada2faf5b7716177.jpg" 
                  alt="Community Engagement" 
                  layout="fill" 
                  objectFit="cover"
                  className="transform transition-transform duration-700 hover:scale-105" 
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-anton text-secondary">
              Gallery
            </h3>
            <p className="text-base sm:text-lg text-secondary/80">
              Capturing moments that define our journey
            </p>
          </div>
          <Gallery images={galleryImages} />
        </div>

        <Separator className="bg-primary/20" />

        {/* Call to Action */}
        <div className="text-center space-y-6 pb-8">
          <h3 className="text-4xl font-bold font-anton text-secondary">Join Us on Our Journey</h3>
          <p className="text-lg max-w-2xl mx-auto text-secondary/80">
            Be part of the Sunshine Stars FC family. Together, we'll create unforgettable moments and achieve greatness on
            and off the pitch.
          </p>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </div>
  )
}

