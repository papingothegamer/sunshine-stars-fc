"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StadiumMapProps {
  onSelectSection: (sectionId: string) => void
  selectedSection: string
}

interface Section {
  id: string
  name: string
  available: number
  price: string
  path: string
}

export function StadiumMap({ onSelectSection, selectedSection }: StadiumMapProps) {
  const [scale, setScale] = useState(1)
  const mapRef = useRef<SVGSVGElement>(null)

  const handleZoom = useCallback((delta: number) => {
    setScale((prev) => Math.max(0.5, Math.min(prev + delta, 2)))
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<SVGPathElement>, sectionId: string) => {
      if (e.key === "Enter" || e.key === " ") {
        onSelectSection(sectionId)
      }
    },
    [onSelectSection],
  )

  const sections: Section[] = [
    { id: "north", name: "North Stand", available: 100, price: "₦5,000", path: "M100 25 L300 25 L300 75 L100 75 Z" },
    {
      id: "south",
      name: "South Stand",
      available: 120,
      price: "₦4,500",
      path: "M100 225 L300 225 L300 275 L100 275 Z",
    },
    { id: "east", name: "East Stand", available: 80, price: "₦6,000", path: "M300 75 L350 75 L350 225 L300 225 Z" },
    { id: "west", name: "West Stand", available: 90, price: "₦5,500", path: "M50 75 L100 75 L100 225 L50 225 Z" },
    { id: "northEast", name: "North East Corner", available: 40, price: "₦7,000", path: "M300 25 L350 75 L300 75 Z" },
    { id: "northWest", name: "North West Corner", available: 40, price: "₦7,000", path: "M50 75 L100 75 L100 25 Z" },
    {
      id: "southEast",
      name: "South East Corner",
      available: 40,
      price: "₦6,500",
      path: "M300 225 L350 225 L300 275 Z",
    },
    { id: "southWest", name: "South West Corner", available: 40, price: "₦6,500", path: "M50 225 L100 275 L100 225 Z" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-[800px]">
      <div className="relative border rounded-lg bg-gray-50 overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <motion.div
          className="origin-center"
          style={{ scale }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <TooltipProvider>
            <svg ref={mapRef} viewBox="0 0 400 300" className="w-full h-full" aria-label="Stadium seating map">
              {/* Field */}
              <rect x="100" y="75" width="200" height="150" fill="#4ade80" rx="4" />

              {/* Sections */}
              {sections.map((section) => (
                <Tooltip key={section.id}>
                  <TooltipTrigger asChild>
                    <motion.path
                      d={section.path}
                      className={`${
                        selectedSection === section.id ? "fill-primary" : "fill-secondary/20 hover:fill-secondary/40"
                      } cursor-pointer transition-colors`}
                      onClick={() => onSelectSection(section.id)}
                      onKeyDown={(e) => handleKeyDown(e, section.id)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${section.name} - ${section.available} seats available at ${section.price}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-secondary text-secondary-foreground p-2 rounded-md">
                    <p className="font-semibold">{section.name}</p>
                    <p>Available: {section.available} seats</p>
                    <p>Price: {section.price}</p>
                  </TooltipContent>
                </Tooltip>
              ))}

              
            </svg>
          </TooltipProvider>
        </motion.div>

        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => handleZoom(-0.1)}
            disabled={scale <= 0.5}
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => handleZoom(0.1)}
            disabled={scale >= 2}
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Legend:</h3>
          <ul className="space-y-1">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-secondary/20 mr-2"></span>
              Available
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-primary mr-2"></span>
              Selected
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Click on a section to select</li>
            <li>Use zoom controls for detail</li>
            <li>Hover for more information</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

