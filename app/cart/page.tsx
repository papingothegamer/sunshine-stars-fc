import type { Metadata } from "next"
import { CartPage } from "@/components/cart/cart-page"

export const metadata: Metadata = {
  title: "Shopping Cart | Sunshine Stars FC",
  description: "View and manage your shopping cart for Sunshine Stars FC merchandise",
}

export default function Cart() {
  return <CartPage />
}

