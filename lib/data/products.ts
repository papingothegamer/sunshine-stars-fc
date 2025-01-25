export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: "apparel" | "kit" | "souvenir"
  }
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Home Kit 2025",
      description: "Official Sunshine Stars FC home kit for the 2025 season.",
      price: 59.99,
      image: "/placeholder.svg",
      category: "kit",
    },
    {
      id: "2",
      name: "Away Kit 2025",
      description: "Official Sunshine Stars FC away kit for the 2025 season.",
      price: 59.99,
      image: "/placeholder.svg",
      category: "kit",
    },
    {
      id: "3",
      name: "Sunshine Stars FC Scarf",
      description: "Show your support with this official club scarf.",
      price: 19.99,
      image: "/placeholder.svg",
      category: "apparel",
    },
    {
      id: "4",
      name: "Sunshine Stars FC Cap",
      description: "Stylish cap featuring the club logo.",
      price: 24.99,
      image: "/placeholder.svg",
      category: "apparel",
    },
    {
      id: "5",
      name: "Miniature Football",
      description: "Collectible miniature football with club colors and logo.",
      price: 14.99,
      image: "/placeholder.svg",
      category: "souvenir",
    },
    {
      id: "6",
      name: "Sunshine Stars FC Mug",
      description: "Start your day with a cup of coffee in this official club mug.",
      price: 12.99,
      image: "/placeholder.svg",
      category: "souvenir",
    },
  ]
  
  