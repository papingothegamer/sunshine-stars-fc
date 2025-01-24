import type { Metadata } from "next"
import { MatchdayLayout } from "@/components/pages/matchday/matchday-layout"

export const metadata: Metadata = {
  title: "Matchday Guide | Sunshine Stars FC",
  description: "Everything you need to know about matchday at Sunshine Stadium",
}

export default function MatchdayPage() {
  return <MatchdayLayout />
}

