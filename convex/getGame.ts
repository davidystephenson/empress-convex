import { getAuthUserId } from '@convex-dev/auth/server'
import { query } from './_generated/server'
import { v } from 'convex/values'
import guardRelatedGame from '../src/game/guardRelatedGame'

const getGame = query({
  args: { gameId: v.string()},
  handler: async (ctx, args) => {
    const gameId = ctx.db.normalizeId('games', args.gameId)
    console.log('gameId', gameId)
    if (gameId == null) {
      return {}
    }
    const game = await guardRelatedGame({ ctx, gameId }) 
    const authId = await getAuthUserId(ctx)
    if (authId == null) {
      return { game }
    }
    const auth = await ctx.db.get(authId) ?? undefined
    return { auth, game }
  }
})
export default getGame