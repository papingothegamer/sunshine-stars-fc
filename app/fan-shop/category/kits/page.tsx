import { ProductGrid } from "@/components/pages/fan-shop/product-grid"
import { products } from "@/lib/data/products"

export default function KitsPage() {
  const kitsProducts = products.filter((product) => product.category === "kits")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Kits</h1>
      <ProductGrid products={kitsProducts} />
    </div>
  )
}

