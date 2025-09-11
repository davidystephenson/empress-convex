import guard from '../src/feature/arched/guard'
import guardAuthId from '../src/feature/auth/guardAuthId'
import { mutation } from './_generated/server'
import { ConvexError, v } from 'convex/values'

const joinGame = mutation({
  args: { gameId: v.id('games') },
  handler: async (ctx, args) => {
    const authId = await guardAuthId({ ctx })
    const players = await ctx.db.query('players').withIndex('game',
      (q) => q.eq('gameId', args.gameId)
    ).collect()
    if (players.length >= 6) {
      throw new ConvexError('Game is full')
    }
    const existing = players.find(player => player.userId === authId)
    if (existing != null) {
      throw new ConvexError('Player already exists')
    }
    const game = await guard({ ctx, id: args.gameId })
    if (game.startingUserId != null) {
      throw new ConvexError('Game already started')
    }
    await ctx.db.insert('players', { gameId: args.gameId, userId: authId })
  }
})
export default joinGame

