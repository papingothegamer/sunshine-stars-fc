export interface NewsArticle {
    id: string
    title: string
    excerpt: string
    content: string
    date: string
    author: string
    category: "match-report" | "transfer" | "injury-update" | "tactical-analysis" | "club-update"
    image?: string
    featured: boolean
  }
  
  export const newsArticles: NewsArticle[] = [
    {
      id: "1",
      title: "Sunshine Stars Secure Dramatic Win in Season Opener",
      excerpt:
        "A last-minute goal from captain Ibrahim Sunusi secured all three points for Sunshine Stars in their first match of the season.",
      content: "Full article content here...",
      date: "2023-09-15",
      author: "John Doe",
      category: "match-report",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: "2",
      title: "New Signing Impresses in Training",
      excerpt: "Recent acquisition Mohammed Ali has been turning heads with his performances in pre-season training.",
      content: "Full article content here...",
      date: "2023-09-10",
      author: "Jane Smith",
      category: "transfer",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: "3",
      title: "Youth Academy Graduate Signs Professional Contract",
      excerpt: "Talented 18-year-old midfielder Chukwu Emeka has signed his first professional contract with the club.",
      content: "Full article content here...",
      date: "2023-09-05",
      author: "Mike Johnson",
      category: "club-update",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: "4",
      title: "Injury Update: Star Striker Out for Two Weeks",
      excerpt: "Leading goalscorer David Adekola will miss the next two matches due to a hamstring strain.",
      content: "Full article content here...",
      date: "2023-09-01",
      author: "Sarah Williams",
      category: "injury-update",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "5",
      title: "Tactical Analysis: Breaking Down the Season Opener",
      excerpt: "Our expert analyst examines the key tactical decisions that led to victory in the first match.",
      content: "Full article content here...",
      date: "2023-08-28",
      author: "Technical Team",
      category: "tactical-analysis",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "6",
      title: "Sunshine Stars Secure Dramatic Win Against City Rivals",
      excerpt: "A last-minute goal seals victory in thrilling derby match",
      content:
        "In a pulsating encounter at the Sunshine Stadium, Sunshine Stars FC clinched a dramatic 2-1 victory against their city rivals...",
      image: "/placeholder.svg",
      date: "2025-01-24",
      author: "Sports Desk",
      category: "match-report",
      featured: true,
    },
    {
      id: "7",
      title: "New Signing: Star Striker Joins Sunshine Stars",
      excerpt: "Club breaks transfer record to secure prolific goalscorer",
      content:
        "Sunshine Stars FC is delighted to announce the signing of international striker John Doe from European giants FC Barcelona...",
      image: "/placeholder.svg",
      date: "2025-01-22",
      author: "Transfer Team",
      category: "transfer",
      featured: false,
    },
    {
      id: "8",
      title: "Tactical Breakdown: How Sunshine Stars Dominated Midfield",
      excerpt: "Analysis of the team's impressive performance in recent victory",
      content:
        "In this tactical analysis, we break down the key factors that led to Sunshine Stars' dominance in midfield during their recent 3-0 win...",
      image: "/placeholder.svg",
      date: "2025-01-20",
      author: "Tactical Team",
      category: "tactical-analysis",
      featured: false,
    },
    {
      id: "9",
      title: "Injury Update: Captain to Miss Next Three Matches",
      excerpt: "Team faces challenge as key player sidelined with hamstring strain",
      content:
        "Sunshine Stars FC regrets to announce that team captain Jane Smith will be unavailable for the next three matches due to a hamstring injury...",
      image: "/placeholder.svg",
      date: "2025-01-18",
      author: "Medical Team",
      category: "injury-update",
      featured: false,
    },
    {
      id: "10",
      title: "Sunshine Stars Launch New Community Initiative",
      excerpt: "Club partners with local schools to promote youth football",
      content:
        'Sunshine Stars FC is proud to announce the launch of our new community initiative, "Stars in Schools", aimed at promoting grassroots football...',
      image: "/placeholder.svg",
      date: "2025-01-16",
      author: "Community Outreach",
      category: "club-update",
      featured: false,
    },
  ]
  
  