import { Heading, HStack } from '@chakra-ui/react'
import type { JSX } from 'react'
import JoinGame from './JoinGame'
import StartGame from './StartGame'
import gameContext from './gameContext'
import ClinkRobe from 'clink-robe'
import CopyGame from './CopyGame'

export default function GameControls (): JSX.Element {
  const game = gameContext.use()
  if (game.startingUserId != null) {
    return <></>
  }

  return (
    <HStack>
      <ClinkRobe to={`/game/${game._id}`}>
        <Heading>{game.name}</Heading>
      </ClinkRobe>
      <CopyGame />
      <JoinGame />
      <StartGame />
    </HStack>
  )
}
