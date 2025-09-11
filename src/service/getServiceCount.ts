import type { Input } from '@davidystephenson/cardservice'
import type { RelatedGame } from '../game/gameTypes'

export default function getServiceCount (props: {
  game: RelatedGame
}): Input['playerCount'] {
  switch (props.game.players.length) {
    case 0:
    case 1:
      throw new Error('Need at least 2 players to start a game')
    case 2:
    case 3:
    case 4:
    case 5:
      return props.game.players.length
    default:
      throw new Error('Cannot start a game with more than 5 players')
  }
}
