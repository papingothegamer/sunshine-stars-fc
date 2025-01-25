import type { Metadata } from "next"
import { NewsLayout } from "@/components/pages/news/news-layout"
import { NewsProvider } from "@/components/pages/news/news-provider"

export const metadata: Metadata = {
  title: "News | Sunshine Stars FC",
  description: "Latest news, articles, and videos from Sunshine Stars Football Club",
}

export default function NewsPage() {
  return (
    <NewsProvider>
      <NewsLayout />
    </NewsProvider>
  )
}

