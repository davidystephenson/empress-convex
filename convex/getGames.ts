import { getAuthUserId } from '@convex-dev/auth/server'
import { query } from './_generated/server'

const getHome = query({
  args: {},
  handler: async (ctx) => {
    const games = await ctx.db.query('games').collect()
    const userId = await getAuthUserId(ctx)
    if (userId == null) {
      return { games }
    }
    const user = await ctx.db.get(userId)
    return { user, games }
  }
})
export default getHome