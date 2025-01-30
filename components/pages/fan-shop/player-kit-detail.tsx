"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart/cart-context"
import { Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Player } from "@/lib/data/players"
import { createPlayerKit } from "@/lib/data/products"

interface PlayerKitDetailProps {
  player: Player
}

export function PlayerKitDetail({ player }: PlayerKitDetailProps) {
  const product = createPlayerKit(player)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.sizes?.[0])
  const { toast } = useToast()
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes) {
      toast({
        title: "Please select a size",
        description: "You must choose a size before adding to cart.",
        variant: "destructive",
      })
      return
    }
    addToCart({ ...product, selectedSize }, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity === 1 ? "item" : "items"} of ${product.name} added to your cart.`,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/fan-shop/players" className="inline-flex items-center mb-6 text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Player Selection
        </Link>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <img
              src={player.image || "/placeholder.svg"}
              alt={player.name}
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
            <div>
              <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2">
                Size
              </label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes?.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
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
            <Button onClick={handleAddToCart} className="w-full" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </motion.div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Player Details</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-semibold">{player.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Number</p>
                  <p className="font-semibold">{player.number}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Position</p>
                  <p className="font-semibold">{player.position}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

