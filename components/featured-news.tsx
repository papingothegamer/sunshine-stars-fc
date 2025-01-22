"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedNews() {
  const featuredArticles = [
    {
      id: 1,
      title: "Sunshine Stars Sign Rising Star Midfielder",
      image: "/placeholder.svg",
      excerpt: "Sunshine Stars FC announced today the signing of talented midfielder to strengthen the squad...",
    },
    {
      id: 2,
      title: "Victory in Season Opener",
      image: "/placeholder.svg",
      excerpt: "A stunning performance leads to a convincing win in the season opener...",
    },
  ]

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-8">Featured News</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}

