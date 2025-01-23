"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import  StadiumMap  from "./stadium-map"
import { TicketingSidebar } from "./ticketing-sidebar"


interface TicketDialogProps {
  match: any
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TicketDialog({ match, open, onOpenChange }: TicketDialogProps) {
  if (!match) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl h-[90vh] p-0">
        <button onClick={() => onOpenChange(false)} className="absolute right-4 top-4 z-50">
       
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] h-full">
          <div className="p-6 overflow-auto">
            <StadiumMap />
          </div>
          <TicketingSidebar match={match} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
