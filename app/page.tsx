import { HeroSection } from "@/components/hero-section"
import { FeaturedNews } from "@/components/featured-news"
import { LatestVideos } from "@/components/latest-videos"
import { HighlightsSection } from "@/components/highlights-section"
import { SponsorsMarquee } from "@/components/sponsors-marquee"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedNews />
      <LatestVideos />
      <HighlightsSection />
      <SponsorsMarquee />
    </>
  )
}

