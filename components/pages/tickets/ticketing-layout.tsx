"use client"

import { AlertTriangle, Megaphone } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function TicketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Alert className="bg-orange-400 text-blue-900 border-none rounded-none">
        <Megaphone className="h-4 w-4" />
        <AlertDescription>
          Limited tickets remain for next Sunday's huge NPFL clash against Remo Stars at Akure Township Stadium. Don't miss
          out - secure your seat today!
        </AlertDescription>
      </Alert>

      <Alert variant="destructive" className="bg-blue-600 text-white border-none rounded-none">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          IMPORTANT: Ticket touting (scalping) is illegal and supporters who purchase tickets unofficially
          will be in possession of an invalid ticket and will be refused entry at the stadium. Only buy from official
          sellers
        </AlertDescription>
      </Alert>

      {children}
    </div>
  )
}

