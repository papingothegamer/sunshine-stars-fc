import { Player as PlayerType } from './players'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  category: "kits" | "training" | "lifestyle" | "accessories"
  subCategory?: string
  sizes?: string[]
  inStock: boolean
  isCustomizable?: boolean
  featured?: boolean
  playerOptions?: {
    player: Player
    price: number
  }[]
  selectedSize?: string
}

export const products: Product[] = [
  {
    id: "home-kit-2025",
    name: "Sunshine Stars Home Kit 2024/25",
    description:
      "Official Sunshine Stars FC home kit for the 2024/25 season. Features the club crest and sponsor logos. Made with sustainable materials for maximum comfort and performance.",
    price: 15000,
    originalPrice: 20000,
    discount: 30,
    image:
      "/placeholder.svg",
    category: "kits",
    subCategory: "home",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    inStock: true,
    isCustomizable: true,
    featured: true,
  },
  {
    id: "away-kit-2025",
    name: "Sunshine Stars Away Kit 2024/25",
    description:
      "Official Sunshine Stars FC away kit for the 2024/25 season. Bold design that represents our club's heritage.",
    price: 15000,
    originalPrice: 20000,
    discount: 30,
    image: "/placeholder.svg",
    category: "kits",
    subCategory: "away",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    inStock: true,
    isCustomizable: true,
  },
  {
    id: "training-jacket-2025",
    name: "Sunshine Stars Training Jacket",
    description: "Official training jacket worn by the team. Perfect for training sessions and casual wear.",
    price: 12000,
    image: "/placeholder.svg",
    category: "training",
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
  },
  {
    id: "lifestyle-tee",
    name: "Sunshine Stars Lifestyle T-Shirt",
    description: "Casual t-shirt featuring the Sunshine Stars logo. Perfect for everyday wear.",
    price: 5000,
    image: "/placeholder.svg",
    category: "lifestyle",
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
  },
  {
    id: "scarf-2025",
    name: "Sunshine Stars Supporter Scarf",
    description: "Show your support with this official club scarf featuring team colors and crest.",
    price: 3000,
    originalPrice: 4000,
    discount: 25,
    image:
      "/placeholder.svg",
    category: "accessories",
    inStock: true,
  },
]

export const createPlayerKit = (player: Player): Product => {
  return {
    id: `home-kit-2025-${player.id}`,
    name: `Sunshine Stars Home Jersey 2024/25 with ${player.name} ${player.number} printing`,
    description: `Official Sunshine Stars FC home kit for the 2024/25 season featuring ${player.name}'s name and number ${player.number}.`,
    price: 15000,
    originalPrice: 20000,
    discount: 30,
    image: "/placeholder.svg",
    category: "kits",
    subCategory: "player",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    inStock: true,
    isCustomizable: false,
    playerOptions: [
      {
        player,
        price: 15000,
      },
    ],
  }
}

export interface Player {
  id: number
  name: string
  number: number
  position: string
  image: string
  normalImage: string
  hoverImage: string
}

export const players: Player[] = [
  {
    id: 1,
    name: "Samuel Adeniji",
    number: 10,
    position: "Forward",
    image: "/placeholder.svg",
    normalImage: "/placeholder.svg",
    hoverImage: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Kehinde Adedipe",
    number: 8,
    position: "Midfielder",
    image: "/placeholder.svg",
    normalImage: "/placeholder.svg",
    hoverImage: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Sunday Abiodun",
    number: 4,
    position: "Defender",
    image: "/placeholder.svg",
    normalImage: "/placeholder.svg",
    hoverImage: "/placeholder.svg",
  },
]

