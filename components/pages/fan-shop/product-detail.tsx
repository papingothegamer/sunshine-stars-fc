"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { products } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart/cart-context"
import { 
  Minus, 
  Plus, 
  ShoppingBag, 
  Heart, 
  Share2, 
  ChevronRight,
  Truck,
  RotateCcw,
  Shield,
  Star
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes?.[0])
  const [selectedImage, setSelectedImage] = useState(0)
  const { toast } = useToast()
  const { addToCart } = useCart()

  if (!product) {
    return <div>Product not found</div>
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  
  const productImages = product.images

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

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
      description: `${quantity} × ${product.name} added to your cart.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <Link href="/fan-shop" className="hover:text-primary transition-colors">
          Fan Shop
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href={`/fan-shop/categories/${product.category}`} className="hover:text-primary transition-colors capitalize">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div>
          <div className="relative aspect-square mb-4 bg-muted/30 rounded-lg overflow-hidden">
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={productImages[selectedImage]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? "border-primary" : "border-transparent hover:border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex justify-between items-start">
            <div>
              <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 capitalize">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(24 reviews)</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share product</span>
              </Button>
            </div>
          </div>

          <div className="text-3xl font-bold mb-6">
            ₦{product.price.toLocaleString()}
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through ml-2">
                ₦{product.originalPrice.toLocaleString()}
              </span>
            )}
            {product.discount && (
              <Badge className="ml-2 bg-primary text-white">
                {product.discount}% OFF
              </Badge>
            )}
          </div>

          <Separator className="my-6" />

          {/* Size Selection */}
          {product.sizes && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
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

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="rounded-r-none"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="w-12 h-10 flex items-center justify-center border-y border-input">{quantity}</div>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => handleQuantityChange(1)} 
                className="rounded-l-none"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button 
            className="w-full py-6 text-lg mb-6" 
            onClick={handleAddToCart} 
            disabled={product.sizes && !selectedSize}
          >
            <ShoppingBag className="mr-2 h-5 w-5" /> Add to Bag
          </Button>

          {/* Shipping Info */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Free Shipping</h4>
                <p className="text-xs text-muted-foreground">On orders over ₦10,000</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <RotateCcw className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Easy Returns</h4>
                <p className="text-xs text-muted-foreground">30 day return policy</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Secure Checkout</h4>
                <p className="text-xs text-muted-foreground">SSL encrypted payment</p>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">
                Description
              </TabsTrigger>
              <TabsTrigger value="details" className="flex-1">
                Details
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-muted-foreground">
                {product.description || 
                  `Show your support with this official merchandise. 
                  Made with high-quality materials for comfort and durability. Perfect for match days 
                  or casual wear.`}
              </p>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>100% polyester</li>
                <li>Machine washable</li>
                <li>Official merchandise</li>
                <li>Embroidered crest</li>
                <li>Regular fit</li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-medium">JD</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">John Doe</h4>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Great quality product! The material is excellent and the fit is perfect.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-medium">JS</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">Jane Smith</h4>
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-3 w-3 text-muted" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Good product but sizing runs a bit small. Order one size up.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Recommended Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/fan-shop/products/${relatedProduct.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-48">
                      <img
                        src={relatedProduct.images[0] || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <h3 className="font-medium mb-2">{relatedProduct.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold">₦{relatedProduct.price.toLocaleString()}</span>
                        <ShoppingBag className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}