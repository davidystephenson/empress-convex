import type { Id } from "../../../convex/_generated/dataModel"
import type { Ctx } from "../arched/archedTypes"
import guard from "../arched/guard"
import relateGame from "./relateGame"

export default async function guardRelatedGame(props: {
  ctx: Ctx
  gameId: Id<'games'>
}) {
  const game = await guard({ ctx: props.ctx, id: props.gameId })
  const relatedGame = await relateGame({ ctx: props.ctx, game })
  return relatedGame
}