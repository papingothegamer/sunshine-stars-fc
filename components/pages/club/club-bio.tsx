"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"

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

export function ClubBio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-12"
    >
      <h2 className="text-3xl font-bold text-center mb-8">About Sunshine Stars FC</h2>
      <AspectRatio ratio={16 / 9} className="mb-8">
        <Image src="/placeholder.svg" alt="Sunshine Stars FC Stadium" layout="fill" objectFit="cover" priority />
      </AspectRatio>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-[50vh]">
            <Image src="/placeholder.svg" alt="Sunshine Stars FC Stadium" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Our History</h2>
              <p className="max-w-2xl">{clubInfo.history}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
            <ul className="space-y-2">
              {clubInfo.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>{clubInfo.vision}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Community Engagement</h3>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p>
              At Sunshine Stars FC, we believe in giving back to our community. We regularly organize youth football
              clinics, participate in local charity events, and work closely with schools to promote education alongside
              sports. Our players serve as role models, inspiring the next generation of football talent in Ondo State
              and beyond.
            </p>
            <div className="relative h-64">
              <Image src="/placeholder.svg" alt="Community Engagement" layout="fill" objectFit="cover" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src="/placeholder.svg"
                alt={`Sunshine Stars FC Gallery ${index}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h3>
        <p className="max-w-2xl mx-auto">
          Be part of the Sunshine Stars FC family. Together, we'll create unforgettable moments and achieve greatness on
          and off the pitch.
        </p>
      </div>
    </motion.div>
  )
}

