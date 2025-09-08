import { getAuthUserId } from '@convex-dev/auth/server'
import { query } from './_generated/server'
import { overAll } from 'overpromise'
import relateGame from '../src/feature/game/relateGame'

const getHome = query({
  args: {},
  handler: async (ctx) => {
    const games = await ctx.db.query('games').collect()
    const relatedGames = await overAll(games, async (game) => {
      return await relateGame({ ctx, game })
    })
    const authId = await getAuthUserId(ctx)
    if (authId == null) {
      return { games: relatedGames }
    }
    const auth = await ctx.db.get(authId) ?? undefined
    return { auth, games: relatedGames }
  }
})
export default getHome