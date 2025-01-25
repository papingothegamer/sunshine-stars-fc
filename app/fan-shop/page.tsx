import type { Metadata } from "next"
import { FanShopLayout } from "@/components/pages/fan-shop/fan-shop-layout"

export const metadata: Metadata = {
  title: "Fan Shop | Sunshine Stars FC",
  description: "Official merchandise and souvenirs for Sunshine Stars Football Club",
}

export default function FanShopPage() {
  return <FanShopLayout />
}

