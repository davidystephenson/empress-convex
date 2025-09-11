import cards from './cards.json'
import type { Card } from './cardTypes'

export default function guardCard (props: {
  rank: number
}): Card {
  const card = cards[props.rank - 1]
  if (card == null) {
    throw new Error(`Card with rank ${props.rank} not found`)
  }
  return card
}