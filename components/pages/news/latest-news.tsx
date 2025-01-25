"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { newsArticles } from "@/lib/data/news-articles"
import Link from "next/link"

export function LatestNews() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsArticles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/news/${article.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img src={article.image || "/placeholder.svg"} alt="" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

