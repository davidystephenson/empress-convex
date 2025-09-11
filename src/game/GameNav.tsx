import { Heading, HStack } from '@chakra-ui/react'
import ClinkRobe from 'clink-robe'
import gameContext from './gameContext'
import TinyRankedCard from '../card/TinyRankedCard'
import type { JSX } from 'react'
import CopyGame from './CopyGame'

export default function GameNav (): JSX.Element {
  const game = gameContext.use()
  if (game.startingUserId == null) {
    return <></>
  }
  const path = `/game/${game._id}`
  return (
    <HStack>
      <ClinkRobe to={path}>
        <Heading size='sm'>{game.name}</Heading>
      </ClinkRobe>
      <CopyGame />
      <TinyRankedCard rank={1} />
    </HStack>
  )
}
