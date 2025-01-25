export interface Video {
    id: string
    title: string
    thumbnail: string
    videoUrl: string
    duration: string
    date: string
    category: "highlights" | "interview" | "tactical-analysis" | "behind-the-scenes"
  }
  
  export const videos: Video[] = [
    {
      id: "1",
      title: "Match Highlights: Sunshine Stars 2-1 City Rivals",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://example.com/video1.mp4",
      duration: "10:32",
      date: "2025-01-24",
      category: "highlights",
    },
    {
      id: "2",
      title: "Post-Match Interview: Coach Discusses Tactical Approach",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://example.com/video2.mp4",
      duration: "5:45",
      date: "2025-01-24",
      category: "interview",
    },
    {
      id: "3",
      title: "Tactical Analysis: Breaking Down the Winning Goal",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://example.com/video3.mp4",
      duration: "7:20",
      date: "2025-01-25",
      category: "tactical-analysis",
    },
    {
      id: "4",
      title: "Behind the Scenes: New Signing's First Day at the Club",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://example.com/video4.mp4",
      duration: "8:15",
      date: "2025-01-23",
      category: "behind-the-scenes",
    },
    {
      id: "5",
      title: "Training Ground: Preparing for the Next Match",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://example.com/video5.mp4",
      duration: "6:50",
      date: "2025-01-22",
      category: "behind-the-scenes",
    },
  ]
  
  