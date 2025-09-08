import { getAuthUserId } from '@convex-dev/auth/server'
import { query } from './_generated/server'
import { v } from 'convex/values'
import guard from '../src/feature/arched/guard'
import relateGame from '../src/feature/game/relateGame'

const getGame = query({
  args: { gameId: v.string()},
  handler: async (ctx, args) => {
    const gameId = ctx.db.normalizeId('games', args.gameId)
    if (gameId == null) {
      return {}
    }
    const game = await guard({ ctx, id: gameId })
    const relatedGame = await relateGame({ ctx, game })
    const authId = await getAuthUserId(ctx)
    if (authId == null) {
      return { game: relatedGame }
    }
    const auth = await ctx.db.get(authId) ?? undefined
    return { auth, game: relatedGame }
  }
})
export default getGame