"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { products } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart/cart-context"
import { Truck, RotateCcw } from "lucide-react"

export default function ProductPage({ params }: { params: { productId: string } }) {
  const product = products.find((p) => p.id === params.productId)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const { toast } = useToast()
  const { addToCart } = useCart()

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      })
      return
    }

    addToCart(product)
    toast({
      title: "Added to Bag",
      description: `${product.name} has been added to your bag.`,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="relative">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full rounded-lg" />
              {product.discount && (
                <Badge className="absolute top-4 right-4 bg-primary text-white">-{product.discount}%</Badge>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">₦{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₦{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {product.sizes && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Size</label>
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

            <Button onClick={handleAddToCart} className="w-full" size="lg">
              Add to Bag
            </Button>

            <div className="pt-6 space-y-4 border-t">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span>Free shipping on orders over ₦20,000</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span>60-day return policy</span>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h2 className="text-lg font-semibold mb-2">Product Details</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

