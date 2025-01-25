"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { products, Product } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const router = useRouter()
  const product = products.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return <div>Product not found</div>
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  const handleAddToCart = () => {
    // In a real application, you would add the product to the cart here
    // For now, we'll just navigate to the checkout page
    router.push("/checkout/souvenirs")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold">£{product.price.toFixed(2)}</p>
            <p className="text-muted-foreground">{product.description}</p>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity === 1}
              >
                -
              </Button>
              <span>{quantity}</span>
              <Button variant="outline" onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </div>
            <Button onClick={handleAddToCart} className="w-full">
              Add to Cart
            </Button>
          </motion.div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/fan-shop/${relatedProduct.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                        <p className="text-lg font-bold">£{relatedProduct.price.toFixed(2)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

