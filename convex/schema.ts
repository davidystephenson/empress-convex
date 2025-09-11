import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

const schema = defineSchema({
  ...authTables,
  games: defineTable({
    name: v.string(),
    startingUserId: v.optional(v.id('users'))
  })
    .index('name', ['name']),
  players: defineTable({
    gameId: v.id('games'),
    userId: v.id('users')
  })
    .index('game', ['gameId'])
    .index('user', ['userId'])
    .index('game_user', ['gameId', 'userId']),
  users: defineTable({
    admin: v.boolean(),
    name: v.string()
  })
    .index('name', ['name'])
})

export default schema
