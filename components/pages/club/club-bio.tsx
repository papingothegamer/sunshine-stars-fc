"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

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
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-center">About Sunshine Stars FC</h2>
      <Card>
        <CardContent className="p-6 space-y-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our History</h3>
              <p className="text-muted-foreground">{clubInfo.history}</p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg"
                alt="Sunshine Stars FC Stadium"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {clubInfo.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="order-2 md:order-1 relative h-64 md:h-full">
              <Image
                src="/placeholder.svg"
                alt="Sunshine Stars FC Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">{clubInfo.vision}</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Community Engagement</h3>
            <p className="text-muted-foreground">
              At Sunshine Stars FC, we believe in giving back to our community. We regularly organize youth football
              clinics, participate in local charity events, and work closely with schools to promote education alongside
              sports. Our players serve as role models, inspiring the next generation of football talent in Ondo State
              and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="relative h-40">
                <Image
                  src="/placeholder.svg"
                  alt={`Sunshine Stars FC Gallery ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

