import { ProductGrid } from "@/components/pages/fan-shop/product-grid"
import { products } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function KitsPage() {
  const kitsProducts = products.filter((product) => product.category === "kits")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold font-anton">Kits</h1>
        <Link href="/fan-shop">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Fan Shop
          </Button>
        </Link>
      </div>
      <ProductGrid products={kitsProducts} />
    </div>
  )
}

