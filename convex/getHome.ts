import { getAuthUserId } from '@convex-dev/auth/server'
import { query } from './_generated/server'

const getHome = query({
  args: {},
  handler: async (ctx) => {
    const authId = await getAuthUserId(ctx)
    if (authId == null) {
      return {}
    }
    const auth = await ctx.db.get(authId)
    return { auth }
  }
})
export default getHome