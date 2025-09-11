import { useParams } from 'react-router-dom'
import GameContent from './GameContent'
import gameQueryContext from './gameQueryContext'
import type { JSX } from 'react'

export default function GamePage (): JSX.Element {
  const params = useParams()
  if (params.gameId == null) {
    throw new Error('There is no gameId')
  }
  return (
    <gameQueryContext.Provider args={{ gameId: params.gameId }}>
      <GameContent gameId={params.gameId} />
    </gameQueryContext.Provider>
  )
}
