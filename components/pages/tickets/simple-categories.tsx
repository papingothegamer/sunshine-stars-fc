"use client"

export function TicketCategories() {
  return (
    <div className="mb-8">
      <div className="p-4 bg-muted rounded-md">
        <h3 className="font-medium mb-2">Filter by Competition</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 bg-primary text-white rounded-full">All</button>
          <button className="px-3 py-1 bg-white hover:bg-gray-100 rounded-full">Premier League</button>
          <button className="px-3 py-1 bg-white hover:bg-gray-100 rounded-full">FA Cup</button>
          <button className="px-3 py-1 bg-white hover:bg-gray-100 rounded-full">League Cup</button>
        </div>
      </div>
    </div>
  )
}

