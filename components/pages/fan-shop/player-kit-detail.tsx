"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart/cart-context"
import {
  Minus,
  Plus,
  ShoppingBag,
  ChevronRight,
  Heart,
  Share2,
  Truck,
  PackageCheck,
  RefreshCw,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Player } from "@/lib/data/players"
import { createPlayerKit } from "@/lib/data/products"
import Image from "next/image"

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
    addToCart({
      ...product,
      selectedSize,
      images: [player.shirtImage || player.normalImage || player.image || "/placeholder.svg"]
    }, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity === 1 ? "item" : "items"} of ${product.name} added to your cart.`,
    })
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/fan-shop" className="hover:text-primary">
            Fan Shop
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/fan-shop/players" className="hover:text-primary">
            Player Kits
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{player.name}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-square overflow-hidden rounded-lg border bg-muted"
            >
              <Image
                src={player.shirtImage || player.normalImage || player.image || "/placeholder.svg"}
                alt={player.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">₦{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₦{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discount && (
                  <Badge variant="secondary" className="text-primary">
                    {product.discount}% OFF
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              {/* Size Selection */}
              {product.sizes && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Choose size" />
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

              {/* Quantity Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity === 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center text-lg">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                size="lg"
                className="w-full mt-6"
                onClick={handleAddToCart}
                disabled={!selectedSize && product.sizes && product.sizes.length > 0}
              >
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Bag
              </Button>

              {/* Shipping Info */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <PackageCheck className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm">Secure Checkout</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm">Easy Returns</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="details"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent"
              >
                Kit Details
              </TabsTrigger>
              <TabsTrigger
                value="care"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent"
              >
                Care Instructions
              </TabsTrigger>
              <TabsTrigger
                value="player"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent"
              >
                Player Information
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <div className="prose max-w-none">
                <p>
                  This official Sunshine Stars FC home kit for the 2024/25 season is made with high-quality, breathable
                  fabric to keep you comfortable whether you're on the pitch or cheering from the stands. Featuring the
                  club crest and sponsor logos, this kit lets you show your support for {player.name} and the team in
                  style.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="care" className="mt-6">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Machine wash cold</li>
                <li>Tumble dry low</li>
                <li>Do not bleach</li>
                <li>Iron on low heat if needed</li>
              </ul>
            </TabsContent>
            <TabsContent value="player" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-semibold text-lg">{player.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Number</p>
                        <p className="font-semibold text-lg">{player.number}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Position</p>
                        <p className="font-semibold text-lg">{player.position}</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={player.image || "/placeholder.svg"}
                        alt={player.name}
                        width={200}
                        height={200}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

