import LayoutHeader from "../layout/LayoutHeader"
import { IconButtonRobe, LongRowmanceRobe } from "robes"
import { useState } from "react"
import { Heading, HStack } from "@chakra-ui/react"
import gameQueryContext from "./gameQueryContext"
import gameContext from "./gameContext"
import PlayerCells from "../player/PlayerCells"
import LayoutNotFound from "../layout/LayoutNotFound"
import JoinGame from "./JoinGame"
import AuthController from "../auth/AuthController"
import ClinkRobe from "clink-robe"
import { FaLink } from "react-icons/fa";

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
  function handleCopy () {
    navigator.clipboard.writeText(window.location.href)
  }
  return (
    <AuthController user={gameQuery.data.auth}>
      <gameContext.Provider game={gameQuery.data.game}>
        <LayoutHeader loading={gameQuery.loading} name={gameQuery.data.auth?.name} />
        <HStack>
          <ClinkRobe to={path}>
            <Heading>{gameQuery.data.game?.name}</Heading>
          </ClinkRobe>
          <IconButtonRobe
            aria-label="Copy game link"
            icon={<FaLink />}
            onClick={handleCopy}
            variant='ghost'
          />
          <JoinGame />
        </HStack>
        <LongRowmanceRobe
          Cells={PlayerCells}
          columns={['Player', '']}
          data={filteredPlayers ?? []}
          onSearch={handleFilter}
        />
      </gameContext.Provider>
    </AuthController>
  )
}