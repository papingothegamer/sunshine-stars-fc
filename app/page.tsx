import { FeaturedNews } from "@/components/featured-news"
import { HighlightsSection } from "@/components/highlights-section"
import { LatestVideos } from "@/components/latest-videos"
import { SponsorsMarquee } from "@/components/sponsors-marquee"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <FeaturedNews />
      <HighlightsSection />
      <SponsorsMarquee />
      <LatestVideos />
    </div>
  )
}

