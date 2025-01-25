export interface NewsArticle {
    id: string
    title: string
    excerpt: string
    content: string
    image: string
    date: string
    category: "match-report" | "transfer" | "injury-update" | "tactical-analysis" | "club-update"
    featured?: boolean
  }
  
  export const newsArticles: NewsArticle[] = [
    {
      id: "1",
      title: "Sunshine Stars Secure Dramatic Win Against City Rivals",
      excerpt: "A last-minute goal seals victory in thrilling derby match",
      content:
        "In a pulsating encounter at the Sunshine Stadium, Sunshine Stars FC clinched a dramatic 2-1 victory against their city rivals...",
      image: "/placeholder.svg",
      date: "2025-01-24",
      category: "match-report",
      featured: true,
    },
    {
      id: "2",
      title: "New Signing: Star Striker Joins Sunshine Stars",
      excerpt: "Club breaks transfer record to secure prolific goalscorer",
      content:
        "Sunshine Stars FC is delighted to announce the signing of international striker John Doe from European giants FC Barcelona...",
      image: "/placeholder.svg",
      date: "2025-01-22",
      category: "transfer",
    },
    {
      id: "3",
      title: "Tactical Breakdown: How Sunshine Stars Dominated Midfield",
      excerpt: "Analysis of the team's impressive performance in recent victory",
      content:
        "In this tactical analysis, we break down the key factors that led to Sunshine Stars' dominance in midfield during their recent 3-0 win...",
      image: "/placeholder.svg",
      date: "2025-01-20",
      category: "tactical-analysis",
    },
    {
      id: "4",
      title: "Injury Update: Captain to Miss Next Three Matches",
      excerpt: "Team faces challenge as key player sidelined with hamstring strain",
      content:
        "Sunshine Stars FC regrets to announce that team captain Jane Smith will be unavailable for the next three matches due to a hamstring injury...",
      image: "/placeholder.svg",
      date: "2025-01-18",
      category: "injury-update",
    },
    {
      id: "5",
      title: "Sunshine Stars Launch New Community Initiative",
      excerpt: "Club partners with local schools to promote youth football",
      content:
        'Sunshine Stars FC is proud to announce the launch of our new community initiative, "Stars in Schools", aimed at promoting grassroots football...',
      image: "/placeholder.svg",
      date: "2025-01-16",
      category: "club-update",
    },
  ]
  
  