import type { Doc } from '../../convex/_generated/dataModel'
import type { RelatedPlayer } from '../player/playerTypes'

export interface RelatedGame extends Doc<'games'> {
  players: RelatedPlayer[]
}
