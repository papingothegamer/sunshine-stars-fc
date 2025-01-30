"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function StadiumAddress() {
  const address = "Akure Township Stadium, Ondo State, Nigeria"
  const coordinates = { latitude: 7.2585265, longitude: 5.1896186 }

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${coordinates.latitude},${coordinates.longitude}`,
      "_blank",
    )
  }

  const openAppleMaps = () => {
    window.open(`http://maps.apple.com/?daddr=${coordinates.latitude},${coordinates.longitude}`, "_blank")
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <Card className="text-center bg-white/80 backdrop-blur-sm border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Find Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-lg">{address}</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button
              onClick={openGoogleMaps}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Open in Google Maps
            </Button>
            <Button
              onClick={openAppleMaps}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Open in Apple Maps
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

