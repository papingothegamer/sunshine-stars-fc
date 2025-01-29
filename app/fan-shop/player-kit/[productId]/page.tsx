import { PlayerKitDetail } from "@/components/pages/fan-shop/player-kit-detail"
import { shopPlayers } from "@/lib/data/players"
import { notFound } from "next/navigation"

interface PlayerKitPageProps {
  params: {
    productId: string
  }
}

export default function PlayerKitPage({ params }: PlayerKitPageProps) {
  const playerId = Number.parseInt(params.productId.split("-").pop() || "0", 10)
  const player = shopPlayers.find((p) => p.id === playerId)

  if (!player) {
    notFound()
  }

  return <PlayerKitDetail player={player} />
}

