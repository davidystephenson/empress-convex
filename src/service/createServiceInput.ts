import type { Input, InputPlayer } from '@davidystephenson/cardservice'
import type { Doc, Id } from '../../convex/_generated/dataModel'
import { SERVICE_BASE } from './serviceConstants'
import type { RelatedGame } from '../game/gameTypes'
import getServiceCount from './getServiceCount'

export default function createServiceInput(props: {
  game: RelatedGame
  startingUserId: Id<'users'>
}) {
  const playerCount = getServiceCount({ game: props.game })
  const players = props.game.players.map((player) => {
    const inputPlayer: InputPlayer = {
      id: player.user._id,
      name: player.user.name
    }
    return inputPlayer
  })
  const input: Input = {
    ...SERVICE_BASE,
    events: [],
    gameId: props.game._id,
    playerCount,
    players,
    seed: props.game._id,
    startingPlayerId: props.startingUserId,
  }
  return input
}