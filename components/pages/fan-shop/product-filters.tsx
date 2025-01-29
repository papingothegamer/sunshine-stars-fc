"use client"

import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { products, type Product } from "@/lib/data/products"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductFiltersProps {
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export function ProductFilters({ setFilteredProducts }: ProductFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000])

  const categories = Array.from(new Set(products.map((product) => product.category)))

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  useEffect(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      return categoryMatch && priceMatch
    })
    setFilteredProducts(filtered)
  }, [selectedCategories, priceRange, setFilteredProducts])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
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
          <div>
            <h3 className="text-lg font-semibold mb-2">Price Range</h3>
            <Slider
              min={0}
              max={20000}
              step={1000}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>₦{priceRange[0]}</span>
              <span>₦{priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

