import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { NewsHero } from "@/components/pages/news/news-hero"
import { NewsletterCTA } from "@/components/pages/news/newsletter-cta"

// Dynamically import interactive components with SSR disabled
const FeaturedNews = dynamic(() => import('@/components/featured-news').then(mod => mod.FeaturedNews), {
  ssr: false,
})

const LatestVideos = dynamic(() => import('@/components/latest-videos').then(mod => mod.LatestVideos), {
  ssr: false,
})

// Loading placeholder components
function LoadingSection() {
  return (
    <div className="w-full h-[400px] bg-secondary/10 animate-pulse rounded-lg" />
  )
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-primary/10">
      <Suspense fallback={<LoadingSection />}>
        <NewsHero />
      </Suspense>
      
      <div className="container mx-auto px-4">
        <Suspense fallback={<LoadingSection />}>
          <FeaturedNews hideViewAll />
        </Suspense>
        
      
        
        <Suspense fallback={<LoadingSection />}>
          <LatestVideos hideViewAll />
        </Suspense>  
        <NewsletterCTA />
      </div>
    </div>
  )
}

