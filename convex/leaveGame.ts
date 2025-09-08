import guardAuthId from '../src/feature/auth/guardAuthId'
import { mutation } from './_generated/server'
import { ConvexError, v } from 'convex/values'

const leaveGame = mutation({
  args: { gameId: v.id('games') },
  handler: async (ctx, args) => {
    const authId = await guardAuthId({ ctx })
    const existing = await ctx
      .db
      .query('players')
      .withIndex('game_user', (q) => q.eq('gameId', args.gameId).eq('userId', authId))
      .first()
    if (existing == null) {
      throw new ConvexError('Player not found')
    }
    await ctx.db.delete(existing._id)
  }
})
export default leaveGame

