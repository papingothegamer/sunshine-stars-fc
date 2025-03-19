"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "../components/ui/card"
import { ArrowUpRight, Calendar } from "lucide-react"
import { newsArticles, type NewsArticle } from "../lib/data/news-articles"
import { Badge } from "../components/ui/badge"
import { format } from "date-fns"

export function FeaturedNews({ hideViewAll = false }) {
  const featuredArticles = newsArticles
    .filter((article) => article.featured)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Featured News</h2>
          {!hideViewAll && (
            <Link href="/news" className="group flex items-center text-primary hover:underline">
              <span>View all news</span>
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {featuredArticles.map((article, index) => (
            <FeaturedNewsCard key={article.id} article={article} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedNewsCard({ article, index }: { article: NewsArticle; index: number }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return format(date, "MMM dd, yyyy")
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "match-report": "bg-green-100 text-green-800",
      transfer: "bg-blue-100 text-blue-800",
      "injury-update": "bg-red-100 text-red-800",
      "tactical-analysis": "bg-purple-100 text-purple-800",
      "club-update": "bg-yellow-100 text-yellow-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  // Define the item animation variant here to avoid the reference error
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={itemVariant}>
      <Link href={`/news/${article.id}`} className="block h-full">
        <Card className="overflow-hidden hover-card h-full">
          <CardContent className="p-0 h-full flex flex-col">
            <div className="relative">
              <img src={article.image || "/placeholder.svg"} alt="" className="h-48 w-full object-cover" />
              <div className="absolute top-2 left-2">
                <Badge className={getCategoryColor(article.category)}>{article.category.split("-").join(" ")}</Badge>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mt-auto">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(article.date)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

