import { ProductDetail } from "@/components/pages/fan-shop/product-detail"
import { products } from "@/lib/data/products"
import React from 'react'

interface ProductPageProps {
  params: {
    productId: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.productId)

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductDetail productId={params.productId} />
}