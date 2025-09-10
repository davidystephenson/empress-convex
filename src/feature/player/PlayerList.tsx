import { LongRowmanceRobe } from "robes";
import episodesContext from "../episode/episodesContext";
import PlayerCells from "./PlayerCells";
import { useState } from "react";
import gameContext from "../game/gameContext";

export default function PlayerList() {
  const episodes = episodesContext.use()
  const game = gameContext.use()
  if (episodes.starts.length > 0) {
    return <>Game</>
  }
  const [query, setQuery] = useState<string>()
  function handleFilter(props: { query?: string }) {
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