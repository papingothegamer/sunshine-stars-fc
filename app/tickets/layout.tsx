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
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-primary/10">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_25%,rgba(68,107,158,0.1)_50%,transparent_50%,transparent_75%,rgba(68,107,158,0.1)_75%)] bg-[length:24px_24px] pointer-events-none" />
      {children}
    </div>
  )
}

