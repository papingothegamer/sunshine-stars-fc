"use client"

import type React from "react"
import { useState, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { StadiumMap } from "./stadium-map"
import { Minus, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Match {
  id: number
  homeTeam: string
  awayTeam: string
  competition: string
  date: Date
  venue: string
  isHome: boolean
}

interface TicketCategory {
  id: string
  name: string
  price: number
  available: number
}

const ticketCategories: TicketCategory[] = [
  { id: "vip", name: "VIP Box", price: 15000, available: 50 },
  { id: "premium", name: "Premium Seats", price: 10000, available: 100 },
  { id: "regular", name: "Regular Seats", price: 5000, available: 200 },
  { id: "economy", name: "Economy Seats", price: 3000, available: 300 },
]

interface TicketDialogContextType {
  isOpen: boolean
  selectedMatch: Match | null
  openDialog: (match: Match) => void
  closeDialog: () => void
}

interface TicketSidebarProps {
  selectedTicketCategory: TicketCategory | undefined
  quantity: number
  handleQuantityChange: (delta: number) => void
}

interface AwayGameTicketsProps {
  match: Match
}

const TicketDialogContext = createContext<TicketDialogContextType | undefined>(undefined)

export function TicketDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null)

  const openDialog = (match: Match) => {
    setSelectedMatch(match)
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
    setSelectedMatch(null)
  }

  return (
    <TicketDialogContext.Provider value={{ isOpen, selectedMatch, openDialog, closeDialog }}>
      {children}
      <TicketDialog />
    </TicketDialogContext.Provider>
  )
}

export function useTicketDialog() {
  const context = useContext(TicketDialogContext)
  if (context === undefined) {
    throw new Error("useTicketDialog must be used within a TicketDialogProvider")
  }
  return context
}

export function TicketDialog() {
  const { isOpen, selectedMatch, closeDialog } = useTicketDialog()
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [zoom, setZoom] = useState(1)

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(prev + delta, 4)))
  }

  const handleZoom = (delta: number) => {
    setZoom((prev) => Math.max(0.5, Math.min(prev + delta, 2)))
  }

  const selectedTicketCategory = ticketCategories.find((cat) => cat.id === selectedCategory)

  if (!selectedMatch) return null

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="max-w-4xl h-[90vh] p-0">
        <DialogHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">
              {selectedMatch.homeTeam} vs {selectedMatch.awayTeam}
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="h-[calc(90vh-73px)] overflow-hidden">
          {selectedMatch.isHome ? (
            <div className="grid md:grid-cols-[1fr_300px] h-full">
              <ScrollArea className="h-full">
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Select Seats</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Click on the stadium map to select your preferred seating area
                    </p>
                    <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden">
                      <div
                        style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
                        className="transition-transform"
                      >
                        <StadiumMap onSelectSection={setSelectedCategory} selectedSection={selectedCategory} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Available Tickets</h3>
                    <div className="space-y-2">
                      {ticketCategories.map((category) => (
                        <div
                          key={category.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                            selectedCategory === category.id ? "border-primary bg-primary/5" : "hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">{category.name}</h4>
                              <p className="text-sm text-muted-foreground">{category.available} tickets available</p>
                            </div>
                            <p className="text-lg font-semibold">₦{category.price.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <div className="border-l">
                <ScrollArea className="h-full">
                  <TicketSidebar
                    selectedTicketCategory={selectedTicketCategory}
                    quantity={quantity}
                    handleQuantityChange={handleQuantityChange}
                  />
                </ScrollArea>
              </div>
            </div>
          ) : (
            <ScrollArea className="h-full">
              <AwayGameTickets match={selectedMatch} />
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function TicketSidebar({ selectedTicketCategory, quantity, handleQuantityChange }: TicketSidebarProps) {
  return (
    <div className="p-6 bg-muted/50">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          {selectedTicketCategory ? (
            <>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Ticket Type</span>
                    <span className="font-medium">{selectedTicketCategory.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Price per ticket</span>
                    <span className="font-medium">₦{selectedTicketCategory.price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quantity</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= 4}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Subtotal</span>
                    <span className="font-medium">₦{(selectedTicketCategory.price * quantity).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Service Fee</span>
                    <span className="font-medium">₦{(500 * quantity).toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex justify-between text-lg font-bold pt-4 border-t">
                  <span>Total</span>
                  <span>₦{((selectedTicketCategory.price + 500) * quantity).toLocaleString()}</span>
                </div>
              </div>
              <Button className="w-full mt-6" size="lg">
                Continue to Payment
              </Button>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">Select a seating area to view pricing</p>
          )}
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Maximum 4 tickets per transaction</p>
          <p>• Tickets will be sent to your email</p>
          <p>• No refunds or exchanges</p>
        </div>
      </div>
    </div>
  )
}

function AwayGameTickets({ match }: AwayGameTicketsProps) {
  return (
    <div className="p-6">
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="info">Ticket Information</TabsTrigger>
          <TabsTrigger value="prices">Ticket Prices</TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="mt-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg" alt={match.homeTeam} className="w-16 h-16 object-contain" />
              <img src="/placeholder.svg" alt={match.awayTeam} className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-lg font-semibold">{match.competition}</h3>
            <p className="text-sm text-muted-foreground">{match.venue}</p>
            <p className="text-sm text-muted-foreground">{match.date.toLocaleString()}</p>
            <div className="space-y-2">
              <p className="text-sm">Ticket sales for this match will be as follows:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Tickets will be sold at one ticket per member.</li>
                <li>Tickets will be sold online only.</li>
                <li>Tickets will be dispatched via print@home from 3 days before the match.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="prices" className="mt-4">
          <div className="space-y-4">
            <p className="text-sm">
              Tickets for this match are priced at category A. For match ticket prices, please see below:
            </p>
            <div className="space-y-2">
              {ticketCategories.map((category) => (
                <div key={category.id} className="flex justify-between items-center p-2 bg-muted rounded">
                  <span className="font-medium">{category.name}</span>
                  <span>₦{category.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              All persons under the age of 16 will be required to attend the relevant area of the ground with, and sit
              in the ground next to, a person over 18 years of age.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

