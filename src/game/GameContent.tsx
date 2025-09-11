import LayoutHeader from '../layout/LayoutHeader'
import { Code } from '@chakra-ui/react'
import gameQueryContext from './gameQueryContext'
import gameContext from './gameContext'
import LayoutNotFound from '../layout/LayoutNotFound'
import AuthController from '../auth/AuthController'
import GameConsumer from './GameConsumer'
import { ConvexError } from 'convex/values'
import ServiceController from '../service/ServiceController'
import type { JSX } from 'react'
import GameNav from './GameNav'
import GameControls from './GameControls'

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
  return (
    <AuthController user={gameQuery.data.auth}>
      <gameContext.Provider game={gameQuery.data.game}>
        <ServiceController>
          <LayoutHeader>
            <GameNav />
          </LayoutHeader>
          <GameControls />
          <GameConsumer />
        </ServiceController>
      </gameContext.Provider>
    </AuthController>
  )
}
