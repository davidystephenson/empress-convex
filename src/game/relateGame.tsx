import type { Doc } from '../../convex/_generated/dataModel'
import type { Ctx } from '../arched/archedTypes'
import relatePlayers from '../player/relatePlayers'
import type { RelatedGame } from './gameTypes'

export default async function relateGame (props: { ctx: Ctx, game: Doc<'games'> }): Promise<RelatedGame> {
  const players = await props.ctx
    .db
    .query('players')
    .withIndex('game', (q) => q.eq('gameId', props.game._id))
    .collect()
  const relatedPlayers = await relatePlayers({ ctx: props.ctx, players })
  const game = { ...props.game, players: relatedPlayers }
  return game
}
