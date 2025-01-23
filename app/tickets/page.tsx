import { TicketingLayout } from "@/components/pages/tickets/ticketing-layout"
import { TicketCategories } from "@/components/pages/tickets/ticket-categories"
import { MatchList } from "@/components/pages/tickets/match-list"

export default function TicketsPage() {
  return (
    <div className="min-h-screen pattern-bg">
      <TicketingLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-6xl font-anton mb-8">Buy Tickets</h1>
          <TicketCategories />
          <MatchList />
        </div>
      </TicketingLayout>
    </div>
  )
}

