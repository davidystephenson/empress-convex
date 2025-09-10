import LayoutHeader from "../layout/LayoutHeader"
import { Heading, HStack } from "@chakra-ui/react"
import gameQueryContext from "./gameQueryContext"
import gameContext from "./gameContext"
import LayoutNotFound from "../layout/LayoutNotFound"
import JoinGame from "./JoinGame"
import AuthController from "../auth/AuthController"
import { ClinkRobe } from "clink-robe"
import CopyGame from "./CopyGame"
import StartGame from "./StartGame"
import episodesContext from "../episode/episodesContext"
import GameController from "./GameController"

export default function GamePageContent(props: {
  gameId: string
}) {
  const gameQuery = gameQueryContext.query.use()
  if (gameQuery.isPending) {
    return <LayoutHeader loading />
  }
  if (gameQuery.isError) {
    return (
      <>
        <LayoutHeader />
        <>???</>
      </>
    )
  }
  if (gameQuery.data.game == null) {
    return (
      <LayoutNotFound id={props.gameId} label="Game" />
    )
  }
  const path = `/game/${gameQuery.data.game._id}`
  return (
    <AuthController user={gameQuery.data.auth}>
      <LayoutHeader />
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
          <GameController />
        </episodesContext.Provider>
      </gameContext.Provider>
    </AuthController >
  )
}