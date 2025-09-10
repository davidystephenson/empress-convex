import createAuthName from '../src/feature/auth/createAuthName'
import guardAuthId from '../src/feature/auth/guardAuthId'
import { mutation } from './_generated/server'
import { ConvexError } from 'convex/values'

const createGame = mutation({
  args: {},
  handler: async (ctx) => {
    await guardAuthId({ ctx })
    const name = createAuthName()
    const existing = await ctx
      .db
      .query('games')
      .withIndex('name', (q) => q.eq('name', name))
      .first()
    if (existing != null) {
      throw new ConvexError('Game already exists')
    }
    await ctx.db.insert('games', { name })
  }
})
export default createGame

