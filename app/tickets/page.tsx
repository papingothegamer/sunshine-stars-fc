import { TicketingHeader } from "@/components/pages/tickets/ticketing-header"
import { MatchList } from "@/components/pages/tickets/match-list"
import { TicketCategories } from "@/components/pages/tickets/ticket-categories"
import { TicketingAlert } from "@/components/pages/tickets/ticketing-alert"
import { TicketDialogProvider } from "@/components/pages/tickets/ticket-dialog"

export default function TicketsPage() {
  return (
    <TicketDialogProvider>
      <div className="relative">
        <TicketingHeader />
        <TicketingAlert
          type="warning"
          message="Limited tickets remain for this Sunday's huge clash against City Rangers. Don't miss out - secure your seat today!"
        />
        <TicketingAlert
          type="info"
          message="IMPORTANT: Ticket touting (scalping) is illegal and supporters who purchase tickets unofficially will be refused entry at the stadium. Only buy from official sellers"
        />
        <div className="container mx-auto px-4 py-8">
          <TicketCategories />
          <MatchList />
        </div>
      </div>
    </TicketDialogProvider>
  )
}

