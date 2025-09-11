import { LongRowmanceRobe } from 'robes'
import PlayerCells from './PlayerCells'
import { useState, type JSX } from 'react'
import gameContext from '../game/gameContext'

export default function PlayerList (): JSX.Element {
  const game = gameContext.use()
  const [query, setQuery] = useState<string>()
  function handleFilter (props: { query?: string }): void {
    setQuery(props.query)
  }
  const filteredPlayers = game.players.filter(player => {
    if (query == null) return true
    return player.user.name.toLowerCase().includes(query.toLowerCase())
  })
  return (
    <LongRowmanceRobe
      Cells={PlayerCells}
      columns={['Player', '']}
      data={filteredPlayers ?? []}
      onSearch={handleFilter}
    />
  )
}
