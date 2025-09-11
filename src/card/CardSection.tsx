import { Stack, Heading, HStack } from '@chakra-ui/react'
import TinyRankedCard from './TinyRankedCard'
import type { Card } from '@davidystephenson/cardservice'
import type { ReactNode } from 'react'

export default function CardSection (props: {
  cards: Card[]
  children?: ReactNode
  label: ReactNode
}) {
  const cards = props.cards.map(card => {
    return <TinyRankedCard key={card.id} rank={card.rank} />
  })
  return (
    <Stack spacing='3px'>
      <HStack>
        <Heading size='sm'>{props.label}</Heading>
        {props.children}
      </HStack>
      <HStack>
        {cards}
      </HStack>
    </Stack>
  )
}
