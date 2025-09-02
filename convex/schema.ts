import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
 
const schema = defineSchema({
  ...authTables,
  games: defineTable({
    name: v.string(),
  })
    .index('name', ['name']),
  users: defineTable({
    name: v.string(),
  })
    .index('name', ['name'])
});
 
export default schema;