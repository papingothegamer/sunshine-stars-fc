"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/data/products"
import Image from "next/image"

interface ProductCardProps {
  product: Product
  index: number
  href?: string
}

export function ProductCard({ product, index, href }: ProductCardProps) {
  const router = useRouter()

  const handleClick = () => {
    if (href && typeof href === "string") {
      router.push(href)
    }
  }

  // Determine the image to display
  const displayImage =
    product.playerOptions?.[0]?.player.shirtImage ||
    product.playerOptions?.[0]?.player.normalImage ||
    product.image ||
    "/placeholder.svg"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={displayImage || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
            />
            {product.discount && (
              <Badge className="absolute top-2 right-2 bg-primary text-white">-{product.discount}%</Badge>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">₦{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₦{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

