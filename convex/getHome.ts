import { getAuthUserId } from '@convex-dev/auth/server'
import { query } from './_generated/server'

const getHome = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (userId == null) {
      return {}
    }
    const user = await ctx.db.get(userId)
    return { user }
  }
})
export default getHome