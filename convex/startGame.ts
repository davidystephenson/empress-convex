import guardAuthId from '../src/feature/auth/guardAuthId'
import { mutation } from './_generated/server'
import { ConvexError, v } from 'convex/values'
import guard from '../src/feature/arched/guard'

const startGame = mutation({
  args: { gameId: v.id('games') },
  handler: async (ctx, args) => {
    const authId = await guardAuthId({ ctx })
    const players = await ctx.db.query('players').withIndex('game',
      (q) => q.eq('gameId', args.gameId)
    ).collect()
    const player = players.find(player => player.userId === authId)
    if (player == null) {
      throw new ConvexError('Player not found')
    }
    if (players.length < 2) {
      throw new ConvexError('Not enough players to start the game')
    }
    const start = await ctx.db.query('starts').withIndex('game',
      (q) => q.eq('gameId', args.gameId)
    ).unique()
    if (start != null) {
      throw new ConvexError('Game already started')
    }
    await ctx.db.insert('starts', { gameId: args.gameId, userId: player.userId })
  }
})
export default startGame

