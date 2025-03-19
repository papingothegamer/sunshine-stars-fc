import { TicketingHeader } from "@/components/pages/tickets/ticketing-header"
import { TicketingAlert } from "@/components/pages/tickets/ticketing-alert"
import { TicketCategories } from "@/components/pages/tickets/simple-categories"
import { MatchList } from "@/components/pages/tickets/match-list"
import { TicketDialogProvider } from "../../components/pages/tickets/ticket-dialog"

export default function MensTicketsPage() {
  return (
    <TicketDialogProvider>
      <TicketingAlert
        type="warning"
        message="High demand expected for the upcoming derby match. Book early to avoid disappointment."
      />
      <TicketingHeader />
      <div className="bg-gradient-to-br from-secondary via-background to-primary/10 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_25%,rgba(68,107,158,0.1)_50%,transparent_50%,transparent_75%,rgba(68,107,158,0.1)_75%)] bg-[length:24px_24px] pointer-events-none" />
        <div className="container mx-auto px-4 py-12 relative">
          <h1 className="text-3xl font-bold mb-6">Men's Team Tickets</h1>
          <TicketCategories />
          <MatchList />
        </div>
      </div>
    </TicketDialogProvider>
  )
}

