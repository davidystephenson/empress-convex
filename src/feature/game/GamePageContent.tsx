import LayoutHeader from "../layout/LayoutHeader"
import { LongRowmanceRobe } from "robes"
import { useState } from "react"
import { Heading, HStack } from "@chakra-ui/react"
import gameQueryContext from "./gameQueryContext"
import gameContext from "./gameContext"
import PlayerCells from "../player/PlayerCells"
import LayoutNotFound from "../layout/LayoutNotFound"
import JoinGame from "./JoinGame"
import AuthController from "../auth/AuthController"
import { ClinkRobe } from "clink-robe"
import CopyGame from "./CopyGame"
import StartGame from "./StartGame"
import episodesContext from "../episode/episodesContext"

export default function GamePageContent(props: {
  gameId: string
}) {
  const gameQuery = gameQueryContext.query.use()
  if (gameQuery.loading) {
    return <LayoutHeader loading />
  }
  if (gameQuery.data.game == null) {
    return (
      <LayoutNotFound id={props.gameId} label="Game" />
    )
  }
  const [query, setQuery] = useState<string>()
  function handleFilter(props: { query?: string }) {
    setQuery(props.query)
  }
  const filteredPlayers = query == null
    ? gameQuery.data.game.players
    : gameQuery.data.game.players?.filter(player => {
      if (query == null) return true
      return player.user.name.toLowerCase().includes(query.toLowerCase())
    })
  const path = `/game/${gameQuery.data.game._id}`
  console.log('gameQuery.data', gameQuery.data)
  return (
    <AuthController user={gameQuery.data.auth}>
      <LayoutHeader loading={gameQuery.loading} name={gameQuery.data.auth?.name} />
      <gameContext.Provider game={gameQuery.data.game}>
        <episodesContext.Provider {...gameQuery.data.episodes}>
          <HStack>
            <ClinkRobe to={path}>
              <Heading>{gameQuery.data.game?.name}</Heading>
            </ClinkRobe>
            <CopyGame />
            <JoinGame />
            <StartGame />
          </HStack>
          <LongRowmanceRobe
            Cells={PlayerCells}
            columns={['Player', '']}
            data={filteredPlayers ?? []}
            onSearch={handleFilter}
          />
        </episodesContext.Provider>
      </gameContext.Provider>
    </AuthController >
  )
}