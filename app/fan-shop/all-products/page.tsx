"use client"

import { useState } from "react"
import { ProductGrid } from "@/components/pages/fan-shop/product-grid"
import { ProductFilters } from "@/components/pages/fan-shop/product-filters"
import { products, type Product } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AllProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <Link href="/fan-shop">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Fan Shop
          </Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-[250px,1fr] gap-8">
        <aside>
          <ProductFilters setFilteredProducts={setFilteredProducts} />
        </aside>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  )
}

