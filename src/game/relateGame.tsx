import type { Doc } from '../../convex/_generated/dataModel'
import type { Ctx } from '../arched/archedTypes'
import relatePlayers from '../player/relatePlayers'

export default async function relateGame (props: { ctx: Ctx, game: Doc<'games'> }) {
  const players = await props.ctx
    .db
    .query('players')
    .withIndex('game', (q) => q.eq('gameId', props.game._id))
    .collect()
  const relatedPlayers = await relatePlayers({ ctx: props.ctx, players })
  const game = { ...props.game, players: relatedPlayers }
  return game
}
