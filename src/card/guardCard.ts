import cards from './cards.json'
import type { CardBase } from './cardTypes'

export default function guardCard (props: {
  rank: number
}): CardBase {
  const card = cards[props.rank - 1]
  if (card == null) {
    throw new Error(`Card with rank ${props.rank} not found`)
  }
  return card
}
