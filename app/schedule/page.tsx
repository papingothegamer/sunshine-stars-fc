import type { Metadata } from "next"
import { ScheduleLayout } from "@/components/pages/schedule/schedule-layout"
import { ScheduleProvider } from "@/components/pages/schedule/schedule-provider"

export const metadata: Metadata = {
  title: "Schedule & Stats | Sunshine Stars FC",
  description: "View schedule, standings, and stats for Sunshine Stars Football Club",
}

export default function SchedulePage() {
  return (
    <ScheduleProvider>
      <ScheduleLayout />
    </ScheduleProvider>
  )
}

