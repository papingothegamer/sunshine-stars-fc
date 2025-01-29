import { ShopHero } from "@/components/pages/fan-shop/shop-hero"
import { ProductGrid } from "@/components/pages/fan-shop/product-grid"
import { ShopByPlayer } from "@/components/pages/fan-shop/shop-by-player"
import { products } from "@/lib/data/products"
import { CategoryCard } from "@/components/pages/fan-shop/categories/category-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FanShopPage() {
  const featuredProducts = products.filter((product) => product.featured)
  const discountedProducts = products.filter((product) => product.discount)

  const categories = [
    { name: "Kits", image: "/placeholder.svg", href: "/fan-shop/categories/kits" },
    { name: "Training", image: "/placeholder.svg", href: "/fan-shop/categories/training" },
    { name: "Lifestyle", image: "/placeholder.svg", href: "/fan-shop/categories/lifestyle" },
    { name: "Accessories", image: "/placeholder.svg", href: "/fan-shop/categories/accessories" },
  ]

  return (
    <main>
      <ShopHero />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
      <ProductGrid products={featuredProducts} title="Featured Products" />
      <ShopByPlayer />
      <ProductGrid products={discountedProducts} title="Special Offers" />
      <div className="container mx-auto px-4 py-12 text-center">
        <Link href="/fan-shop/all-products">
          <Button size="lg">View All Products</Button>
        </Link>
      </div>
    </main>
  )
}

