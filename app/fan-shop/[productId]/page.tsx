import { ProductDetail } from "@/components/pages/fan-shop/product-detail"
import { products } from "@/lib/data/products"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    productId: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.productId)

  if (!product) {
    notFound()
  }

  return <ProductDetail productId={params.productId} />
}

export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }))
}

