import type { Metadata } from "next"
import { ProductDetail } from "@/components/pages/fan-shop/product-detail"

export const metadata: Metadata = {
  title: "Product Detail | Sunshine Stars FC Fan Shop",
  description: "View details and purchase official Sunshine Stars FC merchandise",
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  return <ProductDetail productId={params.productId} />
}

