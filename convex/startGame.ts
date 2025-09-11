import guard from '../src/feature/arched/guard'
import guardAuthId from '../src/feature/auth/guardAuthId'
import { mutation } from './_generated/server'
import { ConvexError, v } from 'convex/values'

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
    const game = await guard({ ctx, id: args.gameId })
    if (game.startingUserId != null) {
      throw new ConvexError('Game already started')
    }
    await ctx.db.patch(args.gameId, { startingUserId: authId })
  }
})
export default startGame

