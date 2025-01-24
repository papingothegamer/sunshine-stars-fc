import type { Metadata } from "next"
import { ClubLayout } from "@/components/pages/club/club-layout"
import { ClubProvider } from "@/components/pages/club/club-provider"

export const metadata: Metadata = {
  title: "Club | Sunshine Stars FC",
  description: "Meet the players, technical team and coaches of Sunshine Stars Football Club",
}

export default function ClubPage() {
  return (
    <ClubProvider>
      <ClubLayout />
    </ClubProvider>
  )
}

