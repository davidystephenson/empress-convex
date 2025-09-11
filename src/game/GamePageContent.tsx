import LayoutHeader from "../layout/LayoutHeader"
import { Code, Heading, HStack } from "@chakra-ui/react"
import gameQueryContext from "./gameQueryContext"
import gameContext from "./gameContext"
import LayoutNotFound from "../layout/LayoutNotFound"
import JoinGame from "./JoinGame"
import AuthController from "../auth/AuthController"
import { ClinkRobe } from "clink-robe"
import CopyGame from "./CopyGame"
import StartGame from "./StartGame"
import GameController from "./GameController"
import { ConvexError } from "convex/values"

export default function GamePageContent(props: {
  gameId: string
}) {
  const gameQuery = gameQueryContext.query.use()
  if (gameQuery.isPending) {
    return <LayoutHeader loading />
  }
  if (gameQuery.isError) {
    if (gameQuery.error instanceof ConvexError && gameQuery.error.data.notFound) {
      return <LayoutNotFound id={props.gameId} label="Game" />
    }
    return (
      <>
        <LayoutHeader />
        <Code colorScheme="red">{gameQuery.error.message}</Code>
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
        <HStack>
          <ClinkRobe to={path}>
            <Heading>{gameQuery.data.game?.name}</Heading>
          </ClinkRobe>
          <CopyGame />
          <JoinGame />
          <StartGame />
        </HStack>
        <GameController />
      </gameContext.Provider>
    </AuthController >
  )
}