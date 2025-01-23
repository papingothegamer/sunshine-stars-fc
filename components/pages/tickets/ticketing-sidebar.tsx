"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function TicketingSidebar({ match }: { match: any }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="border-l h-full bg-gray-50">
      <div className="p-6 space-y-6">
        <div>
          <h3 className="font-bold text-lg">
            {match.homeTeam.name} vs {match.awayTeam.name}
          </h3>
          <p className="text-sm text-gray-600">{match.competition}</p>
          <p className="text-sm text-gray-600">
            {match.date} | {match.venue} | {match.time}
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              max={10}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label>Selected Section</Label>
            <p className="text-sm text-gray-600">Please select a section from the map</p>
          </div>

          <Button className="w-full">Continue to Payment</Button>
        </div>
      </div>
    </div>
  )
}
