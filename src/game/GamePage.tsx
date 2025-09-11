import { useParams } from "react-router-dom"
import GamePageContent from "./GamePageContent"
import gameQueryContext from "./gameQueryContext"

export default function GamePage() {
  const params = useParams()
  if (params.gameId == null) {
    throw new Error('There is no gameId')
  }
  return (
    <gameQueryContext.Provider args={{ gameId: params.gameId }}>
      <GamePageContent gameId={params.gameId} />
    </gameQueryContext.Provider>
  )
}