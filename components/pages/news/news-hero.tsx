"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { newsArticles } from "@/lib/data/news-articles"

export function NewsHero() {
  const featuredArticle = newsArticles[0]
  const recentArticles = newsArticles.slice(1, 4)

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-transparent h-[500px]" />
      
      <div className="relative pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-anton text-white">
              Latest Updates & News
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Stay informed with the latest news, match reports, and exclusive content from Sunshine Stars FC
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Main Featured Article */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link href={`/news/${featuredArticle.id}`}>
                <Card className="overflow-hidden group h-full bg-white border-primary/10">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-[300px] sm:h-[400px]">
                      <img 
                        src={featuredArticle.image} 
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                        <Badge className="bg-primary text-white">
                          {featuredArticle.category}
                        </Badge>
                        <h2 className="text-2xl sm:text-3xl font-bold text-secondary group-hover:text-white transition-colors">
                          {featuredArticle.title}
                        </h2>
                        <div className="flex items-center text-sm text-white/80">
                          <Calendar className="h-4 w-4 mr-2" />
                          {featuredArticle.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Recent Articles Sidebar */}
            <div className="space-y-4">
              {recentArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/news/${article.id}`}>
                    <Card className="overflow-hidden group bg-white border-primary/10">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="relative w-24 h-24 flex-shrink-0">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Badge variant="secondary" className="mb-2 bg-primary text-white">
                              {article.category}
                            </Badge>
                            <h3 className="text-base font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-1">
                              {article.title}
                            </h3>
                            <div className="flex items-center text-xs text-seocndary/60">
                              <Calendar className="h-3 w-3 mr-1" />
                              {article.date}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
