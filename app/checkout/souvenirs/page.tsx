import type { Metadata } from "next"
import { SouvenirCheckout } from "@/components/checkout/souvenir-checkout"

export const metadata: Metadata = {
  title: "Souvenir Checkout | Sunshine Stars FC",
  description: "Complete your purchase of Sunshine Stars FC merchandise",
}

export default function SouvenirCheckoutPage() {
  return <SouvenirCheckout />
}

