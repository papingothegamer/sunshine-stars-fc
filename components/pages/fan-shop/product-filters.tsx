"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { products, type Product } from "@/lib/data/products"

interface ProductFiltersProps {
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export function ProductFilters({ setFilteredProducts }: ProductFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]

      const newFilteredProducts =
        newCategories.length === 0 ? products : products.filter((product) => newCategories.includes(product.category))

      setFilteredProducts(newFilteredProducts)
      return newCategories
    })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Filters</h2>
      <div className="space-y-2">
        <Label className="text-base font-medium">Category</Label>
        <div className="space-y-2">
          {["apparel", "kit", "souvenir"].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label htmlFor={category} className="capitalize">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

