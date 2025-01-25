"use client"

import { motion } from "framer-motion"
import { ProductGrid } from "./product-grid"
import { ProductFilters } from "./product-filters"
import { useState } from "react"
import { type Product, products } from "@/lib/data/products"

export function FanShopLayout() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_25%,rgba(68,107,158,0.1)_50%,transparent_50%,transparent_75%,rgba(68,107,158,0.1)_75%)] bg-[length:24px_24px] pointer-events-none" />
      <div className="relative">
        <header className="bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="py-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl mb-4"
              >
                Fan Shop
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/80"
              >
                Show your support with official Sunshine Stars FC merchandise
              </motion.p>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-1/4">
              <ProductFilters setFilteredProducts={setFilteredProducts} />
            </aside>
            <div className="w-full md:w-3/4">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

