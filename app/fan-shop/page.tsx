import { ShopHero } from "@/components/pages/fan-shop/shop-hero"
import { ProductGrid } from "@/components/pages/fan-shop/product-grid"
import { ShopByPlayer } from "@/components/pages/fan-shop/shop-by-player"
import { products } from "@/lib/data/products"

export default function FanShopPage() {
  const featuredProducts = products.filter((product) => product.featured)
  const discountedProducts = products.filter((product) => product.discount)

  return (
    <main>
      <ShopHero />
      <ProductGrid products={featuredProducts} title="Featured Products" />
      <ShopByPlayer />
      <ProductGrid products={discountedProducts} title="Special Offers" />
    </main>
  )
}

