import { getAuthUserId } from '@convex-dev/auth/server'
import { query } from './_generated/server'
import guard from '../src/arched/guard'

const getHome = query({
  args: {},
  handler: async (ctx) => {
    const authId = await getAuthUserId(ctx)
    console.log('getHome authId', authId)
    if (authId == null) {
      return {}
    }
    const auth = await guard({ ctx, id: authId })
    console.log('getHome auth', auth)
    return { auth }
  }
})
export default getHome
