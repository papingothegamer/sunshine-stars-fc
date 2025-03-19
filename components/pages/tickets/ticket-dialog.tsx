"use client"

import type React from "react"
import { useState, createContext, useContext, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { StadiumMap } from "./stadium-map"
import { Minus, Plus, Calendar, MapPin, Clock, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"

interface Match {
  id: number
  homeTeam: string
  homeTeamLogo?: string
  awayTeam: string
  awayTeamLogo?: string
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
  color: string
}

const ticketCategories: TicketCategory[] = [
  { id: "vip", name: "VIP Box", price: 15000, available: 50, color: "bg-purple-500/20 hover:bg-purple-500/40" },
  { id: "premium", name: "Premium Seats", price: 10000, available: 100, color: "bg-blue-500/20 hover:bg-blue-500/40" },
  { id: "regular", name: "Regular Seats", price: 5000, available: 200, color: "bg-green-500/20 hover:bg-green-500/40" },
  {
    id: "economy",
    name: "Economy Seats",
    price: 3000,
    available: 300,
    color: "bg-yellow-500/20 hover:bg-yellow-500/40",
  },
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
  selectedSection: string
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
    setTimeout(() => setSelectedMatch(null), 300) // Clear after animation
  }

  return (
    <TicketDialogContext.Provider value={{ isOpen, selectedMatch, openDialog, closeDialog }}>
      {children}
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
  const router = useRouter()
  const { isOpen, selectedMatch, closeDialog } = useTicketDialog()
  const [selectedSection, setSelectedSection] = useState<string>("")
  const [selectedSeatType, setSelectedSeatType] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [scale, setScale] = useState(1)
  const [step, setStep] = useState<"select" | "checkout">("select")

  // Reset state when dialog opens
  useEffect(() => {
    if (isOpen) {
      setSelectedSection("")
      setSelectedSeatType("")
      setQuantity(1)
      setScale(1)
      setStep("select")
    }
  }, [isOpen])

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(prev + delta, 4)))
  }

  const handleZoom = (delta: number) => {
    setScale((prev) => Math.max(0.5, Math.min(prev + delta, 2)))
  }

  const handleSectionSelect = (section: string) => {
    if (section !== selectedSection) {
      setSelectedSection(section)
      setSelectedSeatType("") // Reset seat type when changing section
    }
  }

  const selectedTicketCategory = ticketCategories.find((cat) => cat.id === selectedSeatType)

  const handleContinueToPayment = () => {
    closeDialog()
    router.push("/checkout/tickets")
  }

  const handleNextStep = () => {
    if (step === "select" && selectedSection && selectedSeatType) {
      setStep("checkout")
    }
  }

  const handleBackStep = () => {
    if (step === "checkout") {
      setStep("select")
    }
  }

  if (!selectedMatch) return null

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden" style={{ "--backdrop-opacity": "0.5" } as any}>
        <DialogHeader className="p-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">
              {selectedMatch.homeTeam} vs {selectedMatch.awayTeam}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="h-[calc(90vh-73px)] md:overflow-hidden overflow-auto">
          {selectedMatch.isHome ? (
            <div className="grid md:grid-cols-[1fr_320px] h-full">
              <ScrollArea className="h-full md:block hidden">
                <AnimatePresence mode="wait">
                  {step === "select" ? (
                    <motion.div
                      key="select"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-4 space-y-4"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Stadium Map</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Click on the stadium map to view your selected seating area
                        </p>
                        <StadiumMap
                          onSelectSection={handleSectionSelect}
                          selectedSection={selectedSection}
                          scale={scale}
                          onZoom={handleZoom}
                        />
                      </div>

                      {/* Seat Selection Chips */}
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold mb-1">Select Seat/Ticket Type</h3>
                        <div className="flex flex-wrap gap-2">
                          {ticketCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setSelectedSeatType(category.id)}
                              className={`px-4 py-2 rounded-md transition-colors ${
                                selectedSeatType === category.id
                                  ? "bg-primary text-white"
                                  : `${category.color} text-gray-800`
                              }`}
                              disabled={!selectedSection}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="checkout"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-4 space-y-4"
                    >
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <h3 className="font-semibold mb-1">Match Details</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Date & Time</p>
                            <p className="font-medium">{format(selectedMatch.date, "EEEE, MMMM d, yyyy • h:mm a")}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Venue</p>
                            <p className="font-medium">{selectedMatch.venue}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Competition</p>
                            <p className="font-medium">{selectedMatch.competition}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Section</p>
                            <p className="font-medium">{selectedTicketCategory?.name}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <h3 className="font-semibold mb-1">Ticket Summary</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>
                              {selectedTicketCategory?.name} x {quantity}
                            </span>
                            <span>₦{((selectedTicketCategory?.price || 0) * quantity).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Service Fee</span>
                            <span>₦{(500 * quantity).toLocaleString()}</span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>
                              ₦{((selectedTicketCategory?.price || 0) * quantity + 500 * quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-yellow-800">Important Information</h4>
                            <p className="text-sm text-yellow-700">
                              Tickets will be sent to your email after purchase. Please bring a printed copy or show the
                              QR code on your phone at the entrance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollArea>

              <div className="md:hidden block">
                <AnimatePresence mode="wait">
                  {step === "select" ? (
                    <motion.div
                      key="select"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-4 space-y-4"
                    >
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Stadium Map</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Click on the stadium map to view your selected seating area
                        </p>
                        <StadiumMap
                          onSelectSection={handleSectionSelect}
                          selectedSection={selectedSection}
                          scale={scale}
                          onZoom={handleZoom}
                        />
                      </div>

                      {/* Seat Selection Chips */}
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold mb-1">Select Seat/Ticket Type</h3>
                        <div className="flex flex-wrap gap-2">
                          {ticketCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setSelectedSeatType(category.id)}
                              className={`px-4 py-2 rounded-md transition-colors ${
                                selectedSeatType === category.id
                                  ? "bg-primary text-white"
                                  : `${category.color} text-gray-800`
                              }`}
                              disabled={!selectedSection}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="checkout"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-4 space-y-4"
                    >
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <h3 className="font-semibold mb-1">Match Details</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Date & Time</p>
                            <p className="font-medium">{format(selectedMatch.date, "EEEE, MMMM d, yyyy • h:mm a")}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Venue</p>
                            <p className="font-medium">{selectedMatch.venue}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Competition</p>
                            <p className="font-medium">{selectedMatch.competition}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Section</p>
                            <p className="font-medium">{selectedTicketCategory?.name}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <h3 className="font-semibold mb-1">Ticket Summary</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>
                              {selectedTicketCategory?.name} x {quantity}
                            </span>
                            <span>₦{((selectedTicketCategory?.price || 0) * quantity).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Service Fee</span>
                            <span>₦{(500 * quantity).toLocaleString()}</span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>
                              ₦{((selectedTicketCategory?.price || 0) * quantity + 500 * quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-yellow-800">Important Information</h4>
                            <p className="text-sm text-yellow-700">
                              Tickets will be sent to your email after purchase. Please bring a printed copy or show the
                              QR code on your phone at the entrance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-l">
                <ScrollArea className="h-full md:block hidden">
                  <TicketSidebar
                    selectedTicketCategory={selectedTicketCategory}
                    quantity={quantity}
                    handleQuantityChange={handleQuantityChange}
                    selectedSection={selectedSection}
                  />
                </ScrollArea>
                <div className="md:hidden block pb-20">
                  <TicketSidebar
                    selectedTicketCategory={selectedTicketCategory}
                    quantity={quantity}
                    handleQuantityChange={handleQuantityChange}
                    selectedSection={selectedSection}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="md:hidden block">
                <AwayGameTickets match={selectedMatch} />
              </div>
              <ScrollArea className="h-full md:block hidden">
                <AwayGameTickets match={selectedMatch} />
              </ScrollArea>
            </>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white flex justify-between">
          {step === "select" ? (
            <>
              <Button variant="outline" onClick={closeDialog}>
                Cancel
              </Button>
              <Button onClick={handleNextStep} disabled={!selectedSection || !selectedSeatType}>
                Continue
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={handleBackStep}>
                Back
              </Button>
              <Button onClick={handleContinueToPayment}>Proceed to Payment</Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function TicketSidebar({ selectedTicketCategory, quantity, handleQuantityChange, selectedSection }: TicketSidebarProps) {
  return (
    <div className="p-4 bg-muted/50">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          {selectedTicketCategory ? (
            <>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Selected Seating Area: {selectedSection}</h3>
                  <div className="p-3 rounded-lg border border-primary bg-primary/5">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{selectedTicketCategory?.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {selectedTicketCategory?.available} tickets available
                        </p>
                      </div>
                      <p className="text-lg font-semibold">₦{selectedTicketCategory?.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
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
                <div className="pt-3 border-t">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Subtotal</span>
                    <span className="font-medium">₦{(selectedTicketCategory.price * quantity).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Service Fee</span>
                    <span className="font-medium">₦{(500 * quantity).toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex justify-between text-lg font-bold pt-3 border-t">
                  <span>Total</span>
                  <span>₦{((selectedTicketCategory.price + 500) * quantity).toLocaleString()}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-muted/50 p-3 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">Select a seating area to view pricing</p>
            </div>
          )}
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground"></span>
            Maximum 4 tickets per transaction
          </p>
          <p className="flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground"></span>
            Tickets will be sent to your email
          </p>
          <p className="flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground"></span>
            No refunds or exchanges
          </p>
        </div>
      </div>
    </div>
  )
}

function AwayGameTickets({ match }: AwayGameTicketsProps) {
  return (
    <div className="p-1">
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="info">Ticket Information</TabsTrigger>
          <TabsTrigger value="prices">Ticket Prices</TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="mt-3">
          <div className="space-y-3">
            <div className="flex items-center gap-4 justify-center p-3 bg-muted/30 rounded-lg">
              <div className="flex flex-col items-center">
                <img
                  src={match.homeTeamLogo || "/placeholder.svg"}
                  alt={match.homeTeam}
                  className="w-16 h-16 object-contain mb-2"
                />
                <span className="font-medium text-sm">{match.homeTeam}</span>
              </div>

              <div className="text-2xl font-bold">VS</div>

              <div className="flex flex-col items-center">
                <img
                  src={match.awayTeamLogo || "/placeholder.svg"}
                  alt={match.awayTeam}
                  className="w-16 h-16 object-contain mb-2"
                />
                <span className="font-medium text-sm">{match.awayTeam}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-muted/30 p-3 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Competition</p>
                <p className="font-medium">{match.competition}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Venue</p>
                <p className="font-medium">{match.venue}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{format(match.date, "EEEE, MMMM d, yyyy")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium">{format(match.date, "h:mm a")}</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm">Ticket sales for this match will be as follows:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Tickets will be sold online only.</li>
                <li>Tickets will be dispatched via print@home from 3 days before the match.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg overflow-hidden">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">Away Supporters Information</h4>
                  <p className="text-sm text-yellow-700">
                    Away tickets are allocated by the home club. Sunshine Stars FC has been allocated a limited number
                    of tickets for this match. Please contact the away ticket office for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="prices" className="mt-3">
          <div className="space-y-3">
            <p className="text-sm">
              Tickets for this match are priced at category A. For match ticket prices, please see below:
            </p>
            <div className="space-y-2">
              {ticketCategories.map((category) => (
                <div key={category.id} className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <span className="font-medium">{category.name}</span>
                  <span>₦{category.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              All persons under the age of 16 will be required to attend the relevant area of the ground with, and sit
              in the ground next to, a person over 18 years of age.
            </p>

            <Button className="w-full mt-3" onClick={() => window.open("https://example.com/away-tickets", "_blank")}>
              Visit Away Ticket Office
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

