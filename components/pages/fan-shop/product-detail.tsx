"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { products, Product } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart/cart-context"
import { Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes?.[0])
  const { toast } = useToast()
  const { addToCart } = useCart()

  if (!product) {
    return <div>Product not found</div>
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes) {
      toast({
        title: "Please select a size",
        description: "You must choose a size before adding to cart.",
        variant: "destructive",
      })
      return
    }
    addToCart({ ...product, sizes: selectedSize ? [selectedSize] : undefined }, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity === 1 ? "item" : "items"} of ${product.name} added to your cart.`,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/fan-shop/all-products" className="inline-flex items-center mb-6 text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Products
        </Link>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <p className="text-2xl font-semibold text-primary">₦{product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-xl text-muted-foreground line-through">₦{product.originalPrice.toFixed(2)}</p>
              )}
              {product.discount && (
                <span className="bg-primary text-white text-sm font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <p className="text-muted-foreground">{product.description}</p>
            {product.sizes && (
              <div>
                <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2">
                  Size
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity === 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button onClick={handleAddToCart} className="w-full" size="sm">
              <ShoppingBag className="mr-2 h-5 w-5" /> Add to Bag
            </Button>
          </motion.div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/fan-shop/products/${relatedProduct.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                        <p className="text-lg font-bold">₦{relatedProduct.price.toFixed(2)}</p>
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

