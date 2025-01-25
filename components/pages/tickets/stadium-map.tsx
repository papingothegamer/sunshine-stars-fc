"use client"

import { useState, useRef, useCallback } from "react"
import { motion, useDragControls } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ZoomIn, ZoomOut, Move } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StadiumMapProps {
  onSelectSection: (sectionId: string) => void
  selectedSection: string
  scale: number
  onZoom: (delta: number) => void
}

interface Section {
  id: string
  name: string
  available: number
  price: string
  path: string
}

export function StadiumMap({ onSelectSection, selectedSection, scale, onZoom }: StadiumMapProps) {
  const mapRef = useRef<SVGSVGElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragControls = useDragControls()
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

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

  const handleDragStart = (event: PointerEvent) => {
    setIsDragging(true)
    dragControls.start(event)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  return (
    <div ref={containerRef} className="relative bg-muted rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <motion.div
        drag
        dragControls={dragControls}
        dragMomentum={false}
        dragElastic={0}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={position}
        className="origin-center cursor-grab active:cursor-grabbing"
        style={{ scale }}
      >
        <TooltipProvider>
          <svg
            ref={mapRef}
            viewBox="0 0 400 300"
            className={cn("w-full max-w-full transition-transform", isDragging ? "pointer-events-none" : "")}
            aria-label="Stadium seating map"
          >
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
                    onClick={() => !isDragging && onSelectSection(section.id)}
                    onKeyDown={(e) => handleKeyDown(e, section.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${section.name} - ${section.available} seats available at ${section.price}`}
                    whileHover={{ scale: isDragging ? 1 : 1.05 }}
                    whileTap={{ scale: isDragging ? 1 : 0.95 }}
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-secondary text-secondary-foreground p-2 rounded-md"
                  sideOffset={5}
                >
                  <p className="font-semibold">{section.name}</p>
                  <p>Available: {section.available} seats</p>
                  <p>Price: {section.price}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </svg>
        </TooltipProvider>
      </motion.div>

      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => onZoom(-0.1)}
          disabled={scale <= 0.5}
          className="bg-white/90 hover:bg-white"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-4 w-4 text-secondary" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => onZoom(0.1)}
          disabled={scale >= 2}
          className="bg-white/90 hover:bg-white"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-4 w-4 text-secondary" />
        </Button>
        <div className="bg-white/90 px-2 py-1 rounded-md text-sm font-medium">
          <Move className="h-4 w-4 inline mr-1" />
          Drag to pan
        </div>
      </div>
    </div>
  )
}

