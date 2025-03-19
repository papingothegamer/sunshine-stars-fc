"use client"

import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Star, Calendar, Filter } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TicketFilters() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { value: "all", label: "All Competitions", icon: Trophy },
    { value: "premier-league", label: "Premier League", icon: Star },
    { value: "fa-cup", label: "FA Cup", icon: Trophy },
    { value: "league-cup", label: "League Cup", icon: Calendar },
  ]

  const selectedCategoryData = categories.find(c => c.value === selectedCategory)
  const SelectedIcon = selectedCategoryData?.icon

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="mb-8"
    >
      {/* Desktop view */}
      <div className="hidden md:block">
        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="w-full justify-start bg-muted/50 p-1">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value} 
                className="flex items-center gap-2 data-[state=active]:bg-white"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      {/* Mobile view */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full flex justify-between items-center">
              <div className="flex items-center gap-2">
                {SelectedIcon && <SelectedIcon className="h-4 w-4" />}
                <span>{selectedCategoryData?.label || "Select competition"}</span>
              </div>
              <Filter className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full min-w-[200px]">
            {categories.map((category) => (
              <DropdownMenuItem 
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  )
}

