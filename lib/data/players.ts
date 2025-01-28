// Types
export interface BasePersonnel {
  id: number
  name: string
  image: string
}

export interface Player extends BasePersonnel {
  number: number
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward"
  normalImage: string
  hoverImage: string
  featured?: boolean // For shop display
}

export interface StaffMember extends BasePersonnel {
  role: string
}

// Full squad for club page
export const fullSquad: Player[] = [
    // Goalkeepers
    {
      id: 1,
      name: "David Osifo",
      number: 1,
      position: "Goalkeeper",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 2,
      name: "Sunday Akinbinu",
      number: 12,
      position: "Goalkeeper",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 3,
      name: "Moses Ocheje",
      number: 30,
      position: "Goalkeeper",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
  
    // Defenders
    {
      id: 4,
      name: "Kunle Odunlami",
      number: 2,
      position: "Defender",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 5,
      name: "Emmanuel Adeyemo",
      number: 3,
      position: "Defender",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 6,
      name: "Seun Olulayo",
      number: 4,
      position: "Defender",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 7,
      name: "Kehinde Adedipe",
      number: 5,
      position: "Defender",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 8,
      name: "Sunday Abiodun",
      number: 13,
      position: "Defender",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 9,
      name: "Tunde Bello",
      number: 14,
      position: "Defender",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 10,
      name: "Ibrahim Ajani",
      number: 15,
      position: "Defender",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 11,
      name: "Ebuka Akobundu",
      number: 25,
      position: "Defender",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
  
    // Midfielders
    {
      id: 12,
      name: "Sunday Adetunji",
      number: 6,
      position: "Midfielder",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 13,
      name: "Fuad Ekelojuoti",
      number: 8,
      position: "Midfielder",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 14,
      name: "Kabiru Adeniji",
      number: 16,
      position: "Midfielder",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 15,
      name: "Waheed Adebayo",
      number: 17,
      position: "Midfielder",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 16,
      name: "Innocent Gabriel",
      number: 18,
      position: "Midfielder",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 17,
      name: "Chisom Okereke",
      number: 19,
      position: "Midfielder",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 18,
      name: "Mutiu Ogundimu",
      number: 20,
      position: "Midfielder",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 19,
      name: "Ibrahim Yusuf",
      number: 21,
      position: "Midfielder",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
  
    // Forwards
    {
      id: 20,
      name: "Sadeeq Yusuf",
      number: 7,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 21,
      name: "Leonard Ugochukwu",
      number: 9,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 22,
      name: "Ejike Uzoechi",
      number: 10,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 23,
      name: "Samson Olasupo",
      number: 11,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 24,
      name: "Chinedu Udechukwu",
      number: 22,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 25,
      name: "Ibrahim Ajani",
      number: 23,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 26,
      name: "Kehinde Ayinde",
      number: 24,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 27,
      name: "Tunde Adeniji",
      number: 26,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 28,
      name: "Sikiru Alimi",
      number: 27,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 29,
      name: "Wasiu Jimoh",
      number: 28,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 30,
      name: "Jide Fatokun",
      number: 29,
      position: "Forward",
      normalImage: "/placeholder.svg",
      hoverImage: "/placeholder.svg",
      image: "/placeholder.svg",
      featured: false,
    },
  ] as const

// Selected 11 players for shop display
export const shopPlayers: Player[] = fullSquad.filter((player) => {
  const featuredPositions = {
    Goalkeeper: 1,
    Defender: 4,
    Midfielder: 3,
    Forward: 3,
  }

  const selectedByPosition = fullSquad
    .filter((p) => p.position === player.position && p.featured)
    .slice(0, featuredPositions[player.position])

  return selectedByPosition.some((p) => p.id === player.id)
})

// Helper function to get players by position
export const getPlayersByPosition = (players: Player[] = fullSquad) => {
  return players.reduce(
    (acc, player) => {
      const position = player.position
      if (!acc[position]) {
        acc[position] = []
      }
      acc[position].push(player)
      return acc
    },
    {} as Record<string, Player[]>,
  )
}

  
  export const technicalTeam = [
    { id: 1, name: "Dr. Ademola Adesina", role: "Team Doctor", image: "/placeholder.svg" },
    { id: 2, name: "Kayode Johnson", role: "Physiotherapist", image: "/placeholder.svg" },
    { id: 3, name: "Olumide Akinroyeje", role: "Fitness Coach", image: "/placeholder.svg" },
    { id: 4, name: "Tunde Adeleke", role: "Performance Analyst", image: "/placeholder.svg" },
    { id: 5, name: "Segun Oluwaniyi", role: "Kit Manager", image: "/placeholder.svg" },
    { id: 6, name: "Bayo Adeyemi", role: "Team Coordinator", image: "/placeholder.svg" },
    { id: 7, name: "Femi Awogbemi", role: "Logistics Manager", image: "/placeholder.svg" },
    { id: 8, name: "Toyin Ayinla", role: "Welfare Officer", image: "/placeholder.svg" },
  ]
  
  export const coaches = [
    { id: 1, name: "Deji Ayeni", role: "Head Coach", image: "/placeholder.svg" },
    { id: 2, name: "Akin Olowookere", role: "Assistant Coach", image: "/placeholder.svg" },
    { id: 3, name: "Nnamdi Onubogu", role: "Goalkeeper Coach", image: "/placeholder.svg" },
  ]
  
 // Helper function to get featured players for a specific position
export const getFeaturedPlayersByPosition = (position: Player["position"]) => {
  return shopPlayers.filter((player) => player.position === position)
}

// Helper function to get all featured players
export const getAllFeaturedPlayers = () => shopPlayers

// Update product creation to use the new player interface
export const createPlayerKit = (player: Player) => ({
  id: `home-kit-2025-${player.id}`,
  name: `Sunshine Stars Home Jersey 2024/25 with ${player.name} ${player.number} printing`,
  description: `Official Sunshine Stars FC home kit for the 2024/25 season featuring ${player.name}'s name and number ${player.number}.`,
  price: 15000,
  originalPrice: 20000,
  discount: 30,
  image: player.normalImage,
  category: "kits" as const,
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
})

export { fullSquad as players }

