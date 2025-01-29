import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  name: string
  image: string
  href: string
}

export function CategoryCard({ name, image, href }: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden group transition-transform hover:scale-105">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{name}</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

