import { convexAuth } from "@convex-dev/auth/server";
import { Anonymous } from "@convex-dev/auth/providers/Anonymous";
import { api } from './_generated/api'
import createAuthName from '../src/feature/auth/createAuthName'

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Anonymous],
  callbacks: {
    async createOrUpdateUser (ctx, args) {
      if (args.existingUserId != null) {
        return args.existingUserId
      }
      const name = createAuthName()
      const existingUser = await ctx.runQuery(api.getUserByName.default, {
        name
      })
      if (existingUser != null) {
        throw new Error('Username taken')
      }
      return await ctx.db.insert('users', { name })
    }
  }
});
