import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Buy Tickets | Sunshine Stars FC",
  description: "Purchase tickets for Sunshine Stars FC matches",
}

export default function TicketsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}

