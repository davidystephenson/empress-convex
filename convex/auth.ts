import { convexAuth } from "@convex-dev/auth/server";
import { Anonymous } from "@convex-dev/auth/providers/Anonymous";
import createAuthName from '../src/feature/auth/createAuthName'

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Anonymous],
  callbacks: {
    async createOrUpdateUser (ctx, args) {
      if (args.existingUserId != null) {
        return args.existingUserId
      }
      const name = createAuthName()
      const users = await ctx.db.query('users').collect()
      const existingUser = users.find(user => user.name === name)
      if (existingUser != null) {
        throw new Error('Username taken')
      }
      const admin = users.length === 0
      return await ctx.db.insert('users', { admin, name })
    }
  }
});
