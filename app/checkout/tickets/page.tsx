import type { Metadata } from "next"
import { TicketCheckout } from "@/components/checkout/ticket-checkout"

export const metadata: Metadata = {
  title: "Ticket Checkout | Sunshine Stars FC",
  description: "Complete your ticket purchase for Sunshine Stars FC matches",
}

export default function TicketCheckoutPage() {
  return <TicketCheckout />
}

