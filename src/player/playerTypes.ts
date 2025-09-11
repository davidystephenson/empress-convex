import type { Doc } from '../../convex/_generated/dataModel'

export interface RelatedPlayer extends Doc<'players'> {
  user: Doc<'users'>
}
