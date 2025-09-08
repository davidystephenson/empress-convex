import { getAuthUserId } from '@convex-dev/auth/server'
import { query } from './_generated/server'
import { v } from 'convex/values'
import guardRelatedGame from '../src/feature/game/guardRelatedGame'

const getGame = query({
  args: { gameId: v.string()},
  handler: async (ctx, args) => {
    const gameId = ctx.db.normalizeId('games', args.gameId)
    if (gameId == null) {
      return {}
    }
    const game = await guardRelatedGame({ ctx, gameId }) 
    const starts = await ctx.db.query('starts').withIndex(
      'game', (q) => q.eq('gameId', gameId)
    ).collect()
    const episodes = { starts }
    const authId = await getAuthUserId(ctx)
    if (authId == null) {
      return { game, episodes }
    }
    const auth = await ctx.db.get(authId) ?? undefined
    return { auth, game, episodes }
  }
})
export default getGame