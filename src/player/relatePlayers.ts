import type { Doc } from '../../convex/_generated/dataModel'
import type { Ctx } from '../arched/archedTypes'
import { overAll } from 'overpromise'
import guard from '../arched/guard'
import type { RelatedPlayer } from './playerTypes'

export default async function relatePlayers (props: {
  ctx: Ctx
  players: Array<Doc<'players'>>
}): Promise<RelatedPlayer[]> {
  const relatedPlayers = await overAll(props.players, async (player) => {
    const user = await guard({ ctx: props.ctx, id: player.userId })
    const related = { ...player, user }
    return related
  })
  return relatedPlayers
}
