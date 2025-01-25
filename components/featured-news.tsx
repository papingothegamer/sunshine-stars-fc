"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { newsArticles, type NewsArticle } from "@/lib/data/news-articles"

export function FeaturedNews() {
  const featuredArticles = newsArticles
    .filter((article) => article.featured)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured News</h2>
          <Link href="/news" className="text-primary hover:underline flex items-center">
            View all news
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredArticles.map((article, index) => (
            <FeaturedNewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedNewsCard({ article, index }: { article: NewsArticle; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
      <Link href={`/news/${article.id}`} className="block h-full">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
          <CardContent className="p-0 h-full">
            <img src={article.image || "/placeholder.svg"} alt="" className="h-48 w-full object-cover" />
            <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-muted-foreground">{article.excerpt}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

