import LayoutHeader from '../layout/LayoutHeader'
import { Code, Heading, HStack } from '@chakra-ui/react'
import gameQueryContext from './gameQueryContext'
import gameContext from './gameContext'
import LayoutNotFound from '../layout/LayoutNotFound'
import JoinGame from './JoinGame'
import AuthController from '../auth/AuthController'
import { ClinkRobe } from 'clink-robe'
import StartGame from './StartGame'
import GameConsumer from './GameConsumer'
import { ConvexError } from 'convex/values'
import ServiceController from '../service/ServiceController'
import type { JSX } from 'react'

export default function GameContent (props: {
  gameId: string
}): JSX.Element {
  const gameQuery = gameQueryContext.query.use()
  if (gameQuery.isPending) {
    return <LayoutHeader loading />
  }
  if (gameQuery.isError) {
    if (gameQuery.error instanceof ConvexError && gameQuery.error.data.notFound === true) {
      return <LayoutNotFound id={props.gameId} label='Game' />
    }
    return (
      <>
        <LayoutHeader />
        <Code colorScheme='red'>{gameQuery.error.message}</Code>
      </>
    )
  }
  if (gameQuery.data.game == null) {
    return (
      <LayoutNotFound id={props.gameId} label='Game' />
    )
  }
  const path = `/game/${gameQuery.data.game._id}`
  return (
    <AuthController user={gameQuery.data.auth}>
      <gameContext.Provider game={gameQuery.data.game}>
        <ServiceController>
          <LayoutHeader>
            <ClinkRobe to={path}>
              <Heading size='sm'>{gameQuery.data.game?.name}</Heading>
            </ClinkRobe>
          </LayoutHeader>
          <HStack>
            <JoinGame />
            <StartGame />
          </HStack>
          <GameConsumer />
        </ServiceController>
      </gameContext.Provider>
    </AuthController>
  )
}
