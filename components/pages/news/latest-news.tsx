"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { newsArticles } from "@/lib/data/news-articles"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function LatestNews() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {newsArticles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/news/${article.id}`}>
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-primary/10">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={article.image || "/placeholder.svg"} 
                    alt="" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-primary/90 text-white backdrop-blur-sm">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-sm text-white/60">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

